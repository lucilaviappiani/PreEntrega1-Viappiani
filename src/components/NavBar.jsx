
import CartWidget from './CartWidget';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import devlogo from '../assets/dvlogo.png';
import { Link } from 'react-router-dom';


const NavBar = () => {
  return (
    <div>
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container className='NavBarContainer'>
        <Link to={"/"}>
          <img className='DevLogo' src= {devlogo}/>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto NavBarList">
            <Link className='navItem' to={'/category/website'}>Website</Link>
            <Link className='navItem' to={'/category/mobileapp'}>Mobile App</Link>
            <Link className='navItem' to={'/category/ecommerce'}>E-commerce</Link>
            <Link className='navItem' to={'/category/support'}>Support/maintenance</Link>
            <Link className='navItem' to={'/products'}>All products</Link>
          </Nav>
        </Navbar.Collapse>
        <CartWidget />
      </Container>
    </Navbar>
    </div>
  );
}
export default NavBar