import ItemList from "./ItemList"



const ItemListContainer = ({greeting}) => {

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
    <div>
        <h4>{greeting}</h4>
        <ItemList/>
    </div>
  )
}

export default ItemListContainer