import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export function ProductsNew () {
  const [errors, setErrors] = useState([]);
  const [suppliers, setSuppliers] = useState([]);
  const navigate = useNavigate();
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const params = new FormData(form);

    axios.post("/products.json", params)
      .then((response) => {
        console.log("Product created:", response.data);
        form.reset();
        navigate("/products");
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  const getSuppliers = () => {
    axios
    .get("/suppliers.json")
    .then((response) => {
      console.log("suppliers fetched", response.data);
      setSuppliers(response.data);
    })
    .catch((error) => {
      console.log(error.response.data.errors);
      // setErrors(error.response.data.errors);
    });
  }

  useEffect(getSuppliers, []);


  return (
    <div>
      <h1>New Product</h1>
      {errors.length > 0 && (
        <ul>
          {errors.map((e, i) => (
            <li key={i} style={{ color: "red" }}>{e}</li>
          ))}
        </ul>
      )}
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          Description: <input name="description" type="text" />
        </div>
        <div>
          Price: <input name="price" type="integer" placeholder="100" />
        </div>
        <div>
          Supplier:
          <select name="supplier_id" required>
            <option value="">-- Select a supplier --</option>
            {suppliers.map((supplier) => (
              <option key={supplier.id} value={supplier.id}>
                {supplier.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          Image: <input type="file" name="image" accept="image/*" multiple />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  )
}