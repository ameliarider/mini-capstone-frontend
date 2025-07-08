import { CartedProductsPage } from "./CartedProductsPage";
import { LogoutLink } from "./LogoutLink";
import { Link } from "react-router-dom";

export function Header({ isLoggedIn, setIsLoggedIn }) {

return (
    <header className="p-3 mb-2 bg-primary-subtle text-primary-emphasis">
      <nav className="nav">
        <ul className="nav">
          <div className="nav">
            <li><Link className="nav-link active" to="/">Homepage</Link></li>
            <li><Link className="nav-link active" to="/products">Products</Link></li>
            <div className="nav">
              {isLoggedIn ? (
                <>
                  <li><Link className="nav-link active" to="/cart">Cart</Link></li> <li><LogoutLink  setIsLoggedIn={setIsLoggedIn} /></li>
                </>
              ) : (
                <>
                  <li><Link className="nav-link active" to="/signup">Sign Up</Link></li>
                  <li><Link className="nav-link active" to="/login">Login</Link></li>
                </>
              )}
            </div>
          </div>
        </ul>
      </nav>
    </header>
  );
}