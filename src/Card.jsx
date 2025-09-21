import React from "react";

export default function Card({ product }) {
  return (
    <div className="product-card">
      <div style={{ position: "relative" }}>
        <img src={product.image} alt={product.name} />
        <span className="tag">{product.tag}</span>
      </div>
      <div className="info">
        <h3>{product.name}</h3>
        <div className="price">
          <span className="new-price">${product.price}</span>
          <span className="old-price">${product.oldPrice}</span>
        </div>
      </div>
    </div>
  );
}
