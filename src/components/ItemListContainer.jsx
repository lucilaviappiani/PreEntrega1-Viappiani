import ItemList from "./ItemList";
import { useParams  } from "react-router-dom";
import { useState, useEffect } from 'react';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import Loading from "./Loading";

const ItemListContainer = () => {
  const { category } = useParams()

  const [loading, setLoading] = useState(true)
  const [productos, setProductos] = useState([])

  useEffect(() => {
    setTimeout(()=> {
      const db= getFirestore()
      const itemColection = collection(db, "SERVICES")
      getDocs(itemColection).then((snapshot) =>{
          const docs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
          setProductos(docs)
          setLoading(false)
      })
    },3000)
      
      }, [])

  if(loading){
    return <Loading/>
  }


  //filtro productos por categoría
  const filteredProducts = productos.filter((producto)=> producto.category === category)

  //paso productos filtrados a ItemList(componente hijo) como prop.
  return (
    <div className="ItemList">
      {/*Si existe categoría, paso los productos filtrados. De lo contrario, paso todos los productos*/ }
      { category ? <ItemList productos={filteredProducts}/> : <ItemList productos={productos}/>}
    </div>
  )
}

export default ItemListContainer