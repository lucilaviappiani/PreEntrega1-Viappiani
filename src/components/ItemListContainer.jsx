import ItemList from "./ItemList";
import website from "../assets/website.jpg";
import mobileapp from "../assets/mobileapp.jpg";
import landing from "../assets/landing.png";
import ecommerce from "../assets/ecommerce.jpg";
import { useParams  } from "react-router-dom";

const ItemListContainer = () => {
  const { category } = useParams()

  const productos = [
    {id: 1, nombre: "product A" , description: "descripción producto A" ,stock: 2, img: website, category: "website"  },
    {id: 2, nombre: "product B", description: "descripción producto B",stock: 2, img: mobileapp, category: "mobileapp"},
    {id: 3, nombre: "product C", description:"descripción producto C" ,stock: 3, img: landing, category:"ecommerce"},
    {id: 4, nombre: "product D", description:"descripción producto D" ,stock: 3, img: ecommerce, category:"support" },

  ]
  
  const getProductos = () => {
    return new Promise(( resolve, reject)=> {
      if (productos.length === 0) {
        reject (new Error("no hay datos"))
      }
      setTimeout(()=> {
        resolve(productos)
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

  const filteredProducts = productos.filter((producto)=> producto.category === category)

  return (
    <div className="ItemList">
        <ItemList productos={filteredProducts}/>
    </div>
  )
}

export default ItemListContainer