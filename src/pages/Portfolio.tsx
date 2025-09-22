import "../css/Repo.css";
import { Card } from "@radix-ui/themes";
import { PortfolioData } from "../utils/PortfolioData";

export default function Portfolio() {
  return (
    <div className="repoList">
      <h1>Portfolio</h1>
      <p>Här är några projekt jag arbetat med</p>
      <div className="repo-cards">
        {PortfolioData.map((repo) => (
          <Card key={repo.name} className="repo-card">
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="repo-link"
            >
              {repo.name}
            </a>
            <div className="repo-readme">{repo.readme}</div>
          </Card>
        ))}
      </div>
    </div>
  );
}
