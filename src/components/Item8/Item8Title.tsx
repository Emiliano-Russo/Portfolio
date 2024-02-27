import React, { useEffect, useState } from "react";
import "./Item8Title.scss";

interface Item8Props {
  ref: React.MutableRefObject<null>;
}

export const Item8Title = React.forwardRef<HTMLDivElement, Item8Props>((props, ref) => {
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
    <div ref={ref} id="item8Title" className="grid-item">
      <h2> ⬇️ Projects I worked on ⬇️</h2>
    </div>
  );
});
