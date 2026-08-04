import "./StylistCTA.css";
import { waLink, INSTAGRAM_HANDLE } from "../utils/links";
import heroSneaker from "../assets/hero-sneaker.svg";

export default function StylistCTA() {
  return (
    <section className="section stylist-section" id="stylist">
      <div className="section-top">
        <div>
          <div className="section-eyebrow">
            <span className="eyebrow-code">REF.004</span>
            <span className="eyebrow-ticks" aria-hidden="true">
              {Array.from({ length: 10 }).map((_, i) => (
                <span key={i} />
              ))}
            </span>
            Styling
          </div>
          <h2>Get The Look</h2>
        </div>
      </div>

      <div className="stylist">
        <div className="stylist-visual">
          <img
            src="https://images.pexels.com/photos/15557052/pexels-photo-15557052.jpeg?auto=compress&cs=tinysrgb&w=900"
            alt="Styling pair"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = heroSneaker;
            }}
          />
          <span className="stylist-bracket stylist-bracket-tl" aria-hidden="true"></span>
          <span className="stylist-bracket stylist-bracket-br" aria-hidden="true"></span>
          <span className="stylist-tag">
            <span className="stylist-tag-hole"></span>
            1:1 Styling
          </span>
        </div>

        <div className="stylist-copy">
          <span className="stylist-ghost" aria-hidden="true">04</span>
          <div className="noise" />

          <div className="eyebrow">Personal styling</div>
          <h2>Not sure what fits your closet?</h2>
          <p>
            Send us a message and our team will help you pair the right sneaker or formal shoe to match your style, size and budget included.
          </p>
          <div className="actions">
            <a
              className="btn-dark-sq"
              href={waLink("Hi Gunji, I'd like some styling help.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              Talk to a stylist
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </a>

            <a
              className="btn-outline-sq"
              href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              View full catalog
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}