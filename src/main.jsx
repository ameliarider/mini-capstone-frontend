import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import axios from "axios";

axios.defaults.withCredentials = true;
// eslint-disable-next-line no-undef
axios.defaults.baseURL = process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://mini-capstone-api-9g4w.onrender.com";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
