import React, { useState } from 'react'

const ItemCount = () => {

const [contador,setContador]= useState(0)

const sumar =()=>{
    //aquí puedo agregaar lógica para que no se exceda del stock
    setContador(contador+1)
}
const restar=()=>{
    //aquí puedo agregar lógica para que no tome valores negativos
    setContador(contador-1)
}


  return (
    <div className='CountContainer'>
        <button onClick={restar} className='CounterButton SubstractButton'>-</button>
        <p>{contador}</p>
        <button onClick={sumar}  className='CounterButton'>+</button>
    </div>
  )
}

export default ItemCount