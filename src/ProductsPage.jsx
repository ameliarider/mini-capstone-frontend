import { ProductsIndex } from './ProductsIndex'
import { ProductsNew } from './ProductsNew'
import { useState, useEffect } from "react";
import axios from 'axios';

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;

export function ProductsPage() {
  const [products, setProducts] = useState([]);

  const handleIndex = (products) => {
    axios.get("/products.json").then((response) => {
      setProducts(response.data);
      console.log(products);
    });
  };

  useEffect(handleIndex, []);

  const handleCreate = (params, successCallback) => {
    axios.post("/products.json").then((response) => {
      setProducts([...PushSubscriptionOptions, response.data]);
      successCallback();
    })
  }

  return (
    <main>
      <ProductsIndex products={products} />
      <ProductsNew onCreate={handleCreate}/>
    </main>
  )
}