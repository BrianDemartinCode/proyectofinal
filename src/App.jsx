import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./Context/CartContext";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <ToastContainer />

        <Routes>
          <Route path="/" element={<ItemListContainer tituloPresentacion="Nuestros productos" />}/>

          <Route path="/category/:idCategory" element={<ItemListContainer tituloPresentacion="Productos" />}/>

          <Route path="/detail/:idProduct" element={<ItemDetailContainer />} />

          <Route path="/cart" element={<Cart/>} />

          <Route path="/checkout" element={<Checkout/>}/>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
