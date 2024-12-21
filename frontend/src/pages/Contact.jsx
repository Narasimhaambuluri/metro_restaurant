import React, { useEffect } from "react";
import { Parallax } from "react-parallax";
import contactBack from "../images/contactback.webp";
import Navbar from "./../components/Navbar";
import Footer from "./../components/Footer";

function Contact() {
  return (
    <div className="contact-wrapper">
      <Parallax
        bgImage={contactBack}
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
        <div className="contact">
          <h1>Feedback</h1>
          <div className="contact-main">
            <p>
              Dined with us recently?Got something you'd like to say about your
              experience at Metro Bites? Whether it's something you enjoyed, or
              something you think we could improve, let us know here.
            </p>
            <div className="contact-form">
              <div className="form-element">
                <label htmlFor="fname">First Name</label>
                <input type="text" id="fname" placeholder="First Name" />
              </div>
              <div className="form-element">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" placeholder="Email Address" />
              </div>
              <div className="form-element">
                <label htmlFor="t-number">Telephone Number</label>
                <input
                  type="text"
                  id="t-number"
                  placeholder="Telephone Number"
                />
              </div>
              <div className="form-element">
                <label htmlFor="location">Branch</label>
                <input type="text" id="location" placeholder="Branch" />
              </div>
              <div className="form-element">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  placeholder="Your Message"
                  style={{ width: "300px", height: "100px" }}
                ></textarea>
              </div>
            </div>
            <button>Send</button>
          </div>
        </div>
        <Footer />
      </Parallax>
    </div>
  );
}

export default Contact;
