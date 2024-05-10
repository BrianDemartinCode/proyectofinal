import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom"
import { collection, query, where, getDocs } from "firebase/firestore";
import "./itemListContainer.css"
import db from "../../db/db";

const ItemListContainer = ({ tituloPresentacion }) => {
  const [products, setProducts] = useState([]);

  const { idCategory } = useParams()

  const getProducts = async() => {
    const dataDb = await getDocs(collection(db, "products"));
    
    const data = dataDb.docs.map( ( productDb )=> {
      return {id: productDb.id, ...productDb.data()}
    })

    setProducts(data)
  }

  const getProductsByCategory = async() => {
    const q = query(collection(db, "products"), where("category", "==", idCategory))

    const dataDb = await getDocs(q);
    
    const data = dataDb.docs.map( ( productDb )=> {
      return {id: productDb.id, ...productDb.data()}
    })

    setProducts(data)
  }

  useEffect(() => {

    if (idCategory){
      getProductsByCategory()
    }else{
      getProducts()
    }

  }, [idCategory]);

  return (
    <div className="item-list-container">
      <h2 className="title-items">{tituloPresentacion}</h2>
      <ItemList products={products} />
    </div>
  );
};
export default ItemListContainer;
