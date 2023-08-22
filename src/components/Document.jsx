import React from 'react'
import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import {doc, getDoc, getFirestore} from 'firebase/firestore'

const Document = () => {

    //todo este código va a ir a item detail container!!!!

    const [product, setProduct] = useState ([])
    console.log(product)

    useEffect(() => {
    const db = getFirestore()
    const item = doc(db, "SERVICES", "UkHHzEWIANMkqiwylYP0")
    getDoc(item).then((snapshot) => {
        if (snapshot.exists()){
            const docs= snapshot.data()
            setProduct(docs)
        }
    })

    }, [])

    return (
        <div>
            {
            <Card className="ItemCard" style={{ width: '18.1rem' }}>
                <Card.Img variant="top" className='CardImage' />
                <Card.Body className='CardBody'>
                    <Card.Title>{product.nombre}</Card.Title>
                    <Card.Text>{product.Description}</Card.Text>
                    <Card.Text>{product.price}</Card.Text>
                    <Button variant="" className='DetailButton'>View more</Button>
                </Card.Body>
            </Card>
            }
        </div>
    )
}

export default Document