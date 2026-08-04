import React from "react";

export default function Loader({ visible, progress }) {
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
