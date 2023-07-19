
import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemCount from './components/ItemCount'


const App = () => {
//En este lugar puedo escribir la lógica de mi componente 
  return (
    <>
    <NavBar />
    <ItemListContainer
    greeting="¡Welcome to Develover store!"/>
    <ItemCount/>
    </>
  )
}

export default App