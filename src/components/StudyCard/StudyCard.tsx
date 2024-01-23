export const StudyCard = ({ title, institution, link, isDownloadable }) => (
  <a href={link} className="study-card" target="_blank" rel="noopener noreferrer" download={isDownloadable}>
    <h3 className="study-title">{title}</h3>
    <p className="study-institution">{institution}</p>
  </a>
);
