import ItemList from "./ItemList";
import { useParams  } from "react-router-dom";
import { useState, useEffect } from 'react'
import { collection, getDocs, getFirestore } from 'firebase/firestore'

const ItemListContainer = () => {
  const { category } = useParams()

  
  const [productos, setProductos] = useState([])
  console.log(productos)

  useEffect(() => {
      const db= getFirestore()
      const itemColection = collection(db, "SERVICES")
      getDocs(itemColection).then((snapshot) =>{
          const docs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
          setProductos(docs)
      })
  
      }, [])


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