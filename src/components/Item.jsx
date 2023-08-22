import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';



const Item = ({description, name, img, id}) => {
  return (
    <Card className= "ItemCard">
    <img variant="top" src={img} className='CardImage'/>
    <Card.Body className='CardBody'>
      <Card.Title className='ItemTitle'>{name}</Card.Title>
      <Card.Text className='ItemDescription'>{description}</Card.Text>
      <Link to={`/item/${id}`}>{/*al presionar botón de view more nos direcciona a los detalles del producto*/}
        <Button variant="" className='DetailButton'>View more</Button>
      </Link>
    </Card.Body>
  </Card>
  )
}

export default Item