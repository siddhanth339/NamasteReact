import { useState } from "react";
import Logo_URL from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={Logo_URL} alt="Logo here"></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Online: {onlineStatus ? "🟢" : "🔴"}</li>
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
            <Link to="/login">
              <button
                className="loginBtn"
                onClick={() =>
                  btnName === "Login"
                    ? setBtnName("Logout")
                    : setBtnName("Login")
                }
              >
                {btnName}
              </button>
            </Link>
          </li>
          <Link to="/grocery">
            <li>Grocery</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
