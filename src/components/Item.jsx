import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ItemCount from './ItemCount';

const Item = ({description, name,}) => {
  return (
    <Card style={{ width: '18rem'}}>
    <Card.Img variant="top"/>
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Text>{description}</Card.Text>    
      <ItemCount />
      <Button variant="primary">Go somewhere</Button>
  
    </Card.Body>
  </Card>
  )
}

export default Item