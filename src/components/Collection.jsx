import React from 'react'
import { useState, useEffect } from 'react'
import { collection, getDocs, getFirestore } from 'firebase/firestore'

const Collection = () => {

    //todo este código va a ir a item list container!!!!

    const [product, setProduct] = useState([])
    console.log(product)

    useEffect(() => {
        const db= getFirestore()
        const itemColection = collection(db, "SERVICES")
        getDocs(itemColection).then((snapshot) =>{
            const docs = snapshot.docs.map((doc)=> doc.data())
            setProduct(docs)
        })

    
        }, [])

  return (
    <div> 
        {
            product.map((product)=> (
                <div key={product.nombre}>
                    <h1> {product.nombre}</h1>
                </div>
            ))
        }
    </div>
  )
}

export default Collection