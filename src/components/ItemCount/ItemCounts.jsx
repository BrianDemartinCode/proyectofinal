import './ItemCount.css'
import { useState } from "react";

const ItemCounts = ({handleAddToCart}) => {
    const [count, setCount] = useState(1);

    const handleAdd = () => {
      setCount(count + 1);
    };
  
    const handleSubtract = () => {
      if (count > 1) {
        setCount(count - 1);
      }
    };
  
    return (
      <div>

        <div className='container-count'>
            <div>
              <button className='btn btn-light' onClick={ ()=> handleAddToCart(count)} >Agregar al carrito</button>
            </div>
            
            <div>
              <button className='btn btn-light' onClick={handleSubtract}>-</button>
              <p className='p'> {count} </p>
              <button className='btn btn-light' onClick={handleAdd}>+</button>
            </div>
        </div>
        
      </div>
    );
}

export default ItemCounts
