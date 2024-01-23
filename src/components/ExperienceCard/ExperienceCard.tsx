export const ExperienceCard = ({ jobTitle, company, period }) => (
  <div className="experience-card">
    <div className="experience-header">
      <h3 className="job-title">{jobTitle}</h3>
      <div className="experience-period">{period}</div>
    </div>
    <div className="company-name">{company}</div>
  </div>
);
