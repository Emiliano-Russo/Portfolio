import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./FloatingIcons.scss";
import { icons } from "../../icon-list";

export const FloatingIcons = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 8, // Ajusta según el número de íconos que quieras mostrar a la vez
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h2>My Stack</h2>
      <Slider {...settings} className="icon-container">
        {icons.map((link) => {
          return (
            <div>
              <img style={{ width: "50px", height: "50px" }} src={link} />
            </div>
          );
        })}
        {icons.map((link) => {
          return (
            <div>
              <img style={{ width: "50px", height: "50px" }} src={link} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
