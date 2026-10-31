import { ExternalLink, FileText } from "lucide-react";
import { siteMeta } from "../../data/site";
import "./Resume.css";

export default function Resume() {
  return (
    <section id="resume" className="section resume" aria-labelledby="resume-title">
      <div className="container">
        <div className="resume__panel">
          <div className="resume__content">
            <p className="section-label">Resume</p>
            <h2 id="resume-title" className="section-title">
              A quick look at my background, skills, and work.
            </h2>
            <p className="resume__text">
              I build responsive applications, work with modern web tools, and turn
              ideas into practical products with clean architecture and good user
              experience.
            </p>

            <div className="resume__actions">
              <a
                className="btn btn-primary"
                href={siteMeta.resumeUrl}
                target="_blank"
                rel="noreferrer noopener"
              >
                <ExternalLink size={18} aria-hidden="true" />
                Open resume
              </a>
              <a className="btn btn-secondary" href="#contact">
                <FileText size={18} aria-hidden="true" />
                Contact me
              </a>
            </div>
          </div>

          <div className="resume__meta" aria-label="Resume highlights">
            <div className="resume__stat">
              <span>4th</span>
              <small>Year student</small>
            </div>
            <div className="resume__stat">
              <span>MERN</span>
              <small>Stack focus</small>
            </div>
            <div className="resume__stat">
              <span>Full</span>
              <small>Stack builder</small>
            </div>
          </div>
        </div>

        <div className="resume__preview-wrap" aria-label="Resume preview">
          <iframe
            className="resume__preview"
            src={siteMeta.resumeUrl}
            title="Milion Sagni Resume"
          />
        </div>
      </div>
    </section>
  );
}
