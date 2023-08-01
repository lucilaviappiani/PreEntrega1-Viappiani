import ItemList from "./ItemList";
import website from "../assets/website.jpg";
import mobileapp from "../assets/mobileapp.jpg";
import landing from "../assets/landing.png";
import ecommerce from "../assets/ecommerce.jpg";

const ItemListContainer = () => {

  const productos = [
    {id: 485316, nombre: "product A" , description: "descripción producto A" ,stock: 2, img: website  },
    {id: 986541, nombre: "product B", description: "descripción producto B",stock: 2, img: mobileapp},
    {id: 658954, nombre: "product C", description:"descripción producto C" ,stock: 3, img: landing},
    {id: 625354, nombre: "product D", description:"descripción producto D" ,stock: 3, img: ecommerce },

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
    <div className="ItemListContainerBody">
        <ItemList productos={productos}/>
    </div>
  )
}

export default ItemListContainer