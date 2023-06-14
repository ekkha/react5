import React, { useState } from 'react'

const HigherOrder = (OriginalCompo) => {
    const NewCompo = () =>{
        const [count, setCount]=useState(0);
        const increment = () => {
          setCount(count+1);
        }
        const decrement = () => {
          setCount(count - 1);
        }
  return(
    <div>
   <OriginalCompo 
  count={count} 
  increment={increment}
  decrement={decrement}/>
  </div>
  )
    }
  return NewCompo;
}

export default HigherOrder;