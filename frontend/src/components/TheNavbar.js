import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const TheNavbar = () => {
  const [searchField, setSearchField] = useState("");
  const navigate = useNavigate();

  console.log("navbar render");

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  // TODO: Learn about outlet component
  // TODO: Create a notfound page using usenavigate
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchField}`);
  };

  return (
    <nav>
      <Link to="/">
        <h1>KINOPICKS</h1>
      </Link>
      <Link to="/user">
        <p>User</p>
      </Link>
      <form onSubmit={handleSubmit}>
        <input type="text" value={searchField} onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
    </nav>
  );
};

export default TheNavbar;
