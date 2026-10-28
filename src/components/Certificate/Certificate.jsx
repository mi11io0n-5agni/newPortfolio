import { Award, FileText } from "lucide-react";
import ScrollReveal from "../ScrollReveal/ScrollReveal";
import { certificateConfig } from "../../data/site";
import "./Certificate.css";

export default function Certificate() {
  const hasImage = Boolean(certificateConfig.imageSrc);
  const hasPdf = Boolean(certificateConfig.pdfHref);

  return (
    <section
      id="certificate"
      className="section certificate"
      aria-labelledby="certificate-title"
    >
      <div className="container">
        <ScrollReveal>
          <p className="section-label">Internship</p>
          <h2 id="certificate-title" className="section-title">
            CodeAlpha certificate
          </h2>
          <p className="section-intro">
            {certificateConfig.program}. Certificate files are placeholders until
            you add the official preview and PDF.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <div className="certificate__panel">
            <div className="certificate__preview">
              {hasImage ? (
                <img
                  src={certificateConfig.imageSrc}
                  alt={`${certificateConfig.title} certificate preview`}
                />
              ) : (
                <div className="certificate__placeholder" role="img" aria-label="Certificate placeholder">
                  <Award size={40} strokeWidth={1.5} aria-hidden="true" />
                  <p className="certificate__placeholder-label">Certificate preview placeholder</p>
                  <p className="certificate__placeholder-note">
                    Not a verified document — replace with your official certificate image.
                  </p>
                </div>
              )}
            </div>

            <div className="certificate__details">
              <h3>{certificateConfig.title}</h3>
              <p className="certificate__org">{certificateConfig.organization}</p>
              <p className="certificate__text">{certificateConfig.note}</p>

              {hasPdf ? (
                <a
                  className="btn btn-primary"
                  href={certificateConfig.pdfHref}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <FileText size={18} aria-hidden="true" />
                  View certificate PDF
                </a>
              ) : (
                <p className="certificate__pdf-note" role="note">
                  PDF link not configured yet. Add{" "}
                  <code>pdfHref</code> in <code>src/data/site.js</code>.
                </p>
              )}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
