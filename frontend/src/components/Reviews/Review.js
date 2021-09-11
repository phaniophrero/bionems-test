import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import arrowDown from "../../images/arrow-down-sign-to-navigate.svg";
import star from "../../images/Star.svg";

const Review = ({ product }) => {
  return (
    <div className="product--ratings">
      <div className="product--ratings__stars">
        <span className="product--ratings__star">
          <img src={star} alt={star} />
        </span>
        <span className="product--ratings__star">
          <img src={star} alt={star} />
        </span>
        <span className="product--ratings__star">
          <img src={star} alt={star} />
        </span>
        <span className="product--ratings__star">
          <img src={star} alt={star} />
        </span>
        <span className="product--ratings__star">
          <img src={star} alt={star} />
        </span>

        <button className="product--ratings__icon">
          <img src={arrowDown} alt={arrowDown} />
        </button>
        <h3 className="product--ratings__score">
          {product.rating} stars 4.80(444)
        </h3>
      </div>
      <span className="green--line"></span>
      <div className="product--ratings__reviews">
        <h3 className="product--ratings__review--user-name">Jim Smith</h3>
        <div className="product--ratings__review--user-stars">
          <span className="product--ratings__star">
            <img src={star} alt={star} />
          </span>
          <span className="product--ratings__star">
            <img src={star} alt={star} />
          </span>
          <span className="product--ratings__star">
            <img src={star} alt={star} />
          </span>
          <span className="product--ratings__star">
            <img src={star} alt={star} />
          </span>
          <span className="product--ratings__star">
            <img src={star} alt={star} />
          </span>
          <h3 className="product--ratings__review--date">20.08.2021</h3>
        </div>
        {/* <h3 className="product--ratings__review--title">Title review bune</h3> */}
        <p className="product--ratings__review--text">
          Gustoase ipsum dolor sit amet consectetur, adipisicing elit.
        </p>
      </div>
      <span className="green--line"></span>
      <button className="product--ratings__see-more">See more</button>
    </div>
  );
};

export default Review;
