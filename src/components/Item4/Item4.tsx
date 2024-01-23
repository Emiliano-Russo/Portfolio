import { EducationCard } from "../EducationCard/EducationCard";

const systemAnalystCertificate = require("../../assets/Escolaridad.pdf");

export const Item4 = () => {
  return (
    <div id="item4" className="grid-item leftToRight">
      <h2 className="section-title">Education</h2>
      <div className="education-container">
        <EducationCard title="System Analyst" link={systemAnalystCertificate} description="ORT University" />
        <EducationCard
          title="React The Complete Guide"
          link={"https://www.udemy.com/certificate/UC-9b399380-d1f3-445b-9dbc-8bb3fc47be0a/"}
          description="Udemy"
        />
        <EducationCard
          title="AWS Certified Cloud Practitioner"
          link={"https://www.udemy.com/certificate/UC-f21c3636-4658-4351-b2b6-2c467598e500/"}
          description="Udemy"
        />
        {/* ... Agrega más EducationCards aquí ... */}
      </div>
    </div>
  );
};

{
  /* <div id="item4" className="grid-item leftToRight">
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
      </div> */
}
