import React from "react";
import { useSwiper } from "swiper/react";
import "./Residence.css";

export const SliderButton = () => {
  const swiper = useSwiper();
  return (
    <div className="r-button">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};
