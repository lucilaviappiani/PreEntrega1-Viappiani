
import addToCartImage from '../assets/anadir-a-la-cesta.png';

const CartWidget = () => {
  return (
    <div className='CartWidget'>
        <img className='CartImage' src= {addToCartImage}/>
        <p>2</p>
    </div>
  )
}

export default CartWidget