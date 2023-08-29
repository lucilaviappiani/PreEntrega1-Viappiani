import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";


const Cart = () => {

  //le paso al componente las variables que quiero que consuma
  const {cart, clearCart, removeItem, totalPrice} = useContext(CartContext)

    if (cart.length === 0) {
      return (
        <div>
          <p>The cart is empty. Look at our products and add the ones you like the most to your cart</p>
          <Link to="/products"> See products </Link>
        </div>
      );
    }
  
    return (
      <div>
        {cart.map((product) => (
          <div className="CartItemContainer" key={product.id}>
            <div className="CartItemBody">
              <h2>Product {product.nombre} </h2>
              <h3>Quantity: {product.quantity} </h3> 
              <h4>price US${product.price} </h4>
              <p>total price US$ {(product.price * product.quantity)}</p>
            </div>
            <Button className="CounterButton" variant="" onClick={() => removeItem(product.id)}>
              Eliminar
            </Button>
          </div>
        ))}
        <Button variant="warning" onClick={clearCart}>
          Limpiar Carrito
        </Button>
        <h3>Total Price: US${totalPrice}</h3>
        <Link to="/Checkout">
          <Button variant="" className="CounterButton">
            Checkout
          </Button>
        </Link>
      </div>
    );
  };

export default Cart