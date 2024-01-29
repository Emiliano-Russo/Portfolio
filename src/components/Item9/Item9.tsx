import React, { useEffect, useState } from "react";
import { ProjectPresent } from "../ProjectPresent/ProjectPresent";
const logo = require("../../assets/official-logo-white.png");
const urban_tales_1 = require("../../assets/urban-tales-1.jpg");
const urban_tales_2 = require("../../assets/urban-tales-2.jpg");
const urban_tales_3 = require("../../assets/urban-tales-3.jpg");

interface Item9Props {}

export const Item9 = React.forwardRef<HTMLDivElement, Item9Props>((props, ref) => {
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
      background="linear-gradient(to bottom right, #7a3a96, #4b14c2)"
      hoverColor="#4b14c2"
      description="Step into Urban Tales, where every corner tells a unique story, unveiling mysteries and legends."
      image1={urban_tales_1}
      image2={urban_tales_2}
      image3={urban_tales_3}
      linkOpen={"https://urbantales.club/"}
      logo={logo}
      position={{
        gridColumnStart: 1,
        gridColumnEnd: isMobile ? 2 : 5,
        gridRowStart: isMobile ? 16 : 7,
        gridRowEnd: isMobile ? 19 : 9,
      }}
    />
  );
});
