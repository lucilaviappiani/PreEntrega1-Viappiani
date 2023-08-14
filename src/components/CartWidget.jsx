
import { Link } from 'react-router-dom';
import addToCartImage from '../assets/anadir-a-la-cesta.png';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartWidget = () => {

  const {totalQuantity} = useContext(CartContext)

  return (
    <div className='CartWidget'>
      <Link to={"/cart"}>
        <img className='CartImage' src= {addToCartImage}/>
      </Link>
      <p>{totalQuantity}</p>
    </div>
  )
}

export default CartWidget