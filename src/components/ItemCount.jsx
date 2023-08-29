import React, { useState } from 'react'

const ItemCount = ( {onAdd} ) => {

const [quantity, setQuantity] = useState(1)

const sumar =()=>{
    //aquí puedo agregaar lógica para que no se exceda del stock
    setQuantity(quantity+1)
}
const restar=()=>{
    //aquí puedo agregar lógica para que no tome valores negativos
    setQuantity(quantity-1)
}


  return (
    <>
    <div className='countBody'>
      <div className='CountContainer'>
        <button onClick={restar} className='CounterButton SubstractButton'>-</button>
        <p className='CountNumber'>{quantity}</p>
        <button onClick={sumar} className='CounterButton'>+</button>
      </div>
      <button variant="" className='CounterButton AddToCart' onClick={() => onAdd(quantity)}> Add to cart</button>
    </div>
    </>
  )
}

export default ItemCount