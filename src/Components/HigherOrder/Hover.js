import React from 'react'
import HigherOrder from './HigherOrder'

const Hover = ({count, increment,decrement}) => {
  return (
    <div className='counter'>
        <h4>HoverCounter : {count}</h4>
        <button onMouseOver={increment}>INCREASE😉</button>
        <button onMouseOver={decrement}>DECREASE🙁</button> 
    </div>
  )
}

export default HigherOrder(Hover);