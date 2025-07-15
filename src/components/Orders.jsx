import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export function Orders() {
  const [orders, setOrders] = useState([]);
  const [searchFilter, setSearchFilter] = useState("");
  const [sort, setSort] = useState("");

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
      Search filter: <input type="integer" value={searchFilter} onChange={(event) => setSearchFilter(event.target.value)} list="ids" />
      <datalist id="ids">
        {orders.map((order) => (
          <option key={order.id} value={order.id}></option>
        ))}
      </datalist><br />
      Sort by: <select value={sort} onChange={(event) => setSort(event.target.value)}>
        <option value="">None</option>
        <option value="0-100">Total: High to Low</option>
        <option value="100-0">Total: Low to High</option>
      </select>
      {orders
        .filter((order) => order.id.toString().includes(searchFilter))
        .sort((a, b) => {
          if (sort === "100-0") {
            return a.total.localeCompare(b.total);
          } else if (sort === "0-100") {
            return b.total.localeCompare(a.total);
          }
          return 0;
        })
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

