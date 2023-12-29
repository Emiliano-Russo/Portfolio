import React from "react";
import "./App.scss";

function App() {
  return (
    <div className="grid-container">
      <div
        className="grid-item"
        style={{ gridColumnStart: "1", gridRowStart: "1", gridRowEnd: "3", background: "red" }}
      >
        <img src="https://i.pinimg.com/564x/e7/04/56/e7045643b35fba6754bf68e0dcae3bb0.jpg" />
      </div>
      <div className="grid-item" style={{ gridColumnStart: "2", gridColumnEnd: "4" }}>
        <img src="https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
      </div>
      <div
        className="grid-item"
        style={{ background: "white", gridColumnStart: "4", paddingLeft: "50px", paddingRight: "50px" }}
      >
        <h1 style={{ fontWeight: "bolder" }}>Hello 👋</h1>
        <p style={{ margin: "0px", fontWeight: "100" }}>
          I'm Emiliano, a Senior Developer with 4 years in full-stack, UX/UI, and diverse tech platforms, delivering
          seamless user experiences.
        </p>
      </div>
      <div className="grid-item" style={{ background: "gray", gridColumnStart: "2", gridRowStart: "2" }}></div>
      <div
        className="grid-item"
        style={{ background: "green", gridColumnStart: "3", gridColumnEnd: "5", gridRowStart: "2", gridRowEnd: "4" }}
      ></div>
    </div>
  );
}

export default App;
