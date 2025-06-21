import { useState } from "react";
import { SignupPage } from "./SignupPage";
import { LoginPage } from "./LoginPage";
import { LogoutLink } from "./LogoutLink";

export function Header() {
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  // // Convert “is there an 'email' key in localStorage?” into a true/false value for the initial logged-in state.
  const [isLoggedIn] = useState(!!localStorage.getItem("email"));

  const handleSignupClick = () => {
    setShowSignup(!showSignup);
    setShowLogin(false);
  };

  const handleLoginClick = () => {
    setShowLogin(!showLogin);
    setShowSignup(false);
  };

  return (
    <header>
      <nav>
        <div>
          <h1>Storefront</h1><br /><br />
          <div>
            {isLoggedIn ? (
              <LogoutLink />
            ) : (
              <>
                <button onClick={handleSignupClick}>
                  {showSignup ? "Hide Signup" : "Sign Up"}
                </button>
                <button onClick={handleLoginClick}>
                  {showLogin ? "Hide Login" : "Login"}
                </button>
              </>
            )}
          </div>
        </div>
      </nav>
      {showSignup && (
        <div>
          <SignupPage />
        </div>
      )}
      {showLogin && (
        <div>
          <LoginPage />
        </div>
      )}
    </header>
  );
}