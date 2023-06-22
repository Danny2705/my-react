import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="f-container innerWidth">
        <div className="f-left">
          <img src="https://real-estate-web.pages.dev/logo2.png" alt="Logo" />
          <p>
            Our vision is to make all people <br />
            the best place to live for them.
          </p>
        </div>

        <div className="f-right">
          <div className="f-info">
            <h2>Information</h2>
            <span>145 New York, FL 5467, USA</span>
          </div>

          <div className="f-link">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
