// En tu archivo Item6.tsx
import React, { ForwardedRef, useEffect, useState } from "react";
import "./Item6.scss";

const hobbies = require("../../assets/Hobbies.png");
const hobbiesMobile = require("../../assets/Hobbies-Mobile.png");

// Define las props si las necesitas. En este ejemplo, no hay props adicionales,
// por lo que se usa un objeto vacío.
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
      <h1>Hobbies</h1>
      <img src={isMobile ? hobbiesMobile : hobbies} />
    </div>
  );
});
