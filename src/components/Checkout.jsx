import React from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';


const Checkout = () => {
  const [name, setName] = useState("")
  const [lastname, setLastname] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [paymentMethod, setPaymentMethod] = useState("Credit card"); // Por defecto, seleccionamos el primer método de pago
  const [orderId, setOrderId] = useState(null)
  const {cart} = useContext(CartContext)


  const db= getFirestore()


 const handleSubmit = (e) => {
    e.preventDefault()
    addDoc(orderCollection, order).then(({id}) =>
      setOrderId(id))

      sendOrder()



    
  }

  const order = {
    name,
    lastname,
    email,
    phone,
    paymentMethod
  }

  const orderCollection = collection(db, "orden")

  const sendOrder = () => {
    const order = {
      buyer: {name: {name}, lastname: {lastname}, email: {email}, phone:{phone}, paymentMethod: {paymentMethod}},
      items: {cart},
      total: {},
    }
    const orderCollection = collection(db, "orders")

    addDoc(orderCollection, order).then(({id}) => setOrderId(id))
  }

  return (
    <Form onSubmit={handleSubmit}>
    <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text"  onChange={(e)=> setName(e.target.value)}/>
      </Form.Group>

      <Form.Group as={Col} controlId="formGridEmail">
        <Form.Label> Last name</Form.Label>
        <Form.Control type="text"  onChange={(e)=> setLastname(e.target.value)} />
      </Form.Group>

    </Row>

    <Row className="mb-3">

      <Form.Group as={Col} controlId="formGridEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="youremail@hotmail.com" onChange={(e)=> setEmail(e.target.value)} />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridEmail">
        <Form.Label>Phone number</Form.Label>
        <Form.Control type="tel" placeholder=" 54 9 11523658" onChange={(e)=> setPhone(e.target.value)}/>
      </Form.Group>
      </Row>

    <Row className="mb-3">

    <Form.Label>Payment method</Form.Label>
    <Form.Select aria-label="Default select example" value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
      <option value="Credit card">Credit card</option>
      <option value="Debit card">Debit card</option>
      <option value="PayPal">PayPal</option>
    </Form.Select>
    </Row>  
     <p> You'll be able to see your order number here : {orderId} </p>
    <Button variant="" className='CounterButton ' type="submit" > Submit</Button>
 

  </Form>
  )
}

export default Checkout