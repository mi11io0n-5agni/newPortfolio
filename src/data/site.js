export const siteMeta = {
  name: "Milion Sagni",
  title: "Full-Stack Web Developer",
  tagline:
    "Fourth-year Computer Science student at Ambo University building responsive, full-stack web applications with the MERN stack.",
  /** Drop your photo at public/profile.jpg (or change this path). */
  profileImage: "/profile.jpg",
  /** Set your contact email here */
  email: null,
  location: "Ambo, Ethiopia",
};

export const socialLinks = [
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/mi11io0n-5agni",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/miliondev430/",
  },
];

export const navItems = [
  { id: "home", label: "Home", href: "#home" },
  { id: "about", label: "About", href: "#about" },
  { id: "skills", label: "Skills", href: "#skills" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "certificate", label: "Certificate", href: "#certificate" },
  { id: "education", label: "Education", href: "#education" },
  { id: "contact", label: "Contact", href: "#contact" },
];

/** Update image and PDF paths when you add the real certificate files. */
export const certificateConfig = {
  program: "CodeAlpha Full Stack Website Developer Internship",
  title: "Full Stack Website Developer",
  organization: "CodeAlpha",
  imageSrc: "/certificate/certificate-preview.png",
  pdfHref: "/certificate/certificate.pdf",
  note:
    "Official internship certificate preview and PDF. Add the actual files in public/certificate to replace the placeholder files.",
};

export const educationItems = [
  {
    id: "ambo-cs",
    degree: "B.Sc. in Computer Science",
    institution: "Ambo University",
    period: "4th year (in progress)",
    details:
      "Coursework and projects focused on software development, web technologies, databases, and practical full-stack engineering.",
  },
];

export const professionalDevelopment = [
  {
    id: "codealpha",
    title: "CodeAlpha Full Stack Website Developer Internship",
    description:
      "Built and deployed production-oriented full-stack projects including an e-commerce store and TaskFlow project management platform.",
  },
];
