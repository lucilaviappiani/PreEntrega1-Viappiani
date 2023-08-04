import React from 'react';
import { useParams } from 'react-router-dom'; 
import ItemCount from './ItemCount';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import { Carousel} from 'react-bootstrap';



//recibe los productos por props
const ItemDetail = ({ productos }) => {
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
                <ItemCount/>
                <Button variant="" className='CounterButton AddToCart'> Add to cart</Button>
              </Card.Body>
            </Card>
          </div>
        )
      })}
    </div>
  )
}

export default ItemDetail
