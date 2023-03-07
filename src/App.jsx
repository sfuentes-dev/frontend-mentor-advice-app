import { useState } from 'react'

import { useFetchAdvice } from './hook/useFetchAdvice'

import Dice from './assets/images/icon-dice.svg'

const App = () => {
  const [id, setId] = useState(11)

  const { data, isLoading } = useFetchAdvice(`https://api.adviceslip.com/advice/${id}`)

  const handleClick = () => {
    const randomNum = Math.floor(Math.random() * (220 - 1)) + 1
    setId(randomNum)
  }

  return (
    <div className='container'>
      <span>{`Advice #${data.id}`}</span>

      <h1>&ldquo;{`${data.advice}`}&rdquo;</h1>

      <div className='divider'></div>

      <button className='dice-container' disabled={isLoading} onClick={handleClick}>
        <img src={Dice} alt='Dice' />
      </button>
    </div>
  )
}

export default App
