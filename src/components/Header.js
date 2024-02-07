import { useState } from "react";
import Logo_URL from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={Logo_URL} alt="Logo here"></img>
      </div>
      <div className="nav-items">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About Us</li>
          </Link>
          <Link to="/contact">
            <li>Contact Us</li>
          </Link>
          <li>Cart</li>
          <li>
            <button
              className="loginBtn"
              onClick={() =>
                btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
              }
            >
              {btnName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
