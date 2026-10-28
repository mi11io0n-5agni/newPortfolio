import { ExternalLink, Github } from "lucide-react";
import "./ProjectCard.css";

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-card__media">
        <img src={project.image} alt={project.imageAlt} loading="lazy" />
      </div>

      <div className="project-card__body">
        <h3>{project.shortName}</h3>
        <p className="project-card__overview">{project.overview}</p>

        <ul className="project-card__highlights">
          {project.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <div className="project-card__stack" aria-label="Technology stack">
          {project.stack.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        <div className="project-card__links">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer noopener"
            className="btn btn-secondary"
          >
            <Github size={17} aria-hidden="true" />
            GitHub
          </a>
          {project.liveDemo ? (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noreferrer noopener"
              className="btn btn-primary"
            >
              <ExternalLink size={17} aria-hidden="true" />
              Live demo
            </a>
          ) : (
            <span className="project-card__demo-note" role="note">
              {project.liveDemoNote || "Live demo URL not set yet."}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
