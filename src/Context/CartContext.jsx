import { createContext, useState } from "react"

const CartContext = createContext()

const CartProvider = ({children}) => {

    const [ cart, setCart ] = useState([])

    //! codigo de no acepta duplicados

    const addToCart = (newProduct) => {
        const condicion = isInCart(newProduct.id)
        if (condicion) {
            const productsMod = cart.map( (product) => {
                if (productCart.id === newProduct.id) {
                    return { ...productCart, quantity: productCart.quantity + newProduct.quantity }
                }else{
                    return productCart
                }
            })

            setCart(productsMod)
        }else{

            setCart([...cart, newProduct])
        }
    }

    //! codigo de no acepta duplicados

    //! codigo para detectar si ya esta en el carrito de compras

    const isInCart = (productId) => {
        const condicion = cart.some ( (product) => product.id === productId)
        return condicion
    }

    //! codigo para detectar si ya esta en el carrito de compras
    const totalQuantity = () => {
        const quantity = cart.reduce( (total, product)=> total + product.quantity, 0)
        return quantity
    }

    //! borrar todos los productos
    const clearCart = () => {
        setCart([])
    }
    //! borrar todos los productos

    //! borrar productos sin necesidad de borrar todos
    const deleteProductById = (productId) => {
        const productFilter = cart.filter ((productCart) => productCart.id !== productId)
        setCart(productFilter)
    }
    //! borrar productos sin necesidad de borrar todos

    //! precio total de la compra de todos los productos agregados al carrito de compras

    const totalPrice = () => {
        const quantity = cart.reduce( (total, product)=> total + ( product.quantity * product.price), 0)
        return quantity
    }
    //! precio total de la compra de todos los productos agregados al carrito de compras
    return(
        <div>
            <CartContext.Provider value={{ cart, addToCart, totalQuantity, clearCart, deleteProductById, totalPrice }}>
            {children}
            </CartContext.Provider>
        </div>
    );
}

export {CartContext, CartProvider}