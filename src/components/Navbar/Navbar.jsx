import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import ProfileImage from "../ProfileImage/ProfileImage";
import { navItems, siteMeta } from "../../data/site";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}
      role="banner"
    >
      <div className="navbar__inner container">
        <a className="navbar__brand" href="#home" onClick={closeMenu}>
          <ProfileImage size="sm" priority />
          <span className="navbar__brand-text">{siteMeta.name}</span>
        </a>

        <nav className="navbar__nav" aria-label="Primary">
          <ul className="navbar__list">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  onClick={closeMenu}
                  className={item.id === "contact" ? "navbar__link--contact" : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="navbar__toggle"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`navbar__mobile ${open ? "navbar__mobile--open" : ""}`}
        hidden={!open}
      >
        <div className="navbar__mobile-profile">
          <ProfileImage size="md" priority />
          <div>
            <p className="navbar__mobile-name">{siteMeta.name}</p>
            <p className="navbar__mobile-title">{siteMeta.title}</p>
          </div>
        </div>
        <nav aria-label="Mobile">
          <ul>
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={item.href} onClick={closeMenu}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
