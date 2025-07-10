import { useNavigate } from "react-router-dom";
import { CartedProductsPage } from "./CartedProductsPage"

export function OrderConfirmation() {
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate("/orders");
  }

  return (
    <div>
      <p>Order received!</p>
      <button onClick={handleReturn}>See all orders</button>
    </div>
  )
}