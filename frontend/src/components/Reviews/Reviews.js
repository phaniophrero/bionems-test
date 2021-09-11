import React, { useEffect } from "react";
import ReviewProgressLine from "./ReviewProgressLine";
import star from "../../images/Star.svg";

const Reviews = (props) => {
  const dataLineValues = props.dataLines.map((dataLine) => dataLine.value);
  const totalMax = Math.max(...dataLineValues);

  return (
    <div className="reviews--container">
      <div className="reviews--calculator">
        <div className="reviews--calculator__note">
          <h2 className="reviews--calculator__review-result">4.80</h2>
          <div className="reviews--calculator__stars">
            <span className="reviews--calculator__star">
              <img src={star} alt={star} />
            </span>
            <span className="reviews--calculator__star">
              <img src={star} alt={star} />
            </span>
            <span className="reviews--calculator__star">
              <img src={star} alt={star} />
            </span>
            <span className="reviews--calculator__star">
              <img src={star} alt={star} />
            </span>
            <span className="reviews--calculator__star">
              <img src={star} alt={star} />
            </span>
          </div>
          <h4 className="reviews--calculator__count-reviews">1444 recenzii</h4>
        </div>
        <div className="reviews--calculator__progress-line--wrapper">
          {props.dataLines.map((dataLine) => (
            <ReviewProgressLine
              key={dataLine.label}
              value={dataLine.value}
              maxValue={totalMax}
              label={dataLine.label}
              bgColor={dataLine.bgColor}
            />
          ))}
        </div>
      </div>
      <span className="green-line"></span>
    </div>
  );
};

export default Reviews;
