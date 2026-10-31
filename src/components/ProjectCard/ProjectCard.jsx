import { ExternalLink, FileText, Github, X } from "lucide-react";
import { useEffect, useState } from "react";
import "./ProjectCard.css";

export default function ProjectCard({ project }) {
  const [isCaseStudyOpen, setIsCaseStudyOpen] = useState(false);

  useEffect(() => {
    if (!isCaseStudyOpen) return;

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsCaseStudyOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isCaseStudyOpen]);

  return (
    <>
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
            <button
              type="button"
              className="btn btn-ghost project-card__case-study"
              onClick={() => setIsCaseStudyOpen(true)}
            >
              <FileText size={17} aria-hidden="true" />
              Case study
            </button>

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

      {isCaseStudyOpen && (
        <div
          className="project-case-study-overlay"
          onClick={() => setIsCaseStudyOpen(false)}
          aria-hidden="true"
        >
          <div
            className="project-case-study"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-case-study-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="project-case-study__close"
              onClick={() => setIsCaseStudyOpen(false)}
              aria-label="Close case study"
            >
              <X size={18} aria-hidden="true" />
            </button>

            <p className="section-label">Case study</p>
            <h3 id="project-case-study-title">{project.name}</h3>
            <p className="project-case-study__summary">{project.overview}</p>

            <div className="project-case-study__section">
              <h4>Challenge</h4>
              <p>{project.caseStudy.challenge}</p>
            </div>

            <div className="project-case-study__section">
              <h4>Approach</h4>
              <p>{project.caseStudy.approach}</p>
            </div>

            <div className="project-case-study__section">
              <h4>Process</h4>
              <ul>
                {project.caseStudy.process.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="project-case-study__section">
              <h4>Outcome</h4>
              <p>{project.caseStudy.result}</p>
            </div>

            <div className="project-card__stack project-case-study__stack" aria-label="Technology stack">
              {project.stack.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
