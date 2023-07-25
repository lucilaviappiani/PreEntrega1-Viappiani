
import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemCount from './components/ItemCount'
import Item from './components/Item'


const App = () => {

const datos = [
  {id: 485316, nombre: "product A" , description: "descripción" ,stock: 2 },
  {id: 986541, nombre: "product B", description: "descripción",stock: 2},
  {id: 658954, nombre: "product C", description:"descripción" ,stock: 3 }
]

const getDatos = () => {
  return new Promise(( resolve, reject)=> {
    if (datos.length === 0) {
      reject (new Error("no hay datos"))
    }
    setTimeout(()=> {
      resolve(datos)
    },2000)
  })
}

async function fetchingData() {
  try{
    const datosFetched = await getDatos()
    console.log(datosFetched)
  } catch (error) {
    console.log(error)
  }
}

fetchingData()

  return (
    <>
    <NavBar />
    <ItemListContainer
    greeting="¡Welcome to Develover store!"/>
    <Item/>
    <ItemCount/>
    </>
  )
}

export default App