import { GraduationCap, Layers } from "lucide-react";
import ProfileImage from "../ProfileImage/ProfileImage";
import ScrollReveal from "../ScrollReveal/ScrollReveal";
import { siteMeta } from "../../data/site";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="section about" aria-labelledby="about-title">
      <div className="container">
        <ScrollReveal>
          <div className="about__header">
            <div className="about__profile">
              <ProfileImage size="md" />
              <div>
                <p className="about__profile-name">{siteMeta.name}</p>
                <p className="about__profile-role">{siteMeta.title}</p>
              </div>
            </div>
            <div>
              <p className="section-label">About</p>
              <h2 id="about-title" className="section-title">
                Building full-stack products with clarity and care
              </h2>
              <p className="section-intro about__intro">
                I am a fourth-year Computer Science student at Ambo University with a
                focus on full-stack web development. I enjoy turning real requirements
                into responsive interfaces backed by structured APIs and databases.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <div className="about__grid">
          <ScrollReveal delay={0.08}>
            <article className="about__card">
              <div className="about__icon" aria-hidden="true">
                <GraduationCap size={22} />
              </div>
              <h3>Education</h3>
              <p>
                B.Sc. in Computer Science at{" "}
                <strong>Ambo University</strong> (4th year, in progress). My
                coursework supports the web applications shown in this portfolio.
              </p>
            </article>
          </ScrollReveal>

          <ScrollReveal delay={0.16}>
            <article className="about__card">
              <div className="about__icon about__icon--blue" aria-hidden="true">
                <Layers size={22} />
              </div>
              <h3>Development interests</h3>
              <ul className="about__list">
                <li>Full-stack web development with React and Node.js</li>
                <li>RESTful APIs, authentication, and MongoDB data modeling</li>
                <li>Real-time features and collaborative workflows</li>
                <li>Deploying student projects to production platforms</li>
              </ul>
            </article>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
