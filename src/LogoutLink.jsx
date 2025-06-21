import axios from 'axios';

export function LogoutLink() {
  const handleClick = (event) => {
    event.preventDefault();
    axios.delete("http://localhost:3000/logout").then((response) => {
      console.log(response);
      localStorage.removeItem("email");
      window.location.reload();
    });
  };
  
  return (
    <button onClick={handleClick}>
      Logout
    </button>
  )
}