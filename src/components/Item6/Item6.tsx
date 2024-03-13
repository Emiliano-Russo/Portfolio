// Item6.tsx
import React, { useEffect, useState } from "react";
import "./Item6.scss";

const football = require("../../assets/hobbies/football.jpg");
const book = require("../../assets/hobbies/book.jpg");
const photography = require("../../assets/hobbies/photography.jpg");

interface Item6Props {}

export const Item6 = React.forwardRef<HTMLDivElement, Item6Props>((props, ref) => {
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
    <div ref={ref} id="item6" className="grid-item">
      <div id="Hobbies">
        <h2>Hobbies</h2>
      </div>
      <div style={{ background: "blue" }} className="quadrant">
        <img src={football} />
      </div>
      <div style={{ background: "orange" }} className="quadrant">
        <img src={book} />
      </div>
      <div style={{ background: "red" }} className="quadrant">
        <img src={photography} />
      </div>
    </div>
  );
});
