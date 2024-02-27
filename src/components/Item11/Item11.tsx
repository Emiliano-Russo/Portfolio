import React, { useEffect, useState } from "react";
import { ProjectPresent } from "../ProjectPresent/ProjectPresent";
const logo = require("../../assets/till/logo.png");
const till_app_1 = require("../../assets/till/till1.jpg");
const till_app_2 = require("../../assets/till/till2.jpg");
const till_app_3 = require("../../assets/till/till3.jpg");

interface Item11Props {}

export const Item11 = React.forwardRef<HTMLDivElement, Item11Props>((props, ref) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    window.addEventListener("resize", handleResize);

    // Limpieza del evento
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <ProjectPresent
      background="linear-gradient(to bottom right, #27D0AB, #574FF0)"
      hoverColor="#574FF0"
      description="With Till’s fee-free app and debit card, kids can develop money habits that prepare them for the real world."
      image1={till_app_1}
      image2={till_app_2}
      image3={till_app_3}
      linkOpen={"https://tillfinancial.io/"}
      logo={logo}
      position={{
        gridColumnStart: 1,
        gridColumnEnd: isMobile ? 2 : 6,
        gridRowStart: isMobile ? 18 : 10,
        gridRowEnd: isMobile ? 20 : 12,
      }}
    />
  );
});
