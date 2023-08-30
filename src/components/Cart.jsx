import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import ClearCart from '../assets/borrar.png';


const Cart = () => {

  //le paso al componente las variables que quiero que consuma
  const {cart, clearCart, removeItem, totalPrice} = useContext(CartContext)

    if (cart.length === 0) {
      return (
        <div className="noItems">
          <p className="ItemTitle">The cart is empty.   Look at our products and add the ones you like the most to your cart!</p>
          <Link to="/products"> <button className="CounterButton">See products </button></Link>
        </div>
      );
    }
  
    return (
      <div>
        {cart.map((product) => (
          <div className="CartItemContainer" key={product.id}>
            <div className="CartItemBody">
              <h2 className="ProductName"> {product.nombre} </h2>
              <h3 className="ProductDetail">Quantity: {product.quantity} </h3> 
              <h4 className="ProductDetail">price US$   {product.price} </h4>
              <p className="ProductDetail">total price US$ {(product.price * product.quantity)}</p>
              <button className="deleteItem" variant="" onClick={() => removeItem(product.id)}>
              Delete item
              </button>
            </div>
          </div>
        ))}
        <div className="ButtonContainer">
        <button variant="" className="clearCart" onClick={clearCart}>
          clear cart
        <img className='CartImage' src= {ClearCart}/>
        </button>
        </div>
        <div className="checkoutContainer">
        <h3 className="totalPrice">Total Price: US$  {totalPrice}</h3>
        <Link to="/Checkout"> <button variant="" className="CounterButton">Checkout</button>
        </Link>
        </div>
      </div>
    );
  };

export default Cart