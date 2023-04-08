import React, { useState } from 'react'
import './ItemCount.css'

const ItemCount = () => {
  
  const [counter, setCounter] = useState (0)
  
  const sumar = () => {
    setCounter(counter + 1)
  }
  
  const restar = () => {
    if (counter < 1){
      setCounter (0)
    }else
    setCounter(counter - 1)
  }

  const reset = () => {
    setCounter (0)
  }
  
  return (
    <>
    <div className='tituloContador'>
    Cantidad: {counter}
    </div>
    <div className='botones'>
      <button onClick={sumar}>➕</button>
      <button onClick={restar}>➖</button>
      <button onClick={reset}>🔄</button>
    </div>
    </>
    )
}

export default ItemCount

