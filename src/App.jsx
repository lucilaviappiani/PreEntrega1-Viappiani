
import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemCount from './components/ItemCount'
import Item from './components/Item'


const App = () => {
  return (
    <>
    <NavBar />
    <ItemListContainer
    greeting="¡Welcome to Develover store!"/>
    </>
  )
}

export default App