
import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'  
import ItemDetailContainer from './components/ItemDetailContainer'
import Home from './components/Home'
import Cart from './components/Cart'
import {CartContextProvider} from './context/CartContext'
import Checkout from './components/Checkout'


const App = () => {
  return (
  
    <BrowserRouter>
    {/*envuelvo todo con CartContext */}
    <CartContextProvider>
      <NavBar />
      <Routes>
        <Route exact path='/' element= {<Home/>} />
        <Route exact path='/cart' element= {<Cart/>} />        
        <Route exact path='/products' element={<ItemListContainer/>}/>  
        <Route exact path='/checkout' element= {<Checkout/>} />            
        <Route exact path='/category/:category' element={<ItemListContainer/>}/>
        <Route exact path='/item/:id' element={<ItemDetailContainer/>} />
      </Routes>
      </CartContextProvider>
  </BrowserRouter>
  
  )
}

export default App