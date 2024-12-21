import React, { useEffect, useState } from "react";
import { Parallax } from "react-parallax";
import Loc from "../images/location.jpg";
import Navbar from "./../components/Navbar";
import axios from "axios";
import Footer from "./../components/Footer";

function Branches() {
  const [locationData, setLocationData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:5000/location");
      setLocationData(result.data);
    };
    fetchData();
  }, []);
  return (
    <div className="branches-wrapper">
      <Parallax
        bgImage={Loc}
        bgImageStyle={{
          width: "100%",
          height: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        strength={300}
        blur={{ min: -15, max: 15 }}
      >
        <div className="branches">
          <Navbar />
          <h1>Our Branches</h1>
          <div className="branches-main">
            {locationData.length > 0 ? (
              locationData.map((location) => {
                return (
                  <div className="branch" key={location.id}>
                    <h3>
                      <span className="indicator">Location: </span>
                      {location.location_name}
                    </h3>
                    <p>
                      <span className="indicator">Address: </span>
                      {location.address}
                    </p>
                    <p>
                      <span className="indicator">Land Mark: </span>
                      {location.landmark}
                    </p>
                    <p>
                      <i>"{location.description}"</i>
                    </p>
                  </div>
                );
              })
            ) : (
              <h1>No Branches Found</h1>
            )}
          </div>
        </div>
        <Footer />
      </Parallax>
    </div>
  );
}

export default Branches;
