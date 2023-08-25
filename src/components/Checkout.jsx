import React from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';


const Checkout = () => {
  const [name, setName] = useState("")
  const [lastname, setLastname] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [paymentMethod, setPaymentMethod] = useState("Credit card"); // Por defecto, seleccionamos el primer método de pago
  const [orderId, setOrderId] = useState(null)
  const {cart} = useContext(CartContext)
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const [formVisible, setFormVisible] = useState(true);



  const db= getFirestore()


 const handleSubmit = (e) => {
    e.preventDefault()
    addDoc(orderCollection, order).then(({id}) =>
      setOrderId(id), 
      setOrderSubmitted(true),
      setFormVisible(false))

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
    <div>
      {formVisible && (
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" onChange={(e) => setName(e.target.value)} />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridLastname">
              <Form.Label>Last name</Form.Label>
              <Form.Control type="text" onChange={(e) => setLastname(e.target.value)} />
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
          <Button variant="" className="CounterButton" type="submit">
            Submit
          </Button>
        </Form>
      )}

      {orderSubmitted && (
        <>
        <h5> Order sent!</h5>
        <p>Your order number is: {orderId}</p>
        <Link to={"/Products"}> <Button variant="" className="CounterButton"> Back to home</Button> </Link>
        </>
      )}
    </div>
  );
}

export default Checkout;
