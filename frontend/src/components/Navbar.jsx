import React, { useState } from "react";
import "./components.css";
import Logo from "../images/logo.png";
import { Link } from "react-router-dom";
import { MdRestaurantMenu } from "react-icons/md";

function Navbar() {
  const [toggleNav, setToggleNav] = useState(false);

  const showNav = () => {
    setToggleNav((prev) => {
      const newToggle = !prev;
      document.getElementsByClassName("nav")[0].style.display = newToggle
        ? "block"
        : "none";
      return newToggle;
    });
  };

  const token = localStorage.getItem("session_key");
  return (
    <div className="navbar">
      <div className="logo">
        <img src={Logo} alt="" />
        <div className="brand">Metro Bites</div>
      </div>
      <div className="ham-menu" onClick={showNav}>
        <MdRestaurantMenu />
      </div>

      <div className="nav">
        <Link to="/" className="nav-item">
          Home
        </Link>
        <Link to="/menu" className="nav-item">
          Menu
        </Link>
        <Link to="/bookings" className="nav-item">
          Bookings
        </Link>
        <Link to="/order" className="nav-item">
          Order
        </Link>
        {/* <Link to="/branches" className="nav-item">
          Branches
        </Link> */}
        <Link to="/about" className="nav-item">
          About
        </Link>
        <Link to="/contact" className="nav-item">
          FeedBack
        </Link>
        {token ? (
          <Link to="/profile" className="nav-item">
            Profile
          </Link>
        ) : (
          <Link to="/login" className="nav-item">
            Login
          </Link>
        )}
        <Link to="/developers" className="nav-item">
          Developers
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
