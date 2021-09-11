import React from "react";

const ReviewProgressLine = (props) => {
  let barFillWidth = "0%";

  if (props.maxValue > 0) {
    barFillWidth = Math.round((props.value / props.maxValue) * 80) + "%";
  }
  //   console.log(Math.round((props.value / props.maxValue) * 80));

  return (
    <div className="reviews--calculator__chart-line">
      <div className="reviews--calculator__chart-line-label">{props.label}</div>
      <div className="reviews--calculator__chart-line-inner">
        <div
          className="reviews--calculator__chart-line-fill"
          style={{ width: barFillWidth, backgroundColor: props.bgColor }}
        ></div>
      </div>

      <div className="reviews--calculator__chart-line-label">
        {barFillWidth}
      </div>
    </div>
  );
};

export default ReviewProgressLine;
