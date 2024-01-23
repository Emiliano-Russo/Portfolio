// En tu archivo Item6.tsx
import React, { ForwardedRef } from "react";
import "./Item7.scss";
import { StudyCard } from "../StudyCard/StudyCard";
const systemAnalystCertificate = require("../../assets/Escolaridad.pdf");
const reactTheCompleteGuide = "https://www.udemy.com/certificate/UC-9b399380-d1f3-445b-9dbc-8bb3fc47be0a/";
const awsCertified = "https://www.udemy.com/certificate/UC-f21c3636-4658-4351-b2b6-2c467598e500/";
const docker = "https://www.udemy.com/certificate/UC-7f677076-c00b-4ed3-8d9c-fc4a68448614/";
const reactNative = "https://www.udemy.com/certificate/UC-8d2bf53c-1a8b-4c8d-9e41-033d01547c91/";

interface Item7Props {}

export const Item7 = React.forwardRef<HTMLDivElement, Item7Props>((props, ref) => {
  return (
    <div ref={ref} id="item7" className="grid-item">
      <h2 className="section-title">Educational Background 🎓</h2>
      <div className="studies-section">
        <StudyCard
          title="System Analyst"
          institution="ORT University"
          isDownloadable={true}
          link={systemAnalystCertificate}
        />
        <StudyCard
          title="React The Complete Guide"
          institution="Udemy"
          isDownloadable={false}
          link={reactTheCompleteGuide}
        />
        <StudyCard
          title="AWS Certified Cloud Practitioner"
          institution="Udemy"
          isDownloadable={false}
          link={awsCertified}
        />
        <StudyCard
          title="Docker & Kubernetes: The Practical Guide"
          institution="Udemy"
          isDownloadable={false}
          link={docker}
        />
        <StudyCard
          title="React Native - The Practical Guide"
          institution="Udemy"
          isDownloadable={false}
          link={reactNative}
        />
      </div>
      {/* Agrega más StudyCard aquí para otros estudios */}
    </div>
  );
});
