import { Github, Linkedin } from "lucide-react";
import { siteMeta, socialLinks } from "../../data/site";
import "./Footer.css";

const iconMap = {
  github: Github,
  linkedin: Linkedin,
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer__inner">
        <p className="footer__copy">
          © {year} {siteMeta.name}. Built with React & Vite.
        </p>
        <ul className="footer__links">
          {socialLinks.map((link) => {
            const Icon = iconMap[link.id];
            return (
              <li key={link.id}>
                <a href={link.href} target="_blank" rel="noreferrer noopener">
                  {Icon ? <Icon size={17} aria-hidden="true" /> : null}
                  <span>{link.label}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}
