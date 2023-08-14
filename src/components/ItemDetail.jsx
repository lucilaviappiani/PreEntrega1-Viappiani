import React, { useContext, useState } from 'react';
import { Link, useParams } from 'react-router-dom'; 
import ItemCount from './ItemCount';
import Card from 'react-bootstrap/Card';
import { Carousel} from 'react-bootstrap';
import { CartContext } from '../context/CartContext';


//recibe los productos por props
const ItemDetail = ({ productos }) => {

  //estado donde se almacenará la cantidad agregada de ese producto
  const [quantityAdded, setQuantityAdded] = useState(0)

  const {addItem} = useContext(CartContext)
  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity)

    const { id, nombre, description } = filteredProducts[0];


    const item = {
      id, nombre, description
    }

    addItem(item, quantity)
  }



  //recibe los parámetros del producto por useParams
  const { id } = useParams()
  //hace un fitlrado por id 
  const filteredProducts = productos.filter((producto) => producto.id == id)

  //los mapea. Por cada iteración renderiza un nuevo componente.
  return (
    <div className="ItemListContainer">
      {filteredProducts.map((p) => {
        return (
          <div key={p.id}>

            <Card className="ItemCard" style={{ width: '30rem' }}>
              <Card.Body className='CardBody'>
              <Carousel>
              <Carousel.Item >
                <img src={p.img} className="CarouselImg" text="First slide" />
              </Carousel.Item>
              <Carousel.Item >
                <img src={p.img2} className="CarouselImg" text="First Second slide" />
              </Carousel.Item>
              <Carousel.Item >
                <img src={p.img3} className="CarouselImg" text="First Second slide" />
              </Carousel.Item>
              </Carousel>
                <Card.Title>{p.nombre}</Card.Title>
                <Card.Text>{p.description}</Card.Text>
                <div>
                  {
                    quantityAdded > 0 ? (<Link to={"/cart"}> <button className='CounterButton'> ¡Product added! Go to cart</button></Link>)
                  : (<ItemCount initial={1} onAdd={handleOnAdd} />)
                  }
                
                </div>
              </Card.Body>
            </Card>
          </div>
        )
      })}
    </div>
  )
}

export default ItemDetail
