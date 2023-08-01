import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Item = ({description, name, cardImage,}) => {
  return (
    <Card className= "ItemCard" style={{ width: '18rem'}}>
    <Card.Img variant="top" src= {cardImage} className='CardImage'/>
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Text>{description}</Card.Text>    
      <Button variant="" className='DetailButton'>View more</Button>
    </Card.Body>
  </Card>
  )
}

export default Item