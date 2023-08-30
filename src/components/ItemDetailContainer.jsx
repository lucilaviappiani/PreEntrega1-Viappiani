import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const { id } = useParams()
  const [productos, setProductos] = useState([])

  useEffect(() => {
      const db= getFirestore()
      const oneItem = doc(db, "SERVICES", `${id}`)
      getDoc(oneItem).then((snapshot) =>{
        if(snapshot.exists()) {
          const docs = snapshot.data();
          setProductos({id: snapshot.id, ...docs})
        }
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