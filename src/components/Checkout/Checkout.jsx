import { useContext, useState } from "react";
import FormularioCheckout from "./FormularioCheckout";
import { CartContext } from "../../Context/CartContext";
import { addDoc, collection } from "firebase/firestore";
import { Link } from "react-router-dom";
import db from "../../db/db";
import validateForm from "../../utils/validationYup.js";
import { toast } from "react-toastify";
import './FormularioCheckout.css'

const Checkout = () => {
  const [dataForm, setDataForm] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [idOrder, setIdOrder] = useState(null)

  const { cart, totalPrice, clearCart } = useContext(CartContext)

/* ---------------------------------inputs----------------------------------------- */
  const handleChangeinput = (event) => {
    setDataForm({ ...dataForm, [event.target.name]: event.target.value });
  };
/* ------------------------------enviar orden-------------------------------------------- */
  const handleSubmit = async(event) => {
    event.preventDefault()
    
    const order = {
        user: { ...dataForm },
        products: [ ...cart ],
        total: totalPrice()
    }

    //! validar los campos del formulario 
    const response = await validateForm(dataForm)

    if(response.status === "success"){
        uploadOrder(order)
    }else{
        toast(response.error)
    }
  }
/* ---------------------------------subir la orden a firebase----------------------------------------- */
  const uploadOrder = async(order) => {
    const ordersRef = collection(db, "orders")
    const response = await addDoc(ordersRef, order)

    setIdOrder(response.id)
    clearCart()
  }

  return (
    <div>

        {
            idOrder ? (
            <div>
                <div className="container-order tracking-in-expand">
                    <h2 className="h2-order">Se a enviado correctamente la orden, su pedido esta en camino!</h2>
                    <p className="p-order">Profavor guardar el su ID de compra: {idOrder}</p>
                    <Link to="/" > <button className="btn bg-light"> Volver al inicio </button> </Link>
                </div>
            </div> ):(

                <FormularioCheckout
                dataForm={dataForm}
                handleChangeinput={handleChangeinput}
                handleSubmit={handleSubmit}
                />

            )          
        }

    </div>
  );
};

export default Checkout;
