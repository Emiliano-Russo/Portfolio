import React from "react";
import "./App.scss";
import { FloatingIcons } from "./components/FloatingIcons";

const urlForest = "https://i.pinimg.com/564x/e7/04/56/e7045643b35fba6754bf68e0dcae3bb0.jpg";
const myphoto = require("./assets/me1.jpg");
const urlBeach =
  "https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

function App() {
  return (
    <div className="grid-container">
      <div id="item1" className="grid-item">
        <img src={myphoto} />
      </div>
      <div id="item2" className="grid-item">
        {/* <img src={urlBeach} /> */}
        <FloatingIcons />
      </div>
      <div id="item3" className="grid-item">
        <h1>Hello 👋</h1>
        <p>
          I'm Emiliano, a Senior Developer with 5 years in full-stack, UX/UI, and diverse tech platforms, delivering
          seamless user experiences.
        </p>
      </div>
      <div id="item4" className="grid-item"></div>
      <div id="item5" className="grid-item"></div>
    </div>
  );
}

export default App;
