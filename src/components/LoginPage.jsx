import axios from "axios";
import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

export function LoginPage() {
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();
  const { setIsLoggedIn } = useOutletContext();

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    console.log(params);
    axios
      .post("/login", params)
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("email", response.data.email);
        setIsLoggedIn(true);
        event.target.reset();
        navigate("/");
      })
      .catch((error) => {
        console.log(error.response);
        setErrors(["Invalid email or password"]);
      });
  };

  return (
    <div id="login">
      <h1>Login</h1>
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form className="form-floating mb-3" onSubmit={handleSubmit} >
        <div className="form-floating">
          Email: <input className="form-control" id="floatingInput" name="email" type="email" />
        </div>
        <div className="form-floating">
          Password: <input className="form-control" id="floatingPassword" name="password" type="password" />
        </div><br />
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  );
}
