import ScrollReveal from "../ScrollReveal/ScrollReveal";
import { educationItems, professionalDevelopment } from "../../data/site";
import "./Education.css";

export default function Education() {
  return (
    <section
      id="education"
      className="section education"
      aria-labelledby="education-title"
    >
      <div className="container">
        <ScrollReveal>
          <p className="section-label">Education</p>
          <h2 id="education-title" className="section-title">
            Education & professional development
          </h2>
        </ScrollReveal>

        <div className="education__grid">
          <ScrollReveal delay={0.05}>
            <div className="education__block">
              <h3>University</h3>
              <ul className="education__timeline">
                {educationItems.map((item) => (
                  <li key={item.id}>
                    <p className="education__degree">{item.degree}</p>
                    <p className="education__meta">
                      {item.institution} · {item.period}
                    </p>
                    <p className="education__details">{item.details}</p>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.12}>
            <div className="education__block">
              <h3>Professional development</h3>
              <ul className="education__timeline">
                {professionalDevelopment.map((item) => (
                  <li key={item.id}>
                    <p className="education__degree">{item.title}</p>
                    <p className="education__details">{item.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
