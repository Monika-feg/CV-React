import { Work } from "../utils/Work";

export default function WorkExperience() {
  return (
    <div>
      <h1>Arbetslivserfarenhet</h1>
      <div className="work-list">
        {Work().map((work, i) => (
          <div key={i} className="work-item">
            <h2>
              {work.position} - {work.company}
            </h2>
            <p>{work.year}</p>
            <p>{work.description}</p>
            <p>
              <strong>Inhämtade erfarenheter:</strong> {work.acquiredSkills}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
