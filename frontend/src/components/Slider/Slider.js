import React, { Fragment, useState, useEffect, useRef } from "react";
import Slide from "./Slide";
// import Slide2 from "./Slide2";

import sliderData from "../../data/sliderData";
const slides = sliderData;

const delay = 6000;

const Slider = () => {
  const [index, setIndex] = useState(0);
  const [updateRef, setUpdateRef] = useState(false);
  const timeoutRef = useRef(null);
  const sliderWidthRef = useRef();

  const sliderWidth = sliderWidthRef.current
    ? sliderWidthRef.current.offsetWidth
    : 0;

  useEffect(() => {
    setUpdateRef(true);
  }, []);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <Fragment>
      <div className="slider--container">
        <div
          className="slider"
          style={{
            transform: `translateX(-${index * sliderWidth + "px"})`,
            transition: "0.4s ease all",
          }}
          ref={sliderWidthRef}
        >
          {slides.map((item) => (
            <div key={item.id} className="slide">
              <Slide
                keyId={item.id}
                title={item.title}
                price={item.price}
                image={item.image}
                subtitle={item.subtitle}
                menuTitle={item.menuTitle}
                menuTitleItem1={item.menuTitleItem1}
                menuTitleItem2={item.menuTitleItem2}
                menuTitleItem3={item.menuTitleItem3}
                menuTitleItem4={item.menuTitleItem4}
                cName={item.cName}
                cNameTitle={item.cNameTitle}
                cNameImage={item.cNameImage}
                cNameMenuList={item.cNameMenuList}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="slider--dots">
        {slides.map((dot, idx) => (
          <span
            key={idx}
            className={`dot ${index === idx ? "active" : ""}`}
            onClick={() => setIndex(idx)}
          ></span>
        ))}
      </div>
    </Fragment>
  );
};

export default Slider;
