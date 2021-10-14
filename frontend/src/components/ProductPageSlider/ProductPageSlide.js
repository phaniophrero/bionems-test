import React from "react";

const ProductPageSlide = ({ product }) => {
  return (
    <div className="product--page__slide" key={product._id}>
      <div className="product--page__slide--img">
        <img src={product.image} alt={product.name} />
      </div>
      <h2 className="product--page__slide--title">{product.name}</h2>
      <h3 className="product--page__slide--price">{product.price}</h3>
    </div>
  );
};

export default ProductPageSlide;
