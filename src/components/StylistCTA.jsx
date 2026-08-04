import React from "react";
import "./StylistCTA.css";
import { waLink, INSTAGRAM_HANDLE } from "../utils/links";
import heroSneaker from "../assets/hero-sneaker.svg";

export default function StylistCTA() {
  return (
    <section className="stylist">
      <div className="stylist-visual">
        <img
          src="https://images.pexels.com/photos/15557052/pexels-photo-15557052.jpeg?auto=compress&cs=tinysrgb&w=900"
          alt="Styling pair"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = heroSneaker;
          }}
        />
      </div>
      <div className="stylist-copy">
        <div className="eyebrow">Personal styling</div>
        <h2>Not sure what fits your closet?</h2>
        <p>
          Send us a message and our team will help you pair the right sneaker or formal shoe to what you're building — size, style and budget included.
        </p>
        <div className="actions">
          <a
            className="btn-dark-sq"
            href={waLink("Hi Gunji, I'd like some styling help.")}
            target="_blank"
            rel="noopener noreferrer"
          >
            Talk to a stylist
          </a>
          <a
            className="btn-outline-sq"
            href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            See full catalog
          </a>
        </div>
      </div>
    </section>
  );
}
