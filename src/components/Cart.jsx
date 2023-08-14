import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"

const Cart = () => {

  //lr paso al componente las variables que quiero que consuma
  const {cartList, setCart, longitud} = useContext(CartContext)
  return (
    <div>
      <Link to={`/Checkout`}>
      <Button variant="" className='CounterButton '> Checkout</Button>
      </Link>
    </div>
  )
}

export default Cart