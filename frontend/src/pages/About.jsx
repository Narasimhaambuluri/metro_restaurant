import React, { useEffect } from "react";
import { Parallax } from "react-parallax";
import aboutBack from "../images/about.webp";
import Navbar from "./../components/Navbar";
import Footer from "./../components/Footer";

function About() {
  return (
    <div className="about-wrapper">
      <Parallax
        bgImage={aboutBack}
        bgImageStyle={{
          width: "100%",
          height: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        strength={300}
        blur={{ min: -15, max: 15 }}
      >
        <Navbar />

        <div className="about">
          <h1>About Us</h1>
          <div className="about-main">
            <p>
              Welcome to <b>Metro Bites</b>, where culinary excellence meets
              warm hospitality. Established in 2004, our flagship restaurant
              opened its doors in the heart of Jubilee Hills, Hyderabad, setting
              the standard for fine dining in the region. With a passion for
              creating memorable dining experiences, we have grown into a
              beloved destination for food enthusiasts and families alike.
            </p>
            <h3>Our Mission </h3>
            <p>
              At <b>Metro Bites</b>, we believe that great food brings people
              together. Our mission is to provide our guests with an exceptional
              dining experience that celebrates the richness of diverse
              cuisines. We are committed to using only the freshest ingredients,
              sourced locally whenever possible, to create dishes that not only
              tantalize the taste buds but also nourish the soul.
            </p>
            <h3>Our Story</h3>
            <p>
              <b>Metro Bites</b> was born out of a love for food and a desire to
              create a space where people could connect over delicious meals.
              Our founder, Lakshmi Narasimha Reddy, envisioned a restaurant that
              not only serves food but also tells a story—each dish crafted with
              care, reflecting our culinary heritage and contemporary
              influences.
            </p>
            <h3>Join Us</h3>
            <p>
              Whether you're looking to enjoy a casual meal with friends,
              celebrate a special occasion, or simply explore new flavors,
              <b>Metro Bites</b> is the perfect destination. We invite you to
              visit us and experience the warmth of our hospitality and the
              artistry of our culinary creations.
            </p>
          </div>
        </div>
        <Footer />
      </Parallax>
    </div>
  );
}

export default About;
