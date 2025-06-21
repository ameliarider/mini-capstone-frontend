import { ProductsIndex } from './ProductsIndex'
import { ProductsNew } from './ProductsNew'
import { useState, useEffect } from "react";
import { Modal } from './Modal';
import { ProductsShow } from './ProductsShow'
import axios from 'axios';

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;

export function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [isProductsShowVisible, setIsProductsShowVisible] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({});

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

  const handleShow = (product) => {
    setIsProductsShowVisible(true);
    setCurrentProduct(product);
  }

  return (
    <main>
      <ProductsIndex products={products} onShow={handleShow} />
      <Modal show={isProductsShowVisible} onClose={() => setIsProductsShowVisible(false)}>
        <ProductsShow product={currentProduct} />
      </Modal>
      <ProductsNew onCreate={handleCreate}/>
    </main>
  )
}