import React, { useState } from "react";
import "./ProductVisual.css";
import { OxfordIcon, SneakerIcon } from "./Icons";

export default function ProductVisual({ product, className = "" }) {
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
