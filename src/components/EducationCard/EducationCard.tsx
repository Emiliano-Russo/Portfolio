import "./EducationCard.scss";

export const EducationCard = ({ title, link, description }) => (
  <div className="education-card">
    <a href={link} className="education-link" target="_blank" rel="noopener noreferrer">
      <h3 className="education-title">{title}</h3>
    </a>
    <p className="education-description">{description}</p>
  </div>
);
