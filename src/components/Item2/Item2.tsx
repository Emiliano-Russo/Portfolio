import { useEffect, useState } from "react";
import { FloatingIcons } from "../FloatingIcons/FloatingIcons";
import { FloatingIconsMobile } from "../FloatingIcons/FloatingIconsMobile";
import { icons } from "../../icon-list";

export const Item2 = () => {
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
    <div id="item2" className="grid-item topToBottom">
      {isMobile ? <FloatingIconsMobile iconsImgUrl={icons} /> : <FloatingIcons />}
    </div>
  );
};
