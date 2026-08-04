import "./Trending.css";
import heroSneaker from "../assets/hero-sneaker.svg";

export default function Trending() {
  return (
    <section className="section" id="trending">
      <div className="section-top">
        <div>
          <div className="section-eyebrow">
            <span className="eyebrow-code">REF.003</span>
            <span className="eyebrow-ticks" aria-hidden="true">
              {Array.from({ length: 10 }).map((_, i) => (
                <span key={i} />
              ))}
            </span>
            This week
          </div>
          <h2>Trending Now</h2>
        </div>
      </div>

      <div className="trend-hero">
        <span className="trend-ghost" aria-hidden="true">03</span>
        <div className="noise" />

        <div className="trend-content">
          <div className="eyebrow">New from Gunji</div>
          <h3>The sneaker edit lands this week</h3>
          <p>
            Fresh pairs, clean colorways and polished formal-ready silhouettes dropped for the week ahead — all hand-picked to keep your rotation sharp.
          </p>
          <a href="#shop" className="btn-dark-sq">
            Shop
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </a>
        </div>

        <div className="trend-shoes">
          <div className="trend-shoe-frame">
            <img
              src="https://images.pexels.com/photos/3987281/pexels-photo-3987281.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Converse Chuck 70"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = heroSneaker;
              }}
            />
          </div>
          <div className="trend-shoe-frame trend-shoe-frame--front">
            <img
              src="https://images.pexels.com/photos/9853355/pexels-photo-9853355.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Nike Air Force 1"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = heroSneaker;
              }}
            />
            <span className="trend-tag">
              <span className="trend-tag-hole"></span>
              New
            </span>
          </div>
        </div>
      </div>

      <div className="tiles">
        <div className="tile a">
          <img
            className="tile-photo"
            src="https://images.pexels.com/photos/9853355/pexels-photo-9853355.jpeg?auto=compress&cs=tinysrgb&w=700"
            alt="Nike Air Force 1"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = heroSneaker;
            }}
          />
          <span className="tile-index">01</span>
          <span className="bracket bracket-tl" aria-hidden="true"></span>
          <span className="bracket bracket-br" aria-hidden="true"></span>
          <div className="tile-caption">
            Summer Must-Haves:<br />Air Force 1
          </div>
          <span className="tile-reveal">
            Shop the drop
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </span>
        </div>

        <div className="tile b">
          <img
            className="tile-photo"
            src="https://images.pexels.com/photos/3987281/pexels-photo-3987281.jpeg?auto=compress&cs=tinysrgb&w=700"
            alt="Converse Chuck 70"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = heroSneaker;
            }}
          />
          <span className="tile-index">02</span>
          <span className="bracket bracket-tl" aria-hidden="true"></span>
          <span className="bracket bracket-br" aria-hidden="true"></span>
          <div className="tile-caption">
            Restocked:<br />Converse Chuck 70
          </div>
          <span className="tile-reveal">
            Shop the drop
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </span>
        </div>
      </div>
    </section>
  );
}