import React, { useState, useEffect } from "react";
import { LOGO } from "./assets/logo.js";
import heroSneaker from "./assets/hero-sneaker.svg";

function SneakerIcon({ accent = "#5c7a4a", style = "lowtop" }) {
  const uid = React.useId().replace(/[:]/g, "");
  const strokeProps = {
    stroke: "#232b1b",
    strokeWidth: 1.8,
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  return (
    <svg viewBox="0 0 260 160" width="100%" height="100%">
      <defs>
        <linearGradient id={`upper-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
          <stop offset="45%" stopColor="#f3f5ef" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#232b1b" stopOpacity="0.12" />
        </linearGradient>
        <linearGradient id={`sole-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3d4a30" />
          <stop offset="100%" stopColor="#1c2114" />
        </linearGradient>
        <radialGradient id={`shadow-${uid}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#000000" stopOpacity="0.16" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse cx="132" cy="140" rx="112" ry="10" fill={`url(#shadow-${uid})`} />

      {style === "hightop" ? (
        <>
          <path
            d="M96 46 C112 30 128 20 144 18 C160 16 170 26 168 40 C167 48 162 54 168 60"
            {...strokeProps}
          />
          <path
            d="M96 46 C112 30 128 20 144 18 C160 16 170 26 168 40 C167 48 162 54 168 60 L182 66 C204 72 226 80 232 98 C236 110 228 120 214 122 L44 122 C34 122 28 120 28 114 C28 94 42 82 60 76 L96 46 Z"
            fill={`url(#upper-${uid})`}
            stroke="#232b1b"
            strokeWidth="1.8"
          />
          <path d="M104 44 C114 52 118 62 116 76" {...strokeProps} strokeWidth="1.4" opacity="0.6" />
        </>
      ) : (
        <path
          d="M30 114 C30 96 44 84 62 80 L126 62 C142 57 152 48 162 36 C170 26 188 28 190 42 C191 50 188 58 196 64 C212 70 230 76 236 94 C240 106 232 118 218 120 L46 120 C36 120 30 118 30 114 Z"
          fill={`url(#upper-${uid})`}
          stroke="#232b1b"
          strokeWidth="1.8"
        />
      )}

      <path
        d={style === "hightop" ? "M60 76 C74 70 86 66 96 60" : "M62 80 C80 74 96 68 110 62"}
        {...strokeProps}
        strokeWidth="1.3"
        opacity="0.55"
      />
      <path
        d={style === "hightop" ? "M64 76 L96 58 M78 68 L108 50 M92 60 L118 44 M104 52 L128 38" : "M66 80 L100 60 M80 74 L112 52 M94 68 L122 46 M108 62 L132 40"}
        stroke={accent}
        strokeWidth="3.4"
        strokeLinecap="round"
        opacity="0.9"
      />
      {(style === "hightop"
        ? [[64,76],[78,68],[92,60],[104,52],[96,58],[108,50],[118,44],[128,38]]
        : [[66,80],[80,74],[94,68],[108,62],[100,60],[112,52],[122,46],[132,40]]
      ).map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="2.2" fill="#232b1b" opacity="0.7" />
      ))}

      <path
        d="M214 96 C224 100 232 106 232 114 L216 120 C214 112 212 104 214 96 Z"
        fill="#232b1b"
        opacity="0.12"
      />
      <path
        d="M28 114 L232 114 L232 128 C232 133 227 137 220 137 L42 137 C34 137 28 133 28 126 Z"
        fill={`url(#sole-${uid})`}
      />
      <path
        d="M24 134 L236 134 L236 144 C236 150 230 154 222 154 L40 154 C30 154 24 150 24 143 Z"
        fill="#141810"
      />
      <path
        d="M42 144 L42 152 M64 144 L64 152 M86 144 L86 152 M108 144 L108 152 M130 144 L130 152 M152 144 L152 152 M174 144 L174 152 M196 144 L196 152 M216 144 L216 152"
        stroke="#3d4a30"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path d="M60 128 L204 128" stroke={accent} strokeWidth="2" opacity="0.55" />
      <path
        d={style === "hightop" ? "M110 32 C124 26 138 22 150 22" : "M136 46 C150 40 162 34 170 28"}
        stroke="#ffffff"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
}

function OxfordIcon({ accent = "#5c7a4a" }) {
  const uid = React.useId().replace(/[:]/g, "");
  const strokeProps = {
    stroke: "#232b1b",
    strokeWidth: 1.8,
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  return (
    <svg viewBox="0 0 260 160" width="100%" height="100%">
      <defs>
        <linearGradient id={`leather-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5a4632" />
          <stop offset="55%" stopColor="#3c2f21" />
          <stop offset="100%" stopColor="#221a12" />
        </linearGradient>
        <linearGradient id={`sole2-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e8dcc4" />
          <stop offset="100%" stopColor="#c9b98f" />
        </linearGradient>
        <radialGradient id={`shadow2-${uid}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#000000" stopOpacity="0.16" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse cx="132" cy="140" rx="112" ry="10" fill={`url(#shadow2-${uid})`} />
      <path
        d="M34 112 C34 92 50 80 70 76 L118 66 C132 63 140 56 148 44 C154 34 172 34 176 46 C179 54 176 62 184 68 C202 74 222 80 228 96 C232 106 224 116 212 118 L48 118 C38 118 34 116 34 112 Z"
        fill={`url(#leather-${uid})`}
        stroke="#1a140d"
        strokeWidth="1.8"
      />
      <path d="M70 76 C86 71 100 66 112 60" {...strokeProps} strokeWidth="1.3" opacity="0.7" />
      {[74, 82, 90, 98, 106].map((x, i) => (
        <circle key={i} cx={x} cy={76 - i * 3.6} r="1.1" fill="#c9b98f" opacity="0.85" />
      ))}
      <path d="M148 44 C158 54 162 66 158 78" {...strokeProps} strokeWidth="1.3" opacity="0.5" />
      <path
        d="M118 66 L142 50 M104 71 L130 54 M90 76 L118 58"
        stroke={accent}
        strokeWidth="2.6"
        strokeLinecap="round"
        opacity="0.85"
      />
      {[[118,66],[142,50],[104,71],[130,54],[90,76],[118,58]].map(([cx,cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="2" fill="#1a140d" />
      ))}
      <path
        d="M32 112 L230 112 L230 122 C230 126 226 129 220 129 L44 129 C36 129 32 126 32 119 Z"
        fill="#1a140d"
        opacity="0.85"
      />
      <path
        d="M28 122 L234 122 L234 136 C234 143 227 148 218 148 L46 148 C36 148 28 143 28 134 Z"
        fill={`url(#sole2-${uid})`}
        stroke="#a8946a"
        strokeWidth="1"
      />
      <path d="M28 133 L234 133" stroke="#a8946a" strokeWidth="1.4" opacity="0.7" />
      <path
        d="M150 46 C160 40 170 36 178 36"
        stroke="#e9d9bd"
        strokeWidth="2.6"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
}

function ProductVisual({ product, className = "" }) {
  const [broken, setBroken] = useState(false);

  if (product.image && !broken) {
    return (
      <img
        src={product.image}
        alt={product.name}
        className={"product-photo " + className}
        onError={() => setBroken(true)}
        loading="lazy"
      />
    );
  }

  return product.category === "Formal" ? (
    <OxfordIcon accent={product.accent} />
  ) : (
    <SneakerIcon accent={product.accent} style={product.style} />
  );
}

/* -----------------------------------------------------------------
   PRODUCT PHOTOS
   Each `image` below is a free-to-use stock photo (Pexels license,
   no attribution required) standing in as a realistic placeholder —
   several are genuine photos of that exact model (the AF1 and
   Chuck 70), the rest are close visual matches since an exact stock
   shot wasn't available for every model/colorway.
   TO USE YOUR OWN PRODUCT PHOTOS: host the image anywhere (Cloudinary,
   Imgur, your own server, a Google Drive "anyone with the link" file,
   etc.) and paste that URL in here — that's the one thing that will
   make the shop show your actual pairs, in their actual condition
   and colorway, instead of a stand-in.
------------------------------------------------------------------*/
const PRODUCTS = [
  {
    id: "nb9060",
    name: "New Balance 9060",
    category: "Street",
    accent: "#7c9a63",
    style: "lowtop",
    image: "https://images.pexels.com/photos/20298286/pexels-photo-20298286.jpeg?auto=compress&cs=tinysrgb&w=800",
    price: "Price on request",
    desc: "A dad-shoe silhouette reworked for the current wave — chunky sole, layered mesh and suede paneling built for everyday rotation.",
  },
  {
    id: "adizeroevo",
    name: "Adidas Adizero EVO SL",
    category: "Street",
    accent: "#4c5f3d",
    style: "lowtop",
    image: "https://images.pexels.com/photos/12725051/pexels-photo-12725051.jpeg?auto=compress&cs=tinysrgb&w=800",
    price: "Price on request",
    desc: "Featherlight performance styling brought to the street. A racing-inspired upper with a foam midsole tuned for comfort and speed.",
  },
  {
    id: "chuck70",
    name: "Converse Chuck 70",
    category: "Street",
    accent: "#2f3b26",
    style: "hightop",
    image: "https://images.pexels.com/photos/3987281/pexels-photo-3987281.jpeg?auto=compress&cs=tinysrgb&w=800",
    price: "Price on request",
    desc: "The reissued original — heavier canvas, vintage tooling and a richer palette than the standard Chuck Taylor. A wardrobe staple.",
  },
  {
    id: "af1",
    name: "Nike Air Force 1",
    category: "Street",
    accent: "#5c7a4a",
    style: "lowtop",
    image: "https://images.pexels.com/photos/9853355/pexels-photo-9853355.jpeg?auto=compress&cs=tinysrgb&w=800",
    price: "Price on request",
    desc: "The icon. Full leather build, Air-Sole cushioning and a clean silhouette that pairs with anything from denim to tailoring.",
  },
  {
    id: "martens",
    name: "Dr. Martens Oxfords",
    category: "Formal",
    accent: "#2f3b26",
    style: "lowtop",
    image: "https://images.pexels.com/photos/15557052/pexels-photo-15557052.jpeg?auto=compress&cs=tinysrgb&w=800",
    price: "Price on request",
    desc: "Smooth leather Oxfords finished with the signature air-cushioned sole — durable formalwear with a rebellious edge.",
  },
  {
    id: "givenchy",
    name: "Givenchy Paris",
    category: "Formal",
    accent: "#4c5f3d",
    style: "lowtop",
    image: "https://images.pexels.com/photos/34279969/pexels-photo-34279969.jpeg?auto=compress&cs=tinysrgb&w=800",
    price: "Price on request",
    desc: "Understated luxury from the House of Givenchy — premium leather, a minimal branded sole unit and a tailored, formal-ready finish.",
  },
];

const WHATSAPP_NUMBER = "2340000000000"; // TODO: replace with your real WhatsApp number
const INSTAGRAM_HANDLE = "gunji.thesneakerhead";
function waLink(text) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

/* Loads Fraunces + Inter once, so the type treatment the CSS relies
   on actually renders instead of silently falling back to a system
   serif/sans. */
function useGoogleFonts() {
  useEffect(() => {
    if (document.getElementById("gunji-fonts")) return;
    const link = document.createElement("link");
    link.id = "gunji-fonts";
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap";
    document.head.appendChild(link);
  }, []);
}

function Loader({ visible, progress }) {
  return (
    <div id="loader" className={visible ? "" : "loader-hide"}>
      <svg className="sneaker-wrap" viewBox="0 0 200 110" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M15 78 C15 60, 30 55, 45 52 L95 40 C110 36, 118 30, 128 22 C134 18, 145 18, 148 28 C150 35, 148 44, 152 50 C165 55, 182 58, 188 68 C192 75, 188 82, 178 84 L28 84 C18 84, 15 81, 15 78 Z"
          fill="#7c9a63"
        />
        <path
          d="M15 78 C15 60, 30 55, 45 52 L95 40 C110 36, 118 30, 128 22 C134 18, 145 18, 148 28 C150 35, 148 44, 152 50 C165 55, 182 58, 188 68 C192 75, 188 82, 178 84 L28 84 C18 84, 15 81, 15 78 Z"
          stroke="#eef2e8"
          strokeWidth="2"
        />
        <path d="M20 84 L182 84 L182 92 C182 96, 178 98, 174 98 L28 98 C22 98, 20 95, 20 90 Z" fill="#2f3b26" />
        <path
          d="M50 55 L60 78 M65 51 L74 78 M80 47 L88 78 M95 43 L102 78"
          stroke="#2f3b26"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
      <div className="loader-track">
        <div className="loader-fill" style={{ width: `${progress}%` }} />
      </div>
      <div className="loader-word">Gunji The Sneakerhead</div>
    </div>
  );
}

function Header({ menuOpen, setMenuOpen }) {
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

function Hero() {
  return (
    <section className="hero-premium" id="home">
      <div className="hero-premium-content">
        <div className="hero-eyebrow">
          <span className="eyebrow-line"></span> Featured Drop
        </div>
        <h1 className="hero-title">
          <span className="title-block">Gunji The</span>
          <span className="title-block">Sneakerhead</span>
          <span className="title-block">edition.</span>
        </h1>
        <p className="hero-desc">
          Curated kicks for the city, the court, and the dress code — from rare Air Force 1 energy to polished formal finishes that still turn heads.
        </p>
        <div className="hero-actions">
          <a href="#shop" className="btn-solid">Explore the Collection</a>
          <a href="#trending" className="btn-text">View Latest Drops &rarr;</a>
        </div>
      </div>
      
      <div className="hero-premium-visual">
        <div className="visual-backdrop"></div>
        <img
          src="https://images.pexels.com/photos/9853355/pexels-photo-9853355.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Featured sneaker"
          className="visual-image"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = heroSneaker;
          }}
        />
        <div className="visual-tag">Street / Formal</div>
      </div>
    </section>
  );
}

function TopPicks({ onSelect }) {
  const [filter, setFilter] = useState("All");
  const [page, setPage] = useState(0);
  const filtered = filter === "All" ? PRODUCTS : PRODUCTS.filter((p) => p.category === filter);
  const perPage = 3;
  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
  const shown = filtered.slice(page * perPage, page * perPage + perPage);

  const next = () => setPage((page + 1) % totalPages);
  const prev = () => setPage((page - 1 + totalPages) % totalPages);

  useEffect(() => {
    setPage(0);
  }, [filter]);

  return (
    <section className="section" id="shop">
      <div className="section-top">
        <div>
          <h2>Top Picks</h2>
          <div className="filter-row" style={{ marginTop: 14 }}>
            {["All", "Street", "Formal"].map((f) => (
              <button
                key={f}
                className={"filter-pill" + (filter === f ? " active" : "")}
                onClick={() => setFilter(f)}
              >
                {f === "All" ? "All pairs" : f === "Street" ? "Streetwear" : "Formal"}
              </button>
            ))}
          </div>
        </div>
        {totalPages > 1 && (
          <div className="arrow-nav">
            <button className="arrow-btn" onClick={prev} aria-label="Previous">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button className="arrow-btn" onClick={next} aria-label="Next">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        )}
      </div>
      <div className="picks-grid">
        {shown.map((p) => (
          <div className="pick-card" key={p.id} onClick={() => onSelect(p)} role="button" tabIndex={0}
            onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") onSelect(p); }}>
            <div className="pick-media">
              <span className="pick-tag">{p.category === "Street" ? "Streetwear" : "Formal"}</span>
              <ProductVisual product={p} />
            </div>
            <div className="pick-info">
              <h3>{p.name}</h3>
              <div className="price">{p.price}</div>
            </div>
          </div>
        ))}
      </div>
      {totalPages > 1 && (
        <div className="progress-line">
          <div
            className="progress-fill"
            style={{ width: `${100 / totalPages}%`, marginLeft: `${page * (100 / totalPages)}%` }}
          />
        </div>
      )}
    </section>
  );
}

function Trending() {
  return (
    <section className="section" id="trending">
      <div className="section-top">
        <h2>Trending Now</h2>
      </div>
      <div className="trend-hero">
        <div className="noise" />
        <div className="trend-content">
          <div className="eyebrow">New from Gunji</div>
          <h3>The sneaker edit lands this week</h3>
          <p>Fresh pairs, clean colorways and polished formal-ready silhouettes dropped for the week ahead — all hand-picked to keep your rotation sharp.</p>
          <a href="#shop" className="btn-dark-sq">Shop</a>
        </div>
        <div className="trend-shoes">
          <img
            src="https://images.pexels.com/photos/3987281/pexels-photo-3987281.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Converse Chuck 70"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = heroSneaker;
            }}
          />
          <img
            src="https://images.pexels.com/photos/9853355/pexels-photo-9853355.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Nike Air Force 1"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = heroSneaker;
            }}
          />
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
          <div className="tile-caption">
            Summer Must-Haves:<br />Air Force 1
          </div>
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
          <div className="tile-caption">
            Restocked:<br />Converse Chuck 70
          </div>
        </div>
      </div>
    </section>
  );
}

function StylistCTA() {
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
          Send us a message and our team will help you pair the right sneaker or formal shoe to what you're building
          — size, style and budget included.
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

function About() {
  return (
    <div className="about-strip" id="about">
      <div className="about-inner">
        <div className="label">About Gunji</div>
        <p>
          Gunji The Sneakerhead is a sneaker-first footwear house built around one idea: your shoes should move with your week, not just your weekend. Streetwear staples like the Air Force 1 and Chuck 70 sit alongside sharp formal picks like Dr. Martens Oxfords and Givenchy Paris — every pair hand-picked, every fit checked before it ships.
        </p>
      </div>
    </div>
  );
}

function ProductDetail({ p, onClose }) {
  const [size, setSize] = useState(null);
  const sizes = [38, 39, 40, 41, 42, 43, 44];

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
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

function Footer() {
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
                <path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.65-.07-4.85s.02-3.58.07-4.85c.15-3.23 1.67-4.77 4.92-4.92 1.27-.06 1.65-.07 4.85-.07zM12 0C8.74 0 8.33.01 7.05.07 2.7.27.27 2.69.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.36 2.62 6.78 6.98 6.98 1.28.06 1.69.07 4.95.07s3.67-.01 4.95-.07c4.35-.2 6.78-2.62 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95C21.72 2.7 19.31.27 14.95.07 13.67.01 13.26 0 12 0zm0 5.84A6.16 6.16 0 1 0 12 18.16 6.16 6.16 0 0 0 12 5.84zm0 10.16A4 4 0 1 1 12 8a4 4 0 0 1 0 8zm6.4-10.4a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" />
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
export default function App() {
  useGoogleFonts();
  const [selected, setSelected] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [loaderVisible, setLoaderVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        const next = p + Math.random() * 18;
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoaderVisible(false), 250);
          return 100;
        }
        return next;
      });
    }, 180);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app-container">
      <style>{`
        :root {
          --olive-900: #2f3b26;
          --olive-800: #3a4a2f;
          --olive-700: #4c5f3d;
          --olive-600: #5c7a4a;
          --olive-500: #7c9a63;
          --olive-300: #a9c191;
          --olive-100: #eef2e8;
          --olive-50: #f6f8f3;
          --paper: #fbfbf8;
          --white: #ffffff;
          --ink: #1c2117;
          --line: rgba(28,33,23,0.12);
        }
        * { box-sizing: border-box; }
        html, body { margin: 0; padding: 0; scroll-behavior: smooth; }
        body {
          background: var(--paper);
          color: var(--ink);
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          -webkit-font-smoothing: antialiased;
        }
        h1, h2, h3 { font-family: 'Fraunces', 'Georgia', serif; letter-spacing: -0.01em; font-weight: 600; margin: 0; }
        a { text-decoration: none; color: inherit; }
        button { font-family: inherit; cursor: pointer; border: none; background: none; }
        ::selection { background: var(--olive-500); color: white; }

        a:focus-visible, button:focus-visible, [tabindex]:focus-visible {
          outline: 2px solid var(--olive-600);
          outline-offset: 2px;
          border-radius: 2px;
        }

        /* Loading Screen */
        #loader { position: fixed; inset: 0; background: var(--olive-900); display: flex; flex-direction: column; align-items: center; justify-content: center; z-index: 9999; transition: opacity .6s ease, visibility .6s ease; }
        #loader.loader-hide { opacity: 0; visibility: hidden; pointer-events: none; }
        .loader-track { width: 220px; height: 2px; background: rgba(255,255,255,0.15); position: relative; margin-top: 36px; border-radius: 2px; overflow: hidden; }
        .loader-fill { position: absolute; left: 0; top: 0; height: 100%; background: var(--olive-500); transition: width .2s linear; }
        .sneaker-wrap { width: 120px; height: 70px; position: relative; animation: bounce 1.1s cubic-bezier(.34,1.56,.64,1) infinite; }
        @keyframes bounce { 0%, 100% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-22px) rotate(8deg); } }
        .loader-word { color: var(--olive-100); font-family: 'Fraunces', 'Georgia', serif; font-size: 14px; letter-spacing: 0.3em; margin-top: 22px; text-transform: uppercase; opacity: 0.85; }

        /* Header */
        header.site { position: sticky; top: 0; z-index: 500; background: rgba(251,251,248,0.94); backdrop-filter: blur(8px); border-bottom: 1px solid var(--line); }
        .nav-inner { max-width: 1240px; margin: 0 auto; padding: 16px 20px; display: flex; align-items: center; justify-content: space-between; }
        @media(min-width: 480px){ .nav-inner { padding: 18px 32px; } }
        .brand img { height: 32px; width: auto; display: block; }
        @media(min-width: 480px){ .brand img { height: 38px; } }
        nav.links { display: none; gap: 30px; align-items: center; }
        @media(min-width: 900px){ nav.links { display: flex; } }
        nav.links a { font-size: 12px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--olive-900); position: relative; padding: 4px 0; }
        nav.links a::after { content: ''; position: absolute; left: 0; bottom: 0; width: 0; height: 2px; background: var(--olive-500); transition: width .25s ease; }
        nav.links a:hover::after { width: 100%; }
        .nav-right { display: flex; align-items: center; gap: 14px; }
        .icon-btn { width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; color: var(--olive-900); }
        .cta-pill { background: var(--olive-900); color: var(--white) !important; padding: 10px 20px; border-radius: 2px; font-size: 12px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; }
        .cta-pill:hover { background: var(--olive-700); }
        .desktop-only { display: none; }
        @media(min-width: 900px){ .desktop-only { display: inline-block; } }

        /* Mobile hamburger + menu */
        .hamburger { width: 40px; height: 40px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 5px; }
        @media(min-width: 900px){ .hamburger { display: none; } }
        .bar { width: 20px; height: 2px; background: var(--olive-900); transition: transform .25s ease, opacity .25s ease; }
        .bar1.open { transform: translateY(7px) rotate(45deg); }
        .bar2.open { opacity: 0; }
        .bar3.open { transform: translateY(-7px) rotate(-45deg); }
        .mobile-menu { max-height: 0; overflow: hidden; display: flex; flex-direction: column; background: var(--paper); border-top: 1px solid transparent; transition: max-height .3s ease, border-color .3s ease; }
        .mobile-menu.open { max-height: 320px; border-top-color: var(--line); }
        @media(min-width: 900px){ .mobile-menu { display: none; } }
        .mobile-menu a { padding: 16px 20px; font-size: 13px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--olive-900); border-bottom: 1px solid var(--line); }
        .mobile-cta { text-align: center; margin: 14px 20px 18px; border-bottom: none !important; }

        /* Hero Base - Clean & Minimalist */
/* Premium Hero Section - Full Width & Immersive */
.hero-premium {
  display: grid;
  grid-template-columns: 1fr;
  min-height: calc(100vh - 80px); /* Adapts to fill most of the screen */
  max-width: 1440px;
  margin: 0 auto;
  background: var(--paper); 
  overflow: hidden;
}

@media(min-width: 900px) {
  .hero-premium {
    grid-template-columns: 1.2fr 1fr;
    align-items: center;
  }
}

/* Left Side: Editorial Typography */
.hero-premium-content {
  padding: 56px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

@media(min-width: 900px) {
  .hero-premium-content {
    padding: 0 80px 0 10%;
  }
}

.hero-eyebrow {
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--olive-600);
  margin-bottom: 32px;
}

.eyebrow-line {
  width: 40px;
  height: 2px;
  background: var(--olive-600);
}

.hero-title {
  font-size: clamp(36px, 6vw, 64px);
  line-height: 1.1;
  color: var(--olive-900);
  margin: 0 0 24px 0;
  display: flex;
  flex-direction: column;
}

.title-block {
  display: block;
}

.hero-desc {
  font-size: 16px;
  line-height: 1.8;
  color: var(--olive-700);
  max-width: 480px;
  margin: 0 0 40px 0;
}

.hero-actions {
  display: flex;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;
}

.btn-solid {
  background: var(--olive-900);
  color: var(--white);
  padding: 16px 32px;
  border-radius: 2px;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  transition: all 0.3s ease;
}

.btn-solid:hover {
  background: var(--olive-700);
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(47, 59, 38, 0.15);
}

.btn-text {
  color: var(--olive-900);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  transition: color 0.3s ease;
}

.btn-text:hover {
  color: var(--olive-600);
}

/* Right Side: Asymmetrical Visual Presentation */
.hero-premium-visual {
  position: relative;
  padding: 0 24px 56px;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media(min-width: 900px) {
  .hero-premium-visual {
    padding: 80px 80px 80px 0;
    height: 100%;
  }
}

.visual-backdrop {
  position: absolute;
  top: 10%;
  right: 0;
  bottom: 0;
  left: 15%;
  background: var(--olive-50);
  border-radius: 4px 0 0 4px;
  z-index: 0;
}

@media(min-width: 900px) {
  .visual-backdrop {
    top: 0;
    bottom: 0;
  }
}

.visual-image {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 500px;
  aspect-ratio: 3/4;
  object-fit: cover;
  border-radius: 4px;
  box-shadow: -20px 20px 40px rgba(28, 33, 23, 0.08);
}

.visual-tag {
  position: absolute;
  z-index: 2;
  bottom: 80px;
  left: 10%;
  background: var(--white);
  color: var(--olive-900);
  padding: 14px 24px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  border-radius: 2px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.08);
}

@media(min-width: 900px) {
  .visual-tag {
    left: -40px; /* Forces the tag to overlap the image and whitespace dynamically */
    bottom: 120px;
  }
}

        /* Buttons */
        .btn-dark-sq { background: var(--olive-900); color: white; padding: 13px 22px; border-radius: 2px; font-size: 12px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; display: inline-block; transition: background .2s ease, transform .2s ease; }
        .btn-dark-sq:hover { background: var(--olive-700); transform: translateY(-2px); }
        .btn-outline-sq { border: 1px solid rgba(255,255,255,0.4); color: white; padding: 13px 22px; border-radius: 2px; font-size: 12px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; display: inline-block; text-align: center; }
        .btn-outline-sq:hover { background: rgba(255,255,255,0.1); }

        /* Section heads */
        .section { max-width: 1240px; margin: 0 auto; padding: 48px 16px; }
        @media(min-width: 480px){ .section { padding: 56px 20px; } }
        @media(min-width: 768px){ .section { padding: 80px 32px; } }
        .section-top { display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 28px; flex-wrap: wrap; gap: 14px; }
        @media(min-width: 480px){ .section-top { margin-bottom: 36px; align-items: center; } }
        .section-top h2 { font-size: clamp(20px, 4vw, 28px); color: var(--olive-900); }
        .arrow-nav { display: flex; gap: 8px; }
        .arrow-btn { width: 40px; height: 40px; border-radius: 999px; border: 1px solid var(--line); display: flex; align-items: center; justify-content: center; color: var(--olive-900); transition: all .2s ease; }
        .arrow-btn:hover { border-color: var(--olive-600); background: var(--olive-50); }

        .filter-row { display: flex; gap: 8px; margin-bottom: 8px; overflow-x: auto; padding-bottom: 4px; -webkit-overflow-scrolling: touch; }
        .filter-pill { padding: 8px 16px; border-radius: 999px; border: 1px solid var(--line); font-size: 11px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: var(--olive-900); background: var(--white); white-space: nowrap; }
        .filter-pill.active { background: var(--olive-900); color: white; border-color: var(--olive-900); }

        /* Top Picks grid */
        .picks-grid { display: grid; grid-template-columns: repeat(1, 1fr); gap: 22px; }
        @media(min-width: 500px){ .picks-grid { grid-template-columns: repeat(2, 1fr); } }
        @media(min-width: 760px){ .picks-grid { grid-template-columns: repeat(3, 1fr); gap: 28px; } }
        .pick-card { cursor: pointer; }
        .pick-media { background: var(--olive-50); border-radius: 4px; aspect-ratio: 1/0.85; display: flex; align-items: center; justify-content: center; position: relative; overflow: hidden; transition: background .25s ease; }
        .pick-card:hover .pick-media { background: var(--olive-100); }
        .pick-card:hover .pick-media svg { transform: scale(1.05) rotate(-2deg); }
        .pick-card:hover .product-photo { transform: scale(1.05); }
        .pick-media svg { transition: transform .3s ease; }
        .product-photo { width: 100%; height: 100%; object-fit: cover; transition: transform .3s ease; }
        .pick-tag { position: absolute; top: 14px; left: 14px; font-size: 10px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--olive-600); z-index: 2; background: rgba(255,255,255,0.85); padding: 3px 8px; border-radius: 999px; }
        .pick-info { margin-top: 14px; }
        .pick-info h3 { font-size: 14.5px; font-weight: 700; color: var(--olive-900); font-family: 'Inter', sans-serif; }
        .pick-info .price { font-size: 13px; color: var(--olive-600); margin-top: 4px; }

        .progress-line { height: 2px; background: var(--line); margin-top: 44px; border-radius: 2px; overflow: hidden; }
        .progress-fill { height: 100%; background: var(--olive-600); transition: all .3s ease; }

        /* Trending */
        .trend-hero { border-radius: 6px; overflow: hidden; position: relative; min-height: 280px; background: linear-gradient(120deg, var(--olive-700), var(--olive-900) 70%); display: flex; align-items: center; padding: 32px 22px; }
        @media(min-width: 480px){ .trend-hero { padding: 40px 24px; min-height: 320px; } }
        @media(min-width: 768px){ .trend-hero { padding: 56px; min-height: 340px; } }
        .trend-hero .noise { position: absolute; inset: 0; opacity: 0.5; background: radial-gradient(circle at 80% 30%, rgba(255,255,255,0.10), transparent 60%); }
        .trend-content { position: relative; z-index: 2; color: white; max-width: 340px; }
        .trend-content .eyebrow { font-size: 11px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: var(--olive-300); margin-bottom: 14px; }
        .trend-content h3 { font-size: clamp(21px, 5vw, 34px); color: white; }
        .trend-content p { font-size: 13px; color: rgba(255,255,255,0.75); margin-top: 12px; line-height: 1.6; }
        .trend-content .btn-dark-sq { margin-top: 22px; background: white; color: var(--olive-900); }
        .trend-content .btn-dark-sq:hover { background: var(--olive-100); }
        .trend-shoes { position: absolute; right: 2%; bottom: 0; display: none; gap: 14px; z-index: 1; opacity: 0.95; align-items: flex-end; }
        @media(min-width: 768px){ .trend-shoes { display: flex; right: 6%; } }
        .trend-shoes img { width: 170px; height: 140px; object-fit: cover; border-radius: 6px; transform: rotate(6deg); box-shadow: 0 20px 30px rgba(0,0,0,0.35); }
        .trend-shoes img:last-child { width: 190px; height: 150px; transform: rotate(-5deg) translateY(-8px); }

        .tiles { display: grid; grid-template-columns: 1fr; gap: 16px; margin-top: 16px; }
        @media(min-width: 480px){ .tiles { gap: 20px; margin-top: 20px; } }
        @media(min-width: 760px){ .tiles { grid-template-columns: 1fr 1fr; } }
        .tile { border-radius: 6px; overflow: hidden; position: relative; min-height: 180px; display: flex; align-items: flex-end; padding: 22px; }
        @media(min-width: 480px){ .tile { min-height: 220px; padding: 26px; } }
        .tile.a { background: linear-gradient(135deg, var(--olive-600), var(--olive-900)); }
        .tile.b { background: linear-gradient(135deg, #6b7d5a, var(--olive-800)); }
        .tile-photo { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; opacity: 0.55; mix-blend-mode: luminosity; }
        .tile-caption { position: relative; z-index: 2; color: white; font-family: 'Fraunces', 'Georgia', serif; font-size: 17px; line-height: 1.25; font-weight: 600; text-shadow: 0 2px 10px rgba(0,0,0,0.4); }
        @media(min-width: 480px){ .tile-caption { font-size: 19px; } }

        /* Stylist CTA */
        .stylist { display: grid; grid-template-columns: 1fr; border-radius: 6px; overflow: hidden; min-height: 320px; margin: 0 12px; }
        @media(min-width: 480px){ .stylist { margin: 0 16px; } }
        @media(min-width: 900px){ .stylist { grid-template-columns: 1fr 1fr; margin: 0 32px; min-height: 360px; } }
        .stylist-visual { background: var(--olive-100); display: flex; align-items: center; justify-content: center; position: relative; overflow: hidden; min-height: 220px; order: 1; }
        @media(min-width: 900px){ .stylist-visual { order: 0; } }
        .stylist-visual::before { content: ''; position: absolute; inset: 0; background: linear-gradient(60deg, var(--olive-500) 0%, transparent 45%); opacity: 0.25; z-index: 1; }
        .stylist-visual img { position: relative; width: 100%; height: 100%; object-fit: cover; }
        .stylist-copy { background: var(--olive-900); color: white; padding: 36px 22px; display: flex; flex-direction: column; justify-content: center; order: 0; }
        @media(min-width: 900px){ .stylist-copy { padding: 56px; order: 1; } }
        .stylist-copy .eyebrow { font-size: 11px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: var(--olive-300); margin-bottom: 16px; }
        .stylist-copy h2 { color: white; font-size: clamp(22px, 5vw, 36px); max-width: 420px; }
        .stylist-copy p { margin-top: 16px; font-size: 13.5px; line-height: 1.7; color: rgba(255,255,255,0.7); max-width: 400px; }
        .stylist-copy .actions { display: flex; gap: 12px; margin-top: 24px; flex-wrap: wrap; }

        /* About strip */
        .about-strip { border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); margin-top: 48px; }
        @media(min-width: 480px){ .about-strip { margin-top: 64px; } }
        .about-inner { max-width: 1240px; margin: 0 auto; padding: 48px 16px; display: grid; grid-template-columns: 1fr; gap: 20px; }
        @media(min-width: 480px){ .about-inner { padding: 64px 20px; } }
        @media(min-width: 800px){ .about-inner { grid-template-columns: 280px 1fr; padding: 64px 32px; } }
        .about-inner .label { font-size: 11px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: var(--olive-600); }
        .about-inner p { font-size: 14.5px; line-height: 1.8; color: var(--olive-700); max-width: 640px; margin: 0; }

        /* Overlay / Product Detail */
        .overlay { position: fixed; inset: 0; background: rgba(28,33,23,0.55); z-index: 800; display: flex; align-items: flex-end; justify-content: center; animation: fadeIn .25s ease; }
        @media(min-width: 860px){ .overlay { align-items: center; } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .detail-panel { background: var(--paper); width: 100%; max-width: 920px; max-height: 92vh; overflow-y: auto; border-radius: 20px 20px 0 0; animation: slideUp .3s ease; }
        @media(min-width: 860px){ .detail-panel { border-radius: 12px; } }
        @keyframes slideUp { from { transform: translateY(40px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        .detail-grid { display: grid; grid-template-columns: 1fr; gap: 0; }
        @media(min-width: 860px){ .detail-grid { grid-template-columns: 1fr 1fr; } }
        .detail-media { background: var(--olive-50); display: flex; align-items: center; justify-content: center; padding: 0; position: relative; min-height: 260px; overflow: hidden; }
        .detail-media .product-photo { width: 100%; height: 100%; object-fit: cover; border-radius: 0; }
        .detail-media svg { padding: 28px; }
        @media(min-width: 480px){ .detail-media svg { padding: 40px; } }
        .detail-close { position: absolute; top: 14px; right: 14px; width: 36px; height: 36px; border-radius: 999px; background: var(--white); display: flex; align-items: center; justify-content: center; font-size: 16px; color: var(--olive-900); box-shadow: 0 4px 12px rgba(0,0,0,0.1); z-index: 5; }
        .detail-info { padding: 24px; }
        @media(min-width: 480px){ .detail-info { padding: 32px; } }
        @media(min-width: 860px){ .detail-info { padding: 40px; } }
        .detail-info .cat { font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--olive-600); font-weight: 700; }
        .detail-info h2 { font-size: 22px; margin-top: 8px; color: var(--olive-900); }
        @media(min-width: 480px){ .detail-info h2 { font-size: 24px; } }
        .detail-info .price { font-size: 17px; margin-top: 8px; display: block; font-family: 'Inter', sans-serif; font-weight: 700; color: var(--olive-900); }
        .detail-info .desc { font-size: 13.5px; line-height: 1.7; color: var(--olive-700); margin-top: 14px; }
        .size-label { font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: var(--olive-900); margin-top: 22px; display: block; }
        .sizes { display: flex; gap: 8px; margin-top: 10px; flex-wrap: wrap; }
        .size-chip { width: 44px; height: 44px; border-radius: 999px; border: 1px solid var(--line); display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: 600; color: var(--olive-900); transition: all .2s ease; }
        .size-chip.active { background: var(--olive-900); color: white; border-color: var(--olive-900); }
        .size-note { font-size: 12px; color: var(--olive-600); margin-top: 10px; line-height: 1.5; }
        .detail-actions { display: flex; gap: 10px; margin-top: 24px; flex-wrap: wrap; }
        .btn-dark { background: var(--olive-900); color: white; padding: 14px 24px; border-radius: 2px; font-weight: 700; font-size: 12px; letter-spacing: 0.06em; text-transform: uppercase; flex: 1; text-align: center; min-width: 160px; }
        .btn-dark:hover { background: var(--olive-700); }
        .btn-ghost { border: 1px solid var(--line); padding: 14px 24px; border-radius: 2px; font-weight: 700; font-size: 12px; letter-spacing: 0.06em; text-transform: uppercase; color: var(--olive-900); display: block; text-align: center; width: 100%; }
        @media(min-width: 480px){ .btn-ghost { width: auto; flex: 1; min-width: 160px; } }
        .btn-ghost:hover { border-color: var(--olive-600); }

        /* Footer */
/* Footer Base */
.site-footer { 
  background: var(--olive-900); 
  color: rgba(255, 255, 255, 0.7); 
  padding: 56px 24px 32px; 
  font-family: 'Inter', sans-serif;
  text-align: left; /* Forces left alignment, fixing the mobile bug */
}

/* Main Grid Layout */
.footer-inner { 
  max-width: 1240px; 
  margin: 0 auto; 
  display: grid; 
  grid-template-columns: 1fr; 
  gap: 40px; 
}

@media(min-width: 768px) { 
  .footer-inner { 
    grid-template-columns: 2fr 1fr 1fr 1fr; 
    gap: 32px;
  } 
}

/* Brand Column */
.footer-brand-col {
  max-width: 100%;
}

.footer-brand {
  display: flex;
  justify-content: flex-start; /* Ensure logo aligns left */
}

.footer-brand img { 
  height: 36px; 
  filter: brightness(0) invert(1); 
  margin-bottom: 20px; 
  display: block;
}

.footer-desc {
  font-size: 14px;
  line-height: 1.7;
  margin: 0 0 24px 0;
  color: rgba(255, 255, 255, 0.7);
  max-width: 320px;
}

/* Social Buttons */
.social-row { 
  display: flex; 
  gap: 12px;
  justify-content: flex-start; /* Force icons to the left edge */
}

.social-row a { 
  width: 40px; 
  height: 40px; 
  border-radius: 50%; 
  border: 1px solid rgba(255, 255, 255, 0.15); 
  display: flex; 
  align-items: center; 
  justify-content: center; 
  color: var(--white); 
  transition: all 0.3s ease; 
}

.social-row a:hover { 
  border-color: var(--olive-500); 
  background: var(--olive-700);
  transform: translateY(-2px);
}

/* Navigation Columns */
.footer-links h4 { 
  color: var(--white); 
  font-size: 12px; 
  letter-spacing: 0.1em; 
  text-transform: uppercase; 
  margin: 0 0 16px 0; 
  font-weight: 700;
  text-align: left; /* Enforce left alignment */
}

.footer-links nav {
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start; /* Enforce left alignment */
}

.footer-links a { 
  font-size: 14px; 
  color: rgba(255, 255, 255, 0.7); 
  transition: color 0.2s ease; 
}

.footer-links a:hover { 
  color: var(--white); 
}

/* Footer Bottom (Copyright) */
.footer-bottom { 
  max-width: 1240px; 
  margin: 48px auto 0; 
  padding-top: 24px; 
  border-top: 1px solid rgba(255, 255, 255, 0.12); 
  font-size: 13px; 
  display: flex; 
  flex-direction: column;
  align-items: flex-start; /* Keep copyright left-aligned on mobile */
  gap: 12px;
  color: rgba(255, 255, 255, 0.5);
}

@media(min-width: 768px) { 
  .footer-bottom { 
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  } 
}
        @media (prefers-reduced-motion: reduce) {
          .sneaker-wrap { animation: none; }
          * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
        }
      `}</style>

      <Loader visible={loaderVisible} progress={progress} />

      {!loaderVisible && (
        <React.Fragment>
          <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <Hero />
          <TopPicks onSelect={setSelected} />
          <Trending />
          <StylistCTA />
          <About />
          <Footer />
          {selected && <ProductDetail p={selected} onClose={() => setSelected(null)} />}
        </React.Fragment>
      )}
    </div>
  );
}