import React from "react";
import "./Product.css";

function Product() {
  return (
    <div className="Product">
      <div className="Product-info">
        <span className="Product-title">Apple iPad Air</span>
        <span className="Product-price">$1449</span>
        <span className="Product-rating">
          <p>🌟</p>
          <p>🌟</p>
          <p>🌟</p>
          <p>🌟</p>
          <p>🌟</p>
        </span>
      </div>
      <img src="https://i1194.photobucket.com/albums/aa361/lifshiz2000/ipad%20air%20space%20grey_zpsirf9phim.jpg" />
      <button> Add to Cart </button>
    </div>
  );
}

export default Product;
