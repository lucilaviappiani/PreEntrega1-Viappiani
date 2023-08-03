import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Item = ({description, name, cardImage, id}) => {
  return (
    <Card className= "ItemCard" style={{ width: '18rem'}}>
    <Card.Img variant="top" src= {cardImage} className='CardImage'/>
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Text>{description}</Card.Text>
      <Link to={`/item/${id}`}>
      <Button variant="" className='DetailButton'>View more</Button>
      </Link>
    </Card.Body>
  </Card>
  )
}

export default Item