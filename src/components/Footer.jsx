import React from "react";
import "./Footer.css";
import { LOGO } from "../assets/logo.js";
import { waLink, INSTAGRAM_HANDLE } from "../utils/links";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand-col">
          <div className="footer-brand">
            <img src={LOGO} alt="Gunji The Sneakerhead" />
          </div>
          <p className="footer-desc">
            Curated sneakers and formal footwear for collectors, trendsetters, and anyone who knows the difference between a pair and a statement.
          </p>
          <div className="social-row">
            <a href={`https://instagram.com/${INSTAGRAM_HANDLE}`} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.65-.07-4.85s.02-3.58.07-4.85C2.7 2.7 5.11.27 9.46.07 10.74.01 11.15 0 12 0zm0 5.84A6.16 6.16 0 1 0 12 18.16 6.16 6.16 0 0 0 12 5.84zm0 10.16A4 4 0 1 1 12 8a4 4 0 0 1 0 8zm6.4-10.4a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" />
              </svg>
            </a>
            <a href={waLink("Hi Gunji, I have a question.")} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.38 5.07L2 22l5.11-1.34A9.94 9.94 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.6 0-3.11-.42-4.42-1.16l-.32-.18-3.03.8.81-2.95-.2-.31A7.94 7.94 0 0 1 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="footer-links">
          <h4>Shop</h4>
          <nav>
            <a href="#shop">Streetwear</a>
            <a href="#shop">Formal</a>
            <a href="#trending">New drops</a>
          </nav>
        </div>

        <div className="footer-links">
          <h4>About</h4>
          <nav>
            <a href="#about">Our story</a>
            <a href="#shop">Size help</a>
          </nav>
        </div>

        <div className="footer-links">
          <h4>Contact</h4>
          <nav>
            <a href={waLink("Hi Gunji, I have a question.")} target="_blank" rel="noopener noreferrer">WhatsApp</a>
            <a href={`https://instagram.com/${INSTAGRAM_HANDLE}`} target="_blank" rel="noopener noreferrer">Instagram</a>
          </nav>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Gunji The Sneakerhead. All rights reserved.</span>
        <span>Made for people who notice shoes.</span>
      </div>
    </footer>
  );
}
