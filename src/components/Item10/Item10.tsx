import React, { useEffect, useState } from "react";
import { ProjectPresent } from "../ProjectPresent/ProjectPresent";
const logo = require("../../assets/casmu/casmuLogo.png");
const casmu_app_1 = require("../../assets/casmu/casmu.jpg");
const casmu_app_2 = require("../../assets/casmu/casmu2.png");
const casmu_app_3 = require("../../assets/casmu/casmu3.jpg");

interface Item10Props {}

export const Item10 = React.forwardRef<HTMLDivElement, Item10Props>((props, ref) => {
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
      idProject="casmu"
      background="linear-gradient(to bottom right, #ffffff, #ff0000)"
      hoverColor="#ff0000"
      description="The app enables appointment scheduling, medical history access, video consultations, medication delivery, and more."
      image1={casmu_app_1}
      image2={casmu_app_2}
      image3={casmu_app_3}
      linkOpen={"https://casmu.com.uy/app-de-casmu/"}
      logo={logo}
      position={{
        gridColumnStart: 1,
        gridColumnEnd: isMobile ? 2 : 6,
        gridRowStart: isMobile ? 16 : 8,
        gridRowEnd: isMobile ? 18 : 10,
      }}
    />
  );
});
