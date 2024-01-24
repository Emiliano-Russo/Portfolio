import React from "react";
import "./Item9.scss";
const logo = require("../../assets/official-logo-white.png");
const agenda_facil_1 = require("../../assets/urban-tales-1.jpg");
const agenda_facil_2 = require("../../assets/urban-tales-2.jpg");
const agenda_facil_3 = require("../../assets/urban-tales-3.jpg");

interface Item9Props {}

export const Item9 = React.forwardRef<HTMLDivElement, Item9Props>((props, ref) => {
  return (
    <div ref={ref} id="item9" className="grid-item">
      <img src={logo} alt="Agenda Fácil Logo" className="project-logo" />
      <div className="screenshots">
        <img src={agenda_facil_2} />
        <img src={agenda_facil_1} />
        <img src={agenda_facil_3} />
      </div>
      <p className="project-description">
        Step into Urban Tales, where every corner tells a unique story, unveiling mysteries and legends.
        {/* Agrega más texto según sea necesario */}
      </p>
      <button
        className="download-button"
        onClick={() => {
          window.open("https://urbantales.club/", "_blank", "noopener,noreferrer");
        }}
      >
        Download Now
      </button>
      <div className="screenshots-container">{/* Agrega aquí las imágenes de las capturas de pantalla */}</div>
    </div>
  );
});
