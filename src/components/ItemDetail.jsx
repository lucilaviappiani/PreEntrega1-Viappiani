import React from 'react';
import { useParams } from 'react-router-dom'; 
import ItemCount from './ItemCount';
import Card from 'react-bootstrap/Card';


const ItemDetail = ({ productos }) => {
  const { id } = useParams()
  const filteredProducts = productos.filter((producto) => producto.id == id)
  return (
    <div>
      {filteredProducts.map((p) => {
        return (
          <div key={p.id}>
            <Card className="ItemCard" style={{ width: '18rem' }}>
            <Card.Img variant="top" src= {p.img} className='CardImage'/>
              <Card.Body>
                <Card.Title>{p.nombre}</Card.Title>
                <Card.Text>{p.description}</Card.Text>
                <ItemCount/>
              </Card.Body>
            </Card>
          </div>
        )
      })}
    </div>
  )
}

export default ItemDetail