import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <div>
      <h1>Welcome to Our Online Store</h1>
      <p>This is the home page</p>
      <p>
        <Link to="/products">View all products</Link>
      </p>
    </div>
  )
}