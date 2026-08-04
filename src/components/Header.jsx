import React from "react";
import "./Header.css";
import { LOGO } from "../assets/logo.js";
import { waLink } from "../utils/links";

export default function Header({ menuOpen, setMenuOpen }) {
  return (
    <header className="site">
      <div className="nav-inner">
        <a href="#home" className="brand" onClick={() => setMenuOpen(false)}>
          <img src={LOGO} alt="Gunji The Sneakerhead logo" />
        </a>
        <nav className="links">
          <a href="#shop">Street</a>
          <a href="#shop">Formal</a>
          <a href="#trending">Drops</a>
          <a href="#about">About</a>
        </nav>
        <div className="nav-right">
          <span className="icon-btn" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </span>
          <a
            className="cta-pill desktop-only"
            href={waLink("Hi Gunji, I'd like to shop the latest drop.")}
            target="_blank"
            rel="noopener noreferrer"
          >
            Shop on WhatsApp
          </a>
          <button
            className="hamburger"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className={menuOpen ? "bar bar1 open" : "bar bar1"} />
            <span className={menuOpen ? "bar bar2 open" : "bar bar2"} />
            <span className={menuOpen ? "bar bar3 open" : "bar bar3"} />
          </button>
        </div>
      </div>
      <div className={"mobile-menu" + (menuOpen ? " open" : "")}> 
        <a href="#shop" onClick={() => setMenuOpen(false)}>Street</a>
        <a href="#shop" onClick={() => setMenuOpen(false)}>Formal</a>
        <a href="#trending" onClick={() => setMenuOpen(false)}>Drops</a>
        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        <a
          className="cta-pill mobile-cta"
          href={waLink("Hi Gunji, I'd like to shop the latest drop.")}
          target="_blank"
          rel="noopener noreferrer"
        >
          Shop on WhatsApp
        </a>
      </div>
    </header>
  );
}
