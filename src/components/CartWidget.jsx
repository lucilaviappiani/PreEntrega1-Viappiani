
import { Link } from 'react-router-dom';
import addToCartImage from '../assets/anadir-a-la-cesta.png';

const CartWidget = () => {
  return (
    <div className='CartWidget'>
      <Link to={"/cart"}>
        <img className='CartImage' src= {addToCartImage}/>
      </Link>
      <p>2</p>
    </div>
  )
}

export default CartWidget