import React from "react";
import "./Item8.scss";
const logo = require("../../assets/agenda-facil.png");
const agenda_facil_1 = require("../../assets/agenda-facil-1.png");
const agenda_facil_2 = require("../../assets/agenda-facil-2.jpg");
const agenda_facil_3 = require("../../assets/agenda-facil-3.jpg");
interface Item8Props {}

export const Item8 = React.forwardRef<HTMLDivElement, Item8Props>((props, ref) => {
  return (
    <div ref={ref} id="item8" className="grid-item">
      <img src={logo} alt="Agenda Fácil Logo" className="project-logo" />
      <div className="screenshots">
        <img src={agenda_facil_1} />
        <img src={agenda_facil_2} />
        <img src={agenda_facil_3} />
      </div>
      <p className="project-description">
        The ultimate solution to schedule and manage your appointments and events with ease. Forget the stress and let
        us help you organize your day to day life.
        {/* Agrega más texto según sea necesario */}
      </p>
      <button
        className="download-button"
        onClick={() => {
          window.open("https://agendafacil.org/", "_blank", "noopener,noreferrer");
        }}
      >
        Download Now
      </button>
      <div className="screenshots-container">{/* Agrega aquí las imágenes de las capturas de pantalla */}</div>
    </div>
  );
});
