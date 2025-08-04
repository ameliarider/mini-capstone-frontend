import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <div className="container mt-5">
      <div className="text-center p-5 bg-light rounded shadow">
        <h1 className="mb-4">Welcome to Amelia's Online Store</h1>
        <p className="lead mb-3">Amelia partners with unique and artisan makers from across the country to curate a collection of thoughtfully crafted goods. Her store celebrates creativity, craftsmanship, and community—each product is handpicked to support small businesses and share the stories behind the work.</p>
        <Link to="/products" className="btn btn-primary">
          View All Products
        </Link>
      </div>
    </div>
  );
}
