import { EducationInfo } from "../utils/EducationInfo";
export default function Education() {
  return (
    <div>
      <h1>Utbildningar</h1>
      <div className="education-list">
        {EducationInfo().map((ed, i) => (
          <div key={i} className="education-item">
            <h2>
              {ed.name} - {ed.year}
            </h2>
            <p>Beskrivning: {ed.description}</p>
            <p>År: {ed.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
