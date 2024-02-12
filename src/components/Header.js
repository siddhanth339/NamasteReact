import { useState } from "react";
import Logo_URL from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg">
      <div className="logo-container">
        <img className="w-56" src={Logo_URL} alt="Logo here"></img>
      </div>
      <div className="nav-items">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online: {onlineStatus ? "🟢" : "🔴"}</li>
          <Link to="/">
            <li className="px-4">Home</li>
          </Link>
          <Link to="/about">
            <li className="px-4">About Us</li>
          </Link>
          <Link to="/contact">
            <li className="px-4">Contact Us</li>
          </Link>
          <li className="px-4">Cart</li>
          <li className="px-4">
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
            <li className="px-4">Grocery</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
