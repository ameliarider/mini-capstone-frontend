import axios from 'axios'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";  // ← Bootstrap
import "./index.css";

import { Header } from './Header'
import { HomePage } from './HomePage';
import { SignupPage } from "./SignupPage";
import { LoginPage } from "./LoginPage";
import { ProductsPage } from './ProductsPage'
import { Footer } from './Footer'
import { CartedProductsPage } from "./CartedProductsPage"
import { Orders } from './Orders';
import { OrderConfirmation } from './OrderConfirmation';

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;

function Layout() {
  const [ isLoggedIn, setIsLoggedIn ] = useState(!!localStorage.getItem("email"));

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem("email"));
  }, []);

  return (
    <div>
<Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
<Outlet context={{ 
        isLoggedIn,
        setIsLoggedIn
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
      }
    ],
  },
]);

function App() {
return <RouterProvider router={router} />;
}
export default App;
