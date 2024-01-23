import React, { useEffect, useRef } from "react";
import "./App.scss";
import { FloatingIcons } from "./components/FloatingIcons/FloatingIcons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const settings = {
  dots: false,
  infinite: true,
  speed: 3000, // Una transición más lenta
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0, // Cambio inmediato
  cssEase: "linear",
};

const urlForest = "https://i.pinimg.com/564x/e7/04/56/e7045643b35fba6754bf68e0dcae3bb0.jpg";
const myphoto = require("./assets/me1.jpg");
const urlBeach =
  "https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
const experience = require("./assets/experience.png");
const systemAnalystCertificate = require("./assets/Escolaridad.pdf");
const hobbies = require("./assets/Hobbies Complete.png");

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
      <div id="item1" className="grid-item leftToRight">
        <img src={myphoto} />
      </div>

      <div id="item2" className="grid-item topToBottom">
        {/* <img src={urlBeach} /> */}
        <FloatingIcons />
      </div>
      <div id="item3" className="grid-item rightToLeft">
        <h1>Hello 👋</h1>
        <p>
          I'm Emiliano, a Senior Developer with 5 years in full-stack, UX/UI, and diverse tech platforms, delivering
          seamless user experiences.
        </p>
      </div>
      <div id="item4" className="grid-item leftToRight">
        <h2>Education</h2>
        <ul>
          <li>
            <a href={systemAnalystCertificate} download="System_Analyst_Certificate">
              System Analyst
            </a>
          </li>
          <li>
            <a href="https://www.udemy.com/certificate/UC-9b399380-d1f3-445b-9dbc-8bb3fc47be0a/">
              {" "}
              React The Complete Guide
            </a>
          </li>
          <li>
            <a href="https://www.udemy.com/certificate/UC-f21c3636-4658-4351-b2b6-2c467598e500/">
              AWS Certified Cloud Practitioner
            </a>
          </li>
          <li>
            {" "}
            <a href="https://www.udemy.com/certificate/UC-7f677076-c00b-4ed3-8d9c-fc4a68448614/">
              {" "}
              Docker & Kubernetes: The Practical Guide
            </a>
          </li>
          <li>
            {" "}
            <a href="https://www.udemy.com/certificate/UC-8d2bf53c-1a8b-4c8d-9e41-033d01547c91/">
              React Native - The Practical Guide
            </a>
          </li>
        </ul>
      </div>
      <div ref={ref} id="item5" className="grid-item rightToLeft">
        <img src={experience} />
      </div>
      <div
        ref={ref}
        id="item6"
        className="grid-item"
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          height: "100%",
        }}
      >
        <h1
          style={{
            color: "transparent",
            background: "linear-gradient(to right, #fffbbb, #c38910)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            position: "absolute",
            marginLeft: "20px",
          }}
        >
          Hobbies
        </h1>
        <img src={hobbies} />
      </div>
    </div>
  );
}

export default App;
