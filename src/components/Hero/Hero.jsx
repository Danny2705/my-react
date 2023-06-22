import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="hero-container padding">
        <div className="hero-left">
          <div className="orange-circle"></div>
          <div className="hero-title">
            <h1>
              Discover <br /> Most Suitable <br /> Property
            </h1>
          </div>

          <div className="hero-des">
            <p>Find a variety of properties that suit you very easilty</p>
            <p>Forget all difficulties in finding a residence for you</p>
          </div>

          <div className="search-bar">
            <HiLocationMarker color="var(--blue-color)" size={25} />
            <input type="text" />
            <button className="btn">Search</button>
          </div>

          <div className="hero-stat">
            <div className="stat">
              <span>
                <CountUp start={8800} end={9000} duration={4}/>
                <span>+</span>
              </span>
              <span>Premium Product</span>
            </div>

            <div className="stat">
              <span>
                <CountUp start={1800} end={2000} duration={4}/>
                <span>+</span>
              </span>
              <span>Happy Customer</span>
            </div>

            <div className="stat">
              <span>
                <CountUp start={28}/>
                <span>+</span>
              </span>
              <span>Awards Winning</span>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="image-container">
            <img
              src="https://real-estate-web.pages.dev/hero-image.png"
              alt="House"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
