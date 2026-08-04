import React from "react";
import "./Trending.css";
import heroSneaker from "../assets/hero-sneaker.svg";

export default function Trending() {
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
          <p>
            Fresh pairs, clean colorways and polished formal-ready silhouettes dropped for the week ahead — all hand-picked to keep your rotation sharp.
          </p>
          <a href="#shop" className="btn-dark-sq">
            Shop
          </a>
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
