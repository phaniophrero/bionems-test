import React from "react";

const ProductPageSlide = (item) => {
  return (
    <div className="product--page__slide" key={item.item._id}>
      <div className="product--page__slide--img">
        <img src={item.item.image} alt={item.item.name} />
      </div>
      <h2 className="product--page__slide--title">{item.item.name}</h2>
      <h3 className="product--page__slide--price">{item.item.price}</h3>
    </div>
  );
};

export default ProductPageSlide;
