import React, { useEffect, useRef } from "react";
import "./App.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Item1 } from "./components/Item1/Item1";
import { Item2 } from "./components/Item2/Item2";
import { Item3 } from "./components/Item3/Item3";
import { Item4 } from "./components/Item4/Item4";
import { Item5 } from "./components/Item5/Item5";
import { Item6 } from "./components/Item6/Item6";

function App() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("leftToRight");
          }
        });
      },
      {
        threshold: 0.5, // Ajusta según la cantidad de elemento que debe estar visible para activar la animación
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div className="grid-container">
      <Item1 />
      <Item2 />
      <Item3 />
      <Item4 />
      <Item5 ref={ref} />
      <Item6 ref={ref} />
    </div>
  );
}

export default App;
