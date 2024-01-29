import React, { useEffect, useState } from "react";
import { ProjectPresent } from "../ProjectPresent/ProjectPresent";
const logo = require("../../assets/agenda-facil.png");
const agenda_facil_1 = require("../../assets/agenda-facil-1.png");
const agenda_facil_2 = require("../../assets/agenda-facil-2.jpg");
const agenda_facil_3 = require("../../assets/agenda-facil-3.jpg");

interface Item8Props {
  ref: React.MutableRefObject<null>;
}

export const Item8 = React.forwardRef<HTMLDivElement, Item8Props>((props, ref) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    window.addEventListener("resize", handleResize);

    // Limpieza del evento
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  console.log("REF BY ITEM8: ", props.ref);

  return (
    <ProjectPresent
      background="linear-gradient(to bottom right, #ffa500, #ff7f00)"
      hoverColor="#ff7f00"
      ref={props.ref}
      description="The ultimate solution to schedule and manage your appointments and events with ease. Forget the stress and let
  us help you organize your day to day life."
      image1={agenda_facil_1}
      image2={agenda_facil_2}
      image3={agenda_facil_3}
      linkOpen={"https://agendafacil.org/"}
      logo={logo}
      position={{
        gridColumnStart: 1,
        gridColumnEnd: isMobile ? 2 : 5,
        gridRowStart: isMobile ? 13 : 5,
        gridRowEnd: isMobile ? 16 : 7,
      }}
    />
  );
});
