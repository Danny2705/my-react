import React from "react";
import "./Residence.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { SliderButton } from "./SliderButton";
import { SliderSetting } from "./SliderSetting";
import data from "../../data/data.json";

const Residence = () => {
  return (
    <section className="r-wrapper">
      <div className="r-container innerWidth">
        <div className="r-header">
          <h2 className="orange-text">Best Choices</h2>
          <span>Popular Residencies</span>
        </div>

        <div className="r-swiper">
          <Swiper {...SliderSetting}>
            <SliderButton />
            {data.map((info, i) => {
              return (
                <SwiperSlide key={i}>
                  <div className="r-info">
                    <img src={info.image_url} alt="image" />
                    <span className="r-price">
                      <span>$</span>
                      <span>{info.price}</span>
                    </span>
                    <span className="r-name">{info.name}</span>
                    <span className="r-detail">{info.detail}</span>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Residence;
