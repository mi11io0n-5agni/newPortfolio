import ScrollReveal from "../ScrollReveal/ScrollReveal";
import ProjectCard from "../ProjectCard/ProjectCard";
import { featuredProjects } from "../../data/projects";
import "./Projects.css";

export default function Projects() {
  return (
    <section
      id="projects"
      className="section projects"
      aria-labelledby="projects-title"
    >
      <div className="container">
        <ScrollReveal>
          <p className="section-label">Projects</p>
          <h2 id="projects-title" className="section-title">
            Featured work
          </h2>
          <p className="section-intro">
            Selected applications with descriptions taken from the actual
            implementations in each repository.
          </p>
        </ScrollReveal>

        <div className="projects__list">
          {featuredProjects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 0.05}>
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
