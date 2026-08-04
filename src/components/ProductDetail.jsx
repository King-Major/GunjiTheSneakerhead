import React, { useState, useEffect } from "react";
import "./ProductDetail.css";
import ProductVisual from "./ProductVisual";
import { waLink, INSTAGRAM_HANDLE } from "../utils/links";

export default function ProductDetail({ p, onClose }) {
  const [size, setSize] = useState(null);
  const sizes = [38, 39, 40, 41, 42, 43, 44];

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div className="overlay" onClick={onClose}>
      <div className="detail-panel" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true" aria-label={p.name}>
        <div className="detail-grid">
          <div className="detail-media">
            <button className="detail-close" onClick={onClose} aria-label="Close">
              ✕
            </button>
            <ProductVisual product={p} />
          </div>
          <div className="detail-info">
            <span className="cat">{p.category === "Street" ? "Streetwear" : "Formal"}</span>
            <h2>{p.name}</h2>
            <span className="price">{p.price}</span>
            <p className="desc">{p.desc}</p>
            <span className="size-label">Select size (EU)</span>
            <div className="sizes">
              {sizes.map((s) => (
                <button
                  key={s}
                  className={"size-chip" + (size === s ? " active" : "")}
                  onClick={() => setSize(s)}
                  aria-pressed={size === s}
                >
                  {s}
                </button>
              ))}
            </div>
            <p className="size-note">
              Not sure which size fits? Our team on WhatsApp will help you pick the right one before you order.
            </p>
            <div className="detail-actions">
              <a
                className="btn-dark"
                href={waLink(
                  `Hi Gunji, I'm interested in the ${p.name}${size ? ` in size ${size}` : ""}. Is it available?`
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                Buy on WhatsApp
              </a>
              <a
                className="btn-ghost"
                href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                See more on Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
