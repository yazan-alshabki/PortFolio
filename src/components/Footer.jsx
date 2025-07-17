import React from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo} from "../assets";


// --- Update these with your real info ---
const CONTACT = {
  email: "yazanalshabki2001@gmail.com",
  phoneDisplay: "+963 997 105 260",          // what you want to show
  phoneHref: "+905550000000",                // digits only for tel: link
  linkedin: "https://www.linkedin.com/in/yazanalshabki/", // replace w/ real
  github: "https://github.com/yazan-alshabki",  // replace w/ real
  location: "Syria, Tartus",              // optional
};

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-primary/90 backdrop-blur-sm border-t border-white/10 mt-32">
      {/* Top section: brand + nav + contact */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-3">
        {/* Brand / short pitch */}
        <div className="flex flex-col gap-4">
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <img
              src={logo}
              alt="Yazan logo"
              className="w-10 h-10 object-contain"
            />
            <span className="text-white font-bold text-lg">
              Yazan Alshabki
            </span>
          </Link>
          <p className="text-secondary text-sm leading-relaxed max-w-xs">
            Software Engineer focused on automation, scalable back-end systems,
            and engaging interactive UI experiences.
          </p>
        </div>

        {/* Quick Links (same anchors as Navbar) */}
        <nav aria-label="Footer navigation">
          <h4 className="text-white font-semibold mb-4 text-base">
            Quick Links
          </h4>
          <ul className="space-y-2">
            {navLinks.map((nav) => (
              <li key={nav.id}>
                <a
                  href={`#${nav.id}`}
                  className="text-secondary hover:text-white transition-colors text-sm"
                >
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-base">
            Get in Touch
          </h4>
          <ul className="space-y-2 text-sm">
            {CONTACT.location && (
              <li className="text-secondary">{CONTACT.location}</li>
            )}
            <li>
              <a
                className="text-secondary hover:text-white transition-colors"
              >
                {CONTACT.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${CONTACT.email}`}
                className="text-secondary hover:text-white transition-colors break-all"
              >
                {CONTACT.email}
              </a>
            </li>
            <li className="flex gap-4 pt-2">
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-secondary hover:text-white transition-colors"
              >
                LinkedIn
              </a>
              <a
                href={CONTACT.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-secondary hover:text-white transition-colors"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span className="text-secondary text-xs">
            © {year} Yazan Alshabki. All rights reserved.
          </span>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-secondary hover:text-white text-xs transition-colors"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
