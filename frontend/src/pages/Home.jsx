import React, { useEffect } from "react";
import { Parallax } from "react-parallax";
import { Link } from "react-router-dom";
import "./pages.css";

import Background1 from "../images/background1.webp";
import Background2 from "../images/background2.jpg";
import Background3 from "../images/background3.jpg";
import Navbar from "../components/Navbar";
import Footer from "./../components/Footer";

function Home() {
  return (
    <div>
      <Parallax
        bgImage={Background1}
        strength={300}
        blur={{ min: -15, max: 15 }}
        bgImageStyle={{
          width: "100%",
          height: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="section-1" id="section-1">
          <Navbar />
          {/* <div className="title">Taste the City.</div> */}
        </div>
      </Parallax>
      <Parallax
        bgImage={Background2}
        blur={{ min: -15, max: 15 }}
        strength={300}
        bgImageStyle={{
          width: "100%",
          height: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="section-2">
          <div className="menu-desc">
            <h1>Our Menu</h1>
            <p>
              At <b> Metro Bites </b>, our menu offers a delightful fusion of
              flavors that celebrate the essence of urban dining. From enticing
              starters and flavorful main courses featuring fresh, locally
              sourced ingredients to decadent desserts, every dish is crafted to
              create an unforgettable dining experience. Pair your meal with our
              carefully selected wines and signature cocktails for the perfect
              complement to your culinary journey. Join us and savor the tastes
              that make our restaurant a must-visit in the city!
            </p>
            <button className="btn">
              <Link
                to="/menu"
                style={{ textDecoration: "none", color: "white" }}
              >
                Click&Explore
              </Link>
            </button>
          </div>
        </div>
      </Parallax>
      <Parallax
        bgImage={Background3}
        blur={{ min: -15, max: 15 }}
        strength={300}
        bgImageStyle={{
          width: "100%",
          height: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="section-3">
          <div className="ambience-desc">
            <h1>Our Ambience</h1>
            <p>
              Step into our restaurant and immerse yourself in an inviting
              atmosphere that blends modern elegance with warm, rustic charm.
              Soft lighting casts a gentle glow, creating a cozy setting perfect
              for intimate dinners or lively gatherings. Our thoughtfully
              curated decor features natural elements and stylish furnishings,
              enhancing the overall dining experience. Whether you're enjoying a
              meal with friends or celebrating a special occasion, our ambiance
              is designed to make every moment memorable.
            </p>
          </div>
        </div>
        <Footer />
      </Parallax>
    </div>
  );
}

export default Home;
