import React, { useState } from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";
import accordion from "../../data/accordion";
import "./Value.css";

const Value = () => {
  const [accOpen, setAccOpen] = useState(null);

  const openAccordion = (index) => {
    setAccOpen((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="v-wrapper">
      <div className="v-container innerWidth">
        <div className="v-left">
          <div className="image-container">
            <img
              src="https://real-estate-web.pages.dev/value.png"
              alt="Value"
            />
          </div>
        </div>

        <div className="v-right innerWidth">
          <div className="orange-text">Our Value</div>
          <span>Value we give to you</span>
          <p>
            We are always ready to help by providing the best services for you.
            <br />
            We believe a good place to live can make your life better.
          </p>

          <div className="accord innerWidth">
            {accordion.map((prop, i) => (
              <div className="accord-wrapper innerWidth" key={i}>
                <div className="accord-container innerWidth">
                  <div className="header">
                    <div className="acc-icon">{prop.icon}</div>

                    <div className="acc-title">{prop.title}</div>

                    <div
                      className="acc-arrow"
                      onClick={() => openAccordion(i)}
                    >
                      <MdOutlineArrowDropDown />
                    </div>
                  </div>

                  {accOpen === i && (
                    <div className="acc-des">{prop.description}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Value;
