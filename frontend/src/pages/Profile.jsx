import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./../components/Navbar";
import { Parallax } from "react-parallax";
import Pimage from "../images/p-image.webp";
import Footer from "./../components/Footer";
import { Link } from "react-router-dom";
import axios from "axios";

function Profile() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  useEffect(() => {
    const token = localStorage.getItem("session_key");
    if (!token) {
      navigate("/login");
    }
  });
  useEffect(() => {
    const token = localStorage.getItem("session_key");
    if (!token) {
      navigate("/login");
    }
  });
  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("session_key");
      const result = await axios.post("http://localhost:5000/profile", {
        token,
      });
      setEmail(result.data.email);
    };
    fetchUser();
  }, []);
  const logOutUser = () => {
    localStorage.removeItem("session_key");
    navigate("/");
  };
  return (
    <div className="profile-wrapper">
      <Parallax
        bgImage={Pimage}
        strength={300}
        blur={{ min: -15, max: 15 }}
        bgImageStyle={{
          width: "100%",
          height: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Navbar />
        <div className="profile-main">
          <div className="profile">
            <div className="p-name">{email ? email : <p>NO USER</p>}</div>
            <Link to="/mybookings" className="p-btn">
              <div>My Bookings</div>
              <div>&gt;</div>
            </Link>
            <Link to="/myorders" className="p-btn">
              <div>My Orders</div>
              <div>&gt;</div>
            </Link>
            <div className="p-btn" onClick={logOutUser}>
              <div>Log Out</div>
              <div>&gt;</div>
            </div>
          </div>
        </div>
        <Footer />
      </Parallax>
    </div>
  );
}

export default Profile;
