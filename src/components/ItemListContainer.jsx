import ItemList from "./ItemList"


const ItemListContainer = () => {

  const productos = [
    {id: 485316, nombre: "product A" , description: "descripción producto A" ,stock: 2 },
    {id: 986541, nombre: "product B", description: "descripción producto B",stock: 2},
    {id: 658954, nombre: "product C", description:"descripción producto C" ,stock: 3 }
  ]
  
  const getProductos = () => {
    return new Promise(( resolve, reject)=> {
      if (productos.length === 0) {
        reject (new Error("no hay datos"))
      }
      setTimeout(()=> {
        resolve(datos)
      },2000)
    })
  }
  
  async function fetchingData() {
    try{
      const productosFetched = await getProductos()
      console.log(productosFetched)
    } catch (error) {
      console.log(error)
    }
  }
  
  fetchingData()

  return (
    <div>
        <ItemList productos={productos}/>
    </div>
  )
}

export default ItemListContainer