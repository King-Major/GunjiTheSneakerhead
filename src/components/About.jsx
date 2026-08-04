import "./About.css";

export default function About() {
  return (
    <div className="about-strip" id="about">
      <div className="noise" />
      <span className="about-ghost" aria-hidden="true">05</span>

      <div className="about-inner">
        <div className="about-left">
          <div className="label">
            <span className="about-code">REF.005</span>
            About Gunji
          </div>
          <h1>Gunji The Sneakerhead</h1>
          <span className="about-line" aria-hidden="true"></span>
        </div>

        <div className="about-right">
          <p>
            A sneaker-first footwear house built around one idea: your shoes
            should move with your week, not just your weekend. Streetwear
            staples like the Air Force 1 and Chuck 70 sit alongside sharp
            formal picks like Dr. Martens Oxfords and Givenchy Paris — every
            pair hand-picked, every fit checked before it ships.
          </p>

          <div className="about-stats">
            <span className="about-stat"><strong>500+</strong> Pairs curated</span>
            <span className="about-stat"><strong>100%</strong> Verified fit</span>
            <span className="about-stat"><strong>2</strong> Styles, one house</span>
          </div>
        </div>
      </div>
    </div>
  );
}