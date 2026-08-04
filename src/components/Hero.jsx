import "./Hero.css";
import heroSneaker from "../assets/hero-sneaker.svg";

export default function Hero() {
  return (
    <section className="hero-premium" id="home">
      <span className="hero-ghost" aria-hidden="true">SNEAKERHEAD</span>
      <span className="hero-ribbon" aria-hidden="true">Featured</span>

      <div className="hero-premium-main">
        <div className="hero-premium-content">
          <div className="hero-eyebrow">
            <span className="eyebrow-code">REF.001</span>
            <span className="eyebrow-ticks" aria-hidden="true">
              {Array.from({ length: 14 }).map((_, i) => (
                <span key={i} />
              ))}
            </span>
            Featured Drop
          </div>

          <h1 className="hero-title">
            <span className="title-block">Gunji The</span>
            <span className="title-block title-block--outline">Sneakerhead</span>
            <span className="title-block">edition.</span>
          </h1>

          <p className="hero-desc">
            Curated kicks for the city, the court, and the dress code — from
            rare Air Force 1 energy to polished formal finishes that still
            turn heads.
          </p>

          <div className="hero-actions">
            <a href="#shop" className="btn-solid">Explore the Collection</a>
            <a href="#trending" className="btn-text">View Latest Drops &rarr;</a>
          </div>

          <ul className="hero-stamps">
            <li>Street</li>
            <li>Court</li>
            <li>Formal</li>
          </ul>
        </div>

        <div className="hero-premium-visual">
          <div className="visual-backdrop"></div>

          <div className="visual-frame">
            <span className="bracket bracket-tl" aria-hidden="true"></span>
            <span className="bracket bracket-tr" aria-hidden="true"></span>
            <span className="bracket bracket-bl" aria-hidden="true"></span>
            <span className="bracket bracket-br" aria-hidden="true"></span>
            <img
              src="https://images.pexels.com/photos/9853355/pexels-photo-9853355.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Featured sneaker"
              className="visual-image"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = heroSneaker;
              }}
            />
          </div>

          <div className="visual-tag">
            <span className="visual-tag-hole"></span>
            <span className="visual-tag-label">Street / Formal</span>
            <span className="visual-tag-sub">No. 001 — Authentic</span>
          </div>

          <div className="visual-barcode">
            <span className="barcode-bars" aria-hidden="true"></span>
            <span className="barcode-text">NO. 001</span>
          </div>
        </div>
      </div>

      <div className="hero-marquee">
        <div className="hero-marquee-track">
          <span>Street ✦ Court ✦ Formal ✦ Street ✦ Court ✦ Formal ✦ Street ✦ Court ✦ Formal ✦&nbsp;</span>
          <span aria-hidden="true">Street ✦ Court ✦ Formal ✦ Street ✦ Court ✦ Formal ✦ Street ✦ Court ✦ Formal ✦&nbsp;</span>
        </div>
      </div>
    </section>
  );
}