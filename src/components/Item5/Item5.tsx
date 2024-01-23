import { useRef } from "react";
import { ExperienceCard } from "../ExperienceCard/ExperienceCard";
import "./Item5.scss";

interface Props {
  ref: React.MutableRefObject<null>;
}

export const Item5 = (props: Props) => {
  return (
    <div ref={props.ref} id="item5" className="grid-item rightToLeft">
      <h2 className="work-experience-title">Work Experience</h2>
      <ExperienceCard jobTitle="Freelancer" company="Upwork" period="2019 - 2020" />
      <ExperienceCard jobTitle="Full Stack Developer" company="GlobalUY" period="2020 - 2023" />
      <ExperienceCard jobTitle="Software Engineer III" company="Cencosud" period="2023 - 2024" />
      <ExperienceCard jobTitle="Entrepreneur" company="App Development" period="2024 - Now" />
    </div>
  );
};
