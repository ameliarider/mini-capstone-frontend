import { CartedProductsPage } from "./CartedProductsPage";
import { LogoutLink } from "./LogoutLink";
import { Link } from "react-router-dom";

export function Header({ isLoggedIn, setIsLoggedIn }) {

return (
    <header>
      <nav>
        <div>
          <Link to="/">Storefront</Link> | <Link to="/products">Products</Link>
          <div>
            {isLoggedIn ? (
              <>
                <LogoutLink setIsLoggedIn={setIsLoggedIn} /> | <Link to="/cart">Cart</Link>
              </>
            ) : (
              <>
                <Link to="/signup">Sign Up</Link> | <Link to="/login">Login</Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}