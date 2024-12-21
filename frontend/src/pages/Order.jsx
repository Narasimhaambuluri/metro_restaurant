import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Parallax } from "react-parallax";
import orderBack from "../images/order-back.webp";
import Navbar from "./../components/Navbar";
import "./pages.css";
import { toast, Bounce } from "react-toastify";
import Footer from "./../components/Footer";
import axios from "axios";

function Order() {
  const navigate = useNavigate();
  const [item, setItem] = useState("");
  const [quantity, setQuantity] = useState("");
  const [allItems, setAllItems] = useState("");
  const [address, setAddress] = useState("");
  useEffect(() => {
    const token = localStorage.getItem("session_key");
    if (!token) {
      navigate("/login");
    }
  });

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios.get("http://localhost:5000/order");
      setAllItems(result.data);
    };
    fetchItems();
  }, []);

  const orderFood = async (e) => {
    e.preventDefault();
    if (!quantity || !item || !address) {
      toast.warn(" Please select all fields", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      return;
    }
    if (parseInt(quantity, 10) > 5) {
      toast.warn("You can order upto 5 items only", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      return;
    }
    const token = localStorage.getItem("session_key");
    const result = await axios.post("http://localhost:5000/order/place", {
      token,
      item_name: item,
      quantity,
      address,
    });
    if (result.status === 200) {
      toast.success("Order Success", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      window.location.reload();
    }
  };

  return (
    <div>
      <Parallax
        bgImage={orderBack}
        strength={300}
        blur={{ min: -15, max: 15 }}
        bgImageStyle={{
          width: "100%",
          height: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="order-wrapper">
          <Navbar />
          <div className="order">
            <h1
              style={{
                color: "#fff100",
                letterSpacing: "1.5px",
                marginRight: "400px",
              }}
            >
              Order Your Favourite Food
            </h1>
            <div className="order-main">
              <div className="item-inputs">
                <div className="item-input">
                  <input
                    type="text"
                    list="itemlist"
                    placeholder="Choose Item"
                    onChange={(e) => {
                      setItem(e.target.value);
                    }}
                  />
                  <datalist id="itemlist">
                    {allItems ? (
                      allItems.map((item) => {
                        return (
                          <option value={item.name} key={item._id}>
                            {item.name}
                          </option>
                        );
                      })
                    ) : (
                      <option>No items</option>
                    )}
                  </datalist>
                </div>
                <div className="item-input">
                  <input
                    type="number"
                    placeholder="Quantity"
                    style={{ width: "150px" }}
                    onChange={(e) => {
                      setQuantity(e.target.value);
                    }}
                  />
                </div>
                <div className="item-input">
                  <input
                    type="text"
                    placeholder="Address"
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
              </div>
              <div className="order-btn">
                <button onClick={orderFood}>Order</button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </Parallax>
    </div>
  );
}

export default Order;
