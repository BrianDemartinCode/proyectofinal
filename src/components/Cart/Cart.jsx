import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const { cart, clearCart, deleteProductById, totalPrice } = useContext(CartContext);

  return (
    <div>
      <div>
        {cart.map((product) => (
          <div className="container-card">
            <div className="card bg-light box-card" key={product.id}>
              <img src={product.image} alt="producto" width={120} />
              <p>Nombre del producto: {product.name}</p>
              <p>Cantidad: {product.quantity}</p>
              <p>Descripcion: {product.description}</p>
              <p>Precio final: {product.quantity + product.price}</p>
              <button className="btn btn-primary" onClick={()=> deleteProductById(product.id)}>Eliminar</button>
            </div>
          </div>
        ))}

        <div className="container-button">

          <div className="btn-box">
          
            <h1 className="total-price">Total de la compra: {totalPrice()}</h1>
          
            <div className="buttons-box">
              <Link to="/checkout" className="btn btn1 bg-light">
                Continuar compra
              </Link>
  
              <button className="btn bg-light" onClick={clearCart}>
                vaciar
              </button>
            </div>
          
          </div>
          
        </div>

      </div>
    </div>
  );
};

export default Cart;
