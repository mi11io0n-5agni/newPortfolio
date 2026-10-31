import { ArrowRight, Code2, Rocket, Sparkles, Workflow } from "lucide-react";
import ScrollReveal from "../ScrollReveal/ScrollReveal";
import "./WhyHireMe.css";

const strengths = [
  {
    icon: <Code2 size={20} aria-hidden="true" />,
    title: "Full-stack thinking",
    description:
      "I design products from the UI down to the database layer, making sure the user experience and the backend architecture work together cleanly.",
  },
  {
    icon: <Workflow size={20} aria-hidden="true" />,
    title: "Practical workflows",
    description:
      "From authentication to task collaboration and order flows, I build systems that solve real user and business problems instead of just static demos.",
  },
  {
    icon: <Sparkles size={20} aria-hidden="true" />,
    title: "Clean, modern interfaces",
    description:
      "I care about responsive design, good interaction patterns, and polished details that make products feel trustworthy and easy to use.",
  },
  {
    icon: <Rocket size={20} aria-hidden="true" />,
    title: "Deployment ready",
    description:
      "I build and ship projects to production-ready platforms so the work is not only functional in development but also ready for real use.",
  },
];

export default function WhyHireMe() {
  return (
    <section id="why-hire-me" className="section why-hire-me" aria-labelledby="why-hire-me-title">
      <div className="container">
        <ScrollReveal>
          <p className="section-label">Why hire me</p>
          <h2 id="why-hire-me-title" className="section-title">
            I build products that balance speed, clarity, and real-world usability.
          </h2>
          <p className="section-intro why-hire-me__intro">
            I focus on creating applications that feel smooth for users and structured for teams, with a strong preference for practical problem-solving and clean implementation.
          </p>
        </ScrollReveal>

        <div className="why-hire-me__grid">
          {strengths.map((item, index) => (
            <ScrollReveal key={item.title} delay={index * 0.08}>
              <article className="why-hire-me__card">
                <div className="why-hire-me__icon" aria-hidden="true">
                  {item.icon}
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.12}>
          <div className="why-hire-me__cta">
            <span>Open to internships, freelance work, and full-stack development opportunities.</span>
            <a href="#contact" className="btn btn-primary">
              Let&apos;s talk
              <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
