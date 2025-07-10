import { CartedProductsIndex } from "./CartedProductsIndex"
import { Orders } from "./Orders"
import axios from 'axios';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

axios.defaults.withCredentials = true;


export function CartedProductsPage() {
    const [cartedProducts, setCartedProducts] = useState([]);
    const navigate = useNavigate();

    const handleIndex = (cartedProducts) => {
    axios
    .get("/cart.json")
    .then((response) => {
      console.log(response.data);
      setCartedProducts(response.data);
      console.log(cartedProducts);
    })
    .catch((error) => {
      console.log(error.response.data.errors);
      // setErrors(error.response.data.errors);
    });
  };

  useEffect(handleIndex, []);

  // const handleUpdate = (product, params, successCallback) => {
  //   axios.patch(`/cart/${product.id}.json`, params).then((response) => {
  //     setCartedProducts(cartedProducts.map(p => p.id === response.data.id ? response.data :p))
  //     successCallback();
  //   })
  // }

  const handleCreateOrder = (product) => {
    const params = {
      user_id: product.user_id
    }
    console.log("handleCreateOrder");
    axios.post("/orders.json", params).then(() => {
      navigate("/orderconfirmation");
    })
  }

  const handleDestroy = (product) => {
    axios.patch(`/cart/${product.id}.json`).then((response) => {
      setCartedProducts([...cartedProducts, response.data]);
      handleIndex();
    })
    .catch((error) => {
      console.log(error.response.data.errors);
    });
  }

  return (
    <div>
      <CartedProductsIndex cartedProducts={cartedProducts} onDestroy={handleDestroy} />
      <div>
            {cartedProducts.length > 0 ? (
              <>
                <button onClick={handleCreateOrder}>Checkout</button>
              </>
            ) : null}
      </div>
    </div>
  )
}