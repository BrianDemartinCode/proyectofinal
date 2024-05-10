import { useContext } from "react"; 
import { CartContext } from "../../Context/CartContext";
import { PiShoppingCartSimple } from "react-icons/pi";
import { Link } from "react-router-dom";
import './navbar.css'

const CartWidget = () => {

  const { totalQuantity } = useContext(CartContext)
 
  return (
    <Link to="/cart" className="cartwidget">
      <PiShoppingCartSimple className="carrito" size={30} />
      <p className="carrito">{totalQuantity()}</p>
    </Link>
  );
};
export default CartWidget;
