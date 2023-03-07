import { useEffect } from 'react'
import { useState } from 'react'

export const useFetchAdvice = (url) => {
  const [state, setState] = useState({
    data: {},
    isLoading: true,
    hasError: null,
  })

  const getAdvice = async () => {
    setState({
      ...state,
      isLoading: true,
    })

    const resp = await fetch(url)
    const data = await resp.json()

    const { slip } = data

    setState({
      data: slip,
      isLoading: false,
      hasError: null,
    })
  }

  useEffect(() => {
    getAdvice()
  }, [url])

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  }
}
