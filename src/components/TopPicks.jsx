import { useState, useEffect } from "react";
import "./TopPicks.css";
import ProductVisual from "./ProductVisual";
import { PRODUCTS } from "../data/products";

export default function TopPicks({ onSelect }) {
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
          <div className="section-eyebrow">
            <span className="eyebrow-code">REF.002</span>
            <span className="eyebrow-ticks" aria-hidden="true">
              {Array.from({ length: 10 }).map((_, i) => (
                <span key={i} />
              ))}
            </span>
            Catalog
          </div>
          <h2>Top Picks</h2>
          <div className="filter-row">
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
            <span className="arrow-count">
              {String(page + 1).padStart(2, "0")} / {String(totalPages).padStart(2, "0")}
            </span>
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
        {shown.map((p, i) => (
          <div
            className="pick-card"
            key={p.id}
            style={{ animationDelay: `${i * 0.08}s` }}
            onClick={() => onSelect(p)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") onSelect(p);
            }}
          >
            <div className="pick-media">
              <span className="bracket bracket-tl" aria-hidden="true"></span>
              <span className="bracket bracket-tr" aria-hidden="true"></span>
              <span className="bracket bracket-bl" aria-hidden="true"></span>
              <span className="bracket bracket-br" aria-hidden="true"></span>

              <span className="pick-index">{String(page * perPage + i + 1).padStart(2, "0")}</span>
              <span className="pick-tag">{p.category === "Street" ? "Streetwear" : "Formal"}</span>

              <ProductVisual product={p} />

              <span className="pick-reveal">
                View details
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </span>
            </div>
            <div className="pick-info">
              <div className="pick-info-row">
                <h3>{p.name}</h3>
                <span className="pick-arrow" aria-hidden="true">&rarr;</span>
              </div>
              <div className="price">{p.price}</div>
            </div>
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="progress-track">
          {Array.from({ length: totalPages }).map((_, i) => (
            <span
              key={i}
              className={"progress-seg" + (i === page ? " active" : "")}
              onClick={() => setPage(i)}
            />
          ))}
        </div>
      )}
    </section>
  );
}