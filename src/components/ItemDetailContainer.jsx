import React from 'react';
import { useEffect, useState } from 'react';
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    //recibe los parámetros del producto por useParams
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


  //Le paso la información de los productos a itemDetail (componente hijo) por props.
  return (
    <div className="ItemList">
        <ItemDetail productos={productos}/>
    </div>
  )
}

export default ItemDetailContainer