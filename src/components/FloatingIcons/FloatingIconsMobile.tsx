import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./FloatingIcons.scss";
import { icons } from "../../icon-list";

interface Props {
  iconsImgUrl: string[];
}

export const FloatingIconsMobile = (props: Props) => {
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

  const middleIndex = Math.ceil(props.iconsImgUrl.length / 2);

  const firstHalf = props.iconsImgUrl.slice(0, middleIndex);
  const secondHalf = props.iconsImgUrl.slice(middleIndex);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        height: "100%",
        paddingTop: "20px",
      }}
    >
      <h2>My Stack</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          marginTop: "30px",
          width: "80%",
          justifyContent: "center",
        }}
      >
        {icons.map((link) => {
          return (
            <div>
              <img style={{ width: "60px", height: "60px", margin: "15px" }} src={link} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
