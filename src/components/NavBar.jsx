
import CartWidget from './CartWidget';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import devlogo from '../assets/dvlogo.png';


const NavBar = () => {
  return (
    <div>
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container className='NavBarContainer'>
        <Navbar.Brand href="#home"><img className='DevLogo' src= {devlogo}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto NavBarList">
            <Nav.Link href="#website">Website</Nav.Link>
            <Nav.Link href="#mobileapp">Mobile App</Nav.Link>
            <Nav.Link href="#ecommerce">E-commerce</Nav.Link>
            <Nav.Link href="#support">Support/maintenance</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <CartWidget />
      </Container>
    </Navbar>
    </div>
  );
}
export default NavBar