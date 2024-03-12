import "./Item4.scss";

const scolarship = require("../../assets/Escolaridad.pdf");

export const Item4 = () => {
  return (
    <div id="item4" className="grid-item leftToRight">
      <div className="quadrant" style={{ background: "#88ffaa" }}>
        <div className="quadrant-content">
          <a href={scolarship} target="_blank" rel="noopener noreferrer" className="quadrant-link">
            <img
              style={{ width: "40px" }}
              width="50"
              height="50"
              src="https://img.icons8.com/ios/50/open-resume.png"
              alt="open-resume"
            />
          </a>
        </div>
      </div>
      <div className="quadrant" style={{ background: "#ad23c2" }}>
        <div className="quadrant-content">
          <a
            href="https://github.com/Emiliano-Russo"
            target="_blank"
            rel="noopener noreferrer"
            className="quadrant-link"
          >
            <img style={{ width: "40px" }} src="https://img.icons8.com/material-outlined/96/github.png" alt="github" />
          </a>
        </div>
      </div>
      <div className="quadrant" style={{ background: "#69b6f0" }}>
        <div className="quadrant-content">
          <a
            href="https://www.linkedin.com/in/russo-emiliano"
            target="_blank"
            rel="noopener noreferrer"
            className="quadrant-link"
          >
            <img style={{ width: "40px" }} src="https://img.icons8.com/fluency/48/linkedin.png" alt="linkedin" />
          </a>
        </div>
      </div>
      <div className="quadrant" style={{ background: "#FDEA71" }}>
        <div className="quadrant-content">
          <a href="mailto:russo.emiliano97@gmail.com" className="quadrant-link">
            <img style={{ width: "40px" }} src="https://img.icons8.com/ios/100/new-post--v1.png" alt="email" />
          </a>
        </div>
      </div>
    </div>
  );
};
