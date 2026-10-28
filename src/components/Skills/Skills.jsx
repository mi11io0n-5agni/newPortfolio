import ScrollReveal from "../ScrollReveal/ScrollReveal";
import { skillCategories } from "../../data/skills";
import "./Skills.css";

export default function Skills() {
  return (
    <section id="skills" className="section skills" aria-labelledby="skills-title">
      <div className="container">
        <ScrollReveal>
          <p className="section-label">Skills</p>
          <h2 id="skills-title" className="section-title">
            Technologies from shipped projects
          </h2>
          <p className="section-intro">
            This list reflects tools and libraries used in my e-commerce store,
            TaskFlow, Netflix clone, and COOP Bank queue system — not a generic
            stack claim.
          </p>
        </ScrollReveal>

        <div className="skills__grid">
          {skillCategories.map((category, index) => (
            <ScrollReveal key={category.id} delay={index * 0.06}>
              <article className="skills__card">
                <h3>{category.title}</h3>
                <ul>
                  {category.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
