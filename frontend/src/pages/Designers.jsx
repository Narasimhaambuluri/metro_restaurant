import React from "react";
import { Parallax } from "react-parallax";
import Pimage from "../images/background1.webp";
import Navbar from "./../components/Navbar";
import "./pages.css";
import Footer from "./../components/Footer";

import narasimha from "../images/passport photo.jpeg";
import aravind from "../images/aravind.jpeg";
import kaveri from "../images/kaveri.jpg";
import meghana from "../images/meghana.jpg";
import manisha from "../images/manisha.jpg";
import swetha from "../images/swetha.jpg";
import bhavana from "../images/bhavana.jpg";
import mahesh from "../images/mahesh.jpeg";

function Designers() {
  return (
    <div className="developers">
      <Parallax
        bgImage={Pimage}
        bgImageStyle={{
          width: "100%",
          height: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        strength={300}
        blur={{ min: -15, max: 15 }}
      >
        <div className="developers-wrapper">
          <Navbar />
          <h1 style={{ color: "yellow", textAlign: "center" }}>
            Developed & Designed By
          </h1>
          <div className="developers-main">
            <div className="dev-pic">
              <div className="pic-name">Roll No: 21191A0502</div>
              <img src={narasimha} alt="" />
            </div>
            <div className="dev-pic">
              <div className="pic-name">Roll No: 21191A0512</div>

              <img src={aravind} alt="" />
            </div>
            <div className="dev-pic">
              <div className="pic-name">Roll No: 21191A0522</div>

              <img src={kaveri} alt="" />
            </div>
            <div className="dev-pic">
              <div className="pic-name">Roll No: 21191A0532</div>

              <img src={meghana} alt="" />
            </div>
            <div className="dev-pic">
              <div className="pic-name">Roll No: 21191A0542</div>

              <img src={manisha} alt="" />
            </div>
            <div className="dev-pic">
              <div className="pic-name">Roll No: 21191A0552</div>

              <img src={swetha} alt="" />
            </div>
            <div className="dev-pic">
              <div className="pic-name">Roll No: 21191A0562</div>

              <img src={bhavana} alt="" />
            </div>
            <div className="dev-pic">
              <div className="pic-name">Roll No: 21195A0502</div>

              <img src={mahesh} alt="" />
            </div>
          </div>
        </div>
        <Footer />
      </Parallax>
    </div>
  );
}

export default Designers;
