import React from "react";
import "./ProjectPresent.scss";

interface Position {
  gridColumnStart: number;
  gridColumnEnd: number;
  gridRowStart: number;
  gridRowEnd: number;
}

interface ProjectPresent {
  background: string;
  logo: string;
  image1: string;
  image2: string;
  image3: string;
  description: string;
  linkOpen: string;
  position: Position;
  hoverColor: string;
  ref: React.MutableRefObject<null>;
}

export const ProjectPresent = React.forwardRef<HTMLDivElement, ProjectPresent>((props, ref) => {
  console.log("reference project present: ", props.ref);
  return (
    <div
      className="grid-item"
      ref={props.ref}
      style={{
        background: props.background,
        gridColumnStart: props.position.gridColumnStart,
        gridColumnEnd: props.position.gridColumnEnd,
        gridRowStart: props.position.gridRowStart,
        gridRowEnd: props.position.gridRowEnd,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "start",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <img
        style={{ maxHeight: "140px", maxWidth: "250px", objectFit: "contain" }}
        src={props.logo}
        className="project-logo"
      />
      <div className="screenshots">
        <img src={props.image1} />
        <img src={props.image2} />
        <img src={props.image3} />
      </div>
      <p className="project-description">{props.description}</p>
      <button
        style={{ color: props.hoverColor }}
        className="download-button"
        onClick={() => {
          window.open(props.linkOpen, "_blank", "noopener,noreferrer");
        }}
      >
        Download Now
      </button>
    </div>
  );
});
