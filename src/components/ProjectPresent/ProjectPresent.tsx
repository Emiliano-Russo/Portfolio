import React from "react";
import "./ProjectPresent.scss";

interface Position {
  gridColumnStart: number;
  gridColumnEnd: number;
  gridRowStart: number;
  gridRowEnd: number;
}

interface ProjectPresent {
  logo: string;
  image1: string;
  image2: string;
  image3: string;
  description: string;
  linkOpen: string;
  position: Position;
}

export const ProjectPresent = React.forwardRef<HTMLDivElement, ProjectPresent>((props, ref) => {
  return (
    <div
      style={{
        background: "linear-gradient(to bottom right, #ffa500, #ff7f00)",
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
      <img src={props.logo} className="project-logo" />
      <div className="screenshots">
        <img src={props.image1} />
        <img src={props.image2} />
        <img src={props.image3} />
      </div>
      <p className="project-description">{props.description}</p>
      <button
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
