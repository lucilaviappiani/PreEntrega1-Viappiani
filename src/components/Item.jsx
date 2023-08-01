import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Item = ({description, name, img,}) => {
  return (
    <Card className= "ItemCard" style={{ width: '18rem'}}>
    <img src= {img}/>
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Text>{description}</Card.Text>    
      <Button variant="" className='DetailButton'>View more</Button>
    </Card.Body>
  </Card>
  )
}

export default Item