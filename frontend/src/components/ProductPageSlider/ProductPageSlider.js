import React, { useState, useEffect, useRef } from "react";
import ProductPageSlide from "./ProductPageSlide";
import Button from "../UI/Button";
import arrowLeft from "../../images/arrowhead-thin-outline-to-the-left.svg";
import arrowRight from "../../images/arrowhead-thin-outline-to-the-left-1.svg";

const ProductPageSlider = ({ slides }) => {
  const [index, setIndex] = useState(0);
  //   console.log(slides);

  const prevClickHandler = () => {
    console.log(index);
    index === 0 ? setIndex(-100 * (slides.length - 1)) : setIndex(index + 100);
    // setIndex(index + 100);
  };

  const nextClickHandler = () => {
    console.log(index);
    index === -100 * (slides.length - 1) ? setIndex(0) : setIndex(index - 100);
    // setIndex(index - 100);
  };

  return (
    <div className="product--page__slider--container">
      <Button
        className="product--page__slider--btn product--page__slider--btn-left"
        onClick={prevClickHandler}
      >
        <img src={arrowLeft} alt={arrowLeft} />
      </Button>
      <div
        className="product--page__slider"
        style={{ transform: `translateX(${index}%)` }}
        // style={{
        //   transform: `translateX(${index}%)`,
        //   transition: "0.4s ease all",
        // }}
      >
        {slides.map((item) => (
          <ProductPageSlide item={item} />
        ))}
      </div>
      <Button
        className="product--page__slider--btn product--page__slider--btn-right"
        onClick={nextClickHandler}
      >
        <img src={arrowRight} alt={arrowRight} />
      </Button>
    </div>
  );
};

export default ProductPageSlider;
