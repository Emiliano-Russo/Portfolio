import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./FloatingIcons.scss";

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
        <div>
          <img
            style={{ width: "50px", height: "50px" }}
            src="https://img.icons8.com/color/96/javascript--v1.png"
            alt="javascript"
          />
        </div>
        <div>
          <img
            style={{ width: "50px", height: "50px" }}
            src="https://img.icons8.com/color/96/typescript.png"
            alt="typescript"
          />
        </div>
        <div>
          <img
            style={{ width: "50px", height: "50px" }}
            src="https://img.icons8.com/color/96/react-native.png"
            alt="react-native"
          />
        </div>
        <div>
          <img
            style={{ width: "50px", height: "50px" }}
            src="https://img.icons8.com/color/96/nestjs.png"
            alt="nestjs"
          />
        </div>
        <div>
          <img
            style={{ width: "50px", height: "50px" }}
            src="https://img.icons8.com/color/96/amazon-web-services.png"
            alt="amazon-web-services"
          />
        </div>
        <div>
          <img
            style={{ width: "50px", height: "50px" }}
            src="https://img.icons8.com/color/96/docker.png"
            alt="docker"
          />
        </div>
        <div>
          <img
            style={{ width: "50px", height: "50px" }}
            src="https://img.icons8.com/color/96/google-cloud.png"
            alt="google-cloud"
          />
        </div>
        <div>
          <img
            style={{ width: "50px", height: "50px" }}
            src="https://img.icons8.com/color/96/java-coffee-cup-logo.png"
            alt="java-coffee-cup-logo"
          />
        </div>
        <div>
          <img
            style={{ width: "50px", height: "50px" }}
            src="https://img.icons8.com/color/96/firebase.png"
            alt="firebase"
          />
        </div>
        {/* Repite los íconos si es necesario para mantener el flujo continuo */}
        <div>
          <img
            style={{ width: "50px", height: "50px" }}
            src="https://img.icons8.com/color/96/javascript--v1.png"
            alt="javascript"
          />
        </div>
        <div>
          <img
            style={{ width: "50px", height: "50px" }}
            src="https://img.icons8.com/color/96/typescript.png"
            alt="typescript"
          />
        </div>
        <div>
          <img
            style={{ width: "50px", height: "50px" }}
            src="https://img.icons8.com/color/96/react-native.png"
            alt="react-native"
          />
        </div>
        <div>
          <img
            style={{ width: "50px", height: "50px" }}
            src="https://img.icons8.com/color/96/nestjs.png"
            alt="nestjs"
          />
        </div>
        <div>
          <img
            style={{ width: "50px", height: "50px" }}
            src="https://img.icons8.com/color/96/amazon-web-services.png"
            alt="amazon-web-services"
          />
        </div>
        <div>
          <img
            style={{ width: "50px", height: "50px" }}
            src="https://img.icons8.com/color/96/docker.png"
            alt="docker"
          />
        </div>
        <div>
          <img
            style={{ width: "50px", height: "50px" }}
            src="https://img.icons8.com/color/96/google-cloud.png"
            alt="google-cloud"
          />
        </div>
        <div>
          <img
            style={{ width: "50px", height: "50px" }}
            src="https://img.icons8.com/color/96/java-coffee-cup-logo.png"
            alt="java-coffee-cup-logo"
          />
        </div>
        <div>
          <img
            style={{ width: "50px", height: "50px" }}
            src="https://img.icons8.com/color/96/firebase.png"
            alt="firebase"
          />
        </div>
        {/* ... y así sucesivamente ... */}
      </Slider>
    </div>
  );
};
