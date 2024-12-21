import React, { useState, useEffect } from "react";
import { Parallax } from "react-parallax";
import Navbar from "./../components/Navbar";
import menuBack from "../images/menu.webp";
import Footer from "./../components/Footer";
import axios from "axios";
import "./pages.css";

function Menu() {
  const [menuItems, setMenuItems] = useState({});

  useEffect(() => {
    const fetchAllItems = async () => {
      const result = await axios.get("http://localhost:5000/menu/items");
      setMenuItems(result.data);
    };
    fetchAllItems();
  }, []);
  const fetchItems = async (e) => {
    const cat = e.target.value;
    const fetchedItems = await axios.get(
      `http://localhost:5000/menu/items?categories=${cat}`
    );
    setMenuItems(fetchedItems.data);
  };
  return (
    <div className="menu-wrapper">
      <Parallax
        bgImage={menuBack}
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
        <div className="menu">
          {/* <h1>Our Menu</h1> */}
          <div className="menu-btns">
            <button value="starters" onClick={fetchItems}>
              Starters
            </button>
            <button value="biryani" onClick={fetchItems}>
              Biryani
            </button>
            <button value="curry" onClick={fetchItems}>
              Curry
            </button>
            <button value="salads" onClick={fetchItems}>
              Salads
            </button>
            <button value="drinks" onClick={fetchItems}>
              Drinks
            </button>
            <button value="desserts" onClick={fetchItems}>
              Desserts
            </button>
          </div>
          <div className="menu-main">
            {menuItems.length > 0 ? (
              menuItems.map((item) => {
                return (
                  <div className="item" key={item.name}>
                    <div className="item-name">{item.name}</div>
                    <div className="item-desc">{item.description}</div>
                    <div className="item-type">{item.type}</div>
                    <div className="item-price">RS.{item.price}</div>
                    <div className="item-line"></div>
                  </div>
                );
              })
            ) : (
              <div>No Items in the menu</div>
            )}
          </div>
          <Footer />
        </div>
      </Parallax>
    </div>
  );
}

export default Menu;
