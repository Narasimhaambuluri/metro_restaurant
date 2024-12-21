import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa6";
import { FaSnapchat } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-main">
        <div className="footer-items">
          <Link to="/" className="footer-item">
            Home
          </Link>
          {/* <Link to="/branches" className="footer-item">
            Branches
          </Link> */}
          <Link to="/about" className="footer-item">
            About
          </Link>
          <Link to="/contact" className="footer-item">
            FeedBack
          </Link>
        </div>
        <div className="footer-icons">
          <FaInstagram />
          <BsTwitterX />
          <FaFacebook />
          <FaWhatsapp />
          <FaSnapchat />
          <FaYoutube />
        </div>
      </div>
      <div style={{ height: "2px", backgroundColor: "gray" }}></div>
      <div style={{ color: "gray", fontSize: "12px" }}>
        © Copyright Metro Bites 2024.
      </div>
    </div>
  );
}

export default Footer;
