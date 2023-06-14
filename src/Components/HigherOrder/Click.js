import React from 'react'
import HigherOrder from './HigherOrder'

const Click = ({count, increment,decrement}) => {
  return (
    <div className='counter'>
        <h4>ClickCounter : {count}</h4>
        <button onClick={increment}>INCREASE😊</button>
        <button onClick={decrement}>DECREASE🙁</button>   
    </div>
  )
}

export default HigherOrder(Click);