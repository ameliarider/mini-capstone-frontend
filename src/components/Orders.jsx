import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export function Orders() {
  const [orders, setOrders] = useState([]);
  const [searchFilter, setSearchFilter] = useState("");

  const handleIndex = () => {
    console.log("handleIndex");
    axios.get("/orders.json").then((response) => {
      console.log("Orders:", response.data);
      setOrders(response.data);
    }).catch((error) => {
      console.error("Error fetching orders:", error);
    });
  };

  useEffect(handleIndex, []);

  return (
    <main>
      <h1>Your Orders</h1>
      <p>You have {orders.length} orders</p>
      Search filter: <input type="integer" value={searchFilter} onChange={(event) => setSearchFilter(event.target.value)} />
      {orders
        .filter((order) => order.id.toString().includes(searchFilter))
        .map((order) => (
          <div key={order.id}>
            <h3>Order #{order.id}</h3>
            <p>Subtotal: ${order.subtotal}</p>
            <p>Tax: ${order.tax}</p>
            <p>Total: ${order.total}</p>
            <h4>Products Ordered:</h4>
            {order.carted_products.map((product) => (
              <div key={product.id} className="m-50">
                <p><strong>{product.product.name}</strong></p>
                <p>Price: ${product.product.price}</p>
                <p>Quantity: {product.quantity}</p>
              </div>
            ))}
          </div>
        ))}
    </main>
  )
}

