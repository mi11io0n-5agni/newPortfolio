import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import ScrollReveal from "../ScrollReveal/ScrollReveal";
import { siteMeta, socialLinks } from "../../data/site";
import "./Contact.css";

export default function Contact() {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const emailJsReady = Boolean(serviceId && templateId && publicKey);

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const fallbackMailto = () => {
    if (!siteMeta.email) {
      setStatus("no-email");
      return false;
    }

    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );

    window.location.href = `mailto:${siteMeta.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
    return true;
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    if (emailJsReady) {
      try {
        await emailjs.sendForm(serviceId, templateId, formRef.current, {
          publicKey,
        });

        setForm({ name: "", email: "", message: "" });
        setStatus("success");
      } catch (error) {
        console.error("EmailJS send failed:", error);
        fallbackMailto();
      }
      return;
    }

    fallbackMailto();
  };

  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="container">
        <ScrollReveal>
          <p className="section-label">Contact</p>
          <h2 id="contact-title" className="section-title">
            Let&apos;s connect
          </h2>
          <p className="section-intro">
            Open to internships, collaborations, and full-stack web development
            opportunities. Reach out through the form or verified profiles below.
          </p>
        </ScrollReveal>

        <div className="contact__grid">
          <ScrollReveal delay={0.06}>
            <form ref={formRef} className="contact__form" onSubmit={onSubmit} noValidate>
              <div className="contact__field">
                <label htmlFor="contact-name">Name</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={form.name}
                  onChange={onChange}
                />
              </div>
              <div className="contact__field">
                <label htmlFor="contact-email">Email</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={form.email}
                  onChange={onChange}
                />
              </div>
              <div className="contact__field">
                <label htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={onChange}
                />
              </div>
              <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
                <Send size={18} aria-hidden="true" />
                {status === "sending" ? "Sending..." : "Send message"}
              </button>

              {status === "error" && (
                <p className="contact__status" role="status">
                  Please fill in all fields before sending.
                </p>
              )}

              {status === "no-email" && (
                <p className="contact__status" role="status">
                  Add your email in <code>src/data/site.js</code> or configure EmailJS in your .env file.
                </p>
              )}

              {status === "sent" && siteMeta.email && (
                <p className="contact__status contact__status--ok" role="status">
                  Opening your email client…
                </p>
              )}

              {status === "success" && (
                <p className="contact__status contact__status--ok" role="status">
                  Your message was sent successfully.
                </p>
              )}
            </form>
          </ScrollReveal>

          <ScrollReveal delay={0.12}>
            <aside className="contact__info" aria-label="Contact information">
              <div className="contact__info-item">
                <MapPin size={18} aria-hidden="true" />
                <span>{siteMeta.location}</span>
              </div>
              <div className="contact__info-item">
                <Mail size={18} aria-hidden="true" />
                {siteMeta.email ? (
                  <a href={`mailto:${siteMeta.email}`}>{siteMeta.email}</a>
                ) : (
                  <span>Add email in src/data/site.js</span>
                )}
              </div>
              <ul className="contact__social">
                {socialLinks.map((link) => (
                  <li key={link.id}>
                    <a href={link.href} target="_blank" rel="noreferrer noopener">
                      {link.id === "linkedin" ? (
                        <Linkedin size={18} aria-hidden="true" />
                      ) : link.id === "github" ? (
                        <Github size={18} aria-hidden="true" />
                      ) : null}
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </aside>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
