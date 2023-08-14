import React from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';

const Checkout = () => {
  const [name, setName] = useState("")
  const [lastname, setLastname] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [paymentMethod, setPaymentMethod] = useState("Credit card"); // Por defecto, seleccionamos el primer método de pago


  const handleSubmit = (e) => {
    e.preventDefault()
    name === ""? alert("please complete your name") : console.log("Name:", name);
    lastname === ""? alert("please complete your lastname") : console.log("Last name:", lastname);
    email === ""? alert("please complete your email") : console.log("email:",email);
    phone === ""? alert("please complete your phone") : console.log("Phone:",phone);
    console.log("Payment method:", paymentMethod);
    
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
    <Button variant="" className='CounterButton ' type="submit" > Submit</Button>

  </Form>
  )
}

export default Checkout