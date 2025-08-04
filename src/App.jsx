import axios from 'axios'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";  // ← Bootstrap
import "./index.css";

import { Header } from './components/Header'
import { HomePage } from './components/HomePage';
import { SignupPage } from "./components/SignupPage";
import { LoginPage } from "./components/LoginPage";
import { ProductsPage } from './components/ProductsPage'
import { ProductsNew } from "./components/ProductsNew";
import { Footer } from './components/Footer'
import { CartedProductsPage } from "./components/CartedProductsPage"
import { Orders } from './components/Orders';
import { OrderConfirmation } from './components/OrderConfirmation';

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;

function Layout() {
  const [ isLoggedIn, setIsLoggedIn ] = useState(!!localStorage.getItem("email"));
  const [isAdmin, setIsAdmin] = useState(() => {
  const stored = localStorage.getItem("isAdmin");
  return stored === "true"; // Convert string to boolean
});

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem("email"));
  }, []);

  return (
    <div>
<Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} isAdmin={isAdmin} />
<Outlet context={{ 
        isLoggedIn,
        setIsLoggedIn,
        isAdmin,
        setIsAdmin
      }} />
<Footer />
    </div>
  )
}


const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/products",
        element: <ProductsPage />,
      },
      {
        path: "/signup",
        element: <SignupPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/cart",
        element: <CartedProductsPage />
      },
      {
        path: "/orders",
        element: <Orders />
      },
      {
        path: "/orderconfirmation",
        element: <OrderConfirmation />
      },
      {
        path: "/newproduct",
        element: <ProductsNew />
      }
    ],
  },
]);

function App() {
return <RouterProvider router={router} />;
}
export default App;
