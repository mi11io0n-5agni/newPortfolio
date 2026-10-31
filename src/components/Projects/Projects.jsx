import { useState } from "react";
import ScrollReveal from "../ScrollReveal/ScrollReveal";
import ProjectCard from "../ProjectCard/ProjectCard";
import { featuredProjects } from "../../data/projects";
import "./Projects.css";

const filters = ["All", "Full-Stack", "Frontend", "Backend", "Real-time"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? featuredProjects
      : featuredProjects.filter((project) => {
          const projectCategory = project.category || "Full-Stack";
          if (projectCategory === activeFilter) return true;
          if (activeFilter === "Backend" && project.stack.includes("Node.js")) return true;
          if (activeFilter === "Real-time" && project.stack.includes("Socket.IO")) return true;
          return false;
        });

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

        <div className="projects__filters" aria-label="Project filters">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              className={
                activeFilter === filter
                  ? "projects__filter is-active"
                  : "projects__filter"
              }
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="projects__list">
          {filteredProjects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 0.05}>
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
