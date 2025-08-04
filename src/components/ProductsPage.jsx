import { ProductsIndex } from './ProductsIndex'
import { useState, useEffect } from "react";
import { Modal } from './Modal';
import { ProductsShow } from './ProductsShow'
import { useOutletContext } from "react-router-dom";
import axios from 'axios';

axios.defaults.withCredentials = true;

export function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [isProductsShowVisible, setIsProductsShowVisible] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({});
  const [cart, setCart] = useState([]);
  const { isLoggedIn } = useOutletContext();
  const { isAdmin } = useOutletContext();
  // const [errors, setErrors] = useState([]);

  const handleIndex = () => {
    axios
    .get("/products.json")
    .then((response) => {
      console.log("Products fetched", response.data);
      setProducts(response.data);
    })
    .catch((error) => {
      console.log(error.response.data.errors);
      // setErrors(error.response.data.errors);
    });
  };

  useEffect(handleIndex, []);

  const handleCartedProduct = (product) => {
    const params = {
      product_id: product.id,
      user_id: product.user_id,
      quantity: 1,
      status: "carted",
      order_id: null,
    };

    axios.post("/cart.json", params).then((response) => {
      setCart([...cart, response.data]);
      alert("Product added to cart!");
    })
    .catch((error) => {
      console.log(error.response.data.errors);
    })
  }

  const handleShow = (product) => {
    setIsProductsShowVisible(true);
    setCurrentProduct(product);
  }

  const handleUpdate = (product, params, successCallback) => {
    axios.patch(`/products/${product.id}.json`, params).then((response) => {
      setProducts(products.map(p => p.id === response.data.id ? response.data :p))
      successCallback();
      setIsProductsShowVisible(false);
    })
  }

  const handleDestroy = (product) => {
    axios.delete(`/products/${product.id}.json`).then(() => {
      setProducts(products.filter((p) => p.id !== product.id));
      setIsProductsShowVisible(false);
    })
  }

  return (
    <main>
      <ProductsIndex products={products} onShow={handleShow} onCart={handleCartedProduct} isLoggedIn={isLoggedIn} />
      <Modal show={isProductsShowVisible} onClose={() => setIsProductsShowVisible(false)}>
        <ProductsShow product={currentProduct} onUpdate={handleUpdate} onDestroy={handleDestroy} isLoggedIn={isLoggedIn} isAdmin={isAdmin} />
      </Modal>
    </main>
  )
}