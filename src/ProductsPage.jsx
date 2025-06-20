import { ProductsIndex } from './ProductsIndex'
import { useState, useEffect } from "react";
import axios from 'axios';

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;

export function ProductsPage() {
  const [products, setProducts] = useState([]);

  const handleIndex = () => {
    axios.get("/products.json").then((response) => {
      setProducts(response.data);
      console.log(products);
    });
  };

  useEffect(handleIndex, []);

  return (
    <main>
      <ProductsIndex products={products} />
    </main>
  )
}