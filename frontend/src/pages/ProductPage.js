import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  listProducts,
  listProductDetails,
  createProductReview,
} from "../actions/productActions";
import { PRODUCT_CREATE_REVIEW_RESET } from "../constants/productConstants";
// Icons
import check from "../images/check.svg";
import Review from "../components/Reviews/Review";
import FormReview from "../components/Reviews/FormReview";
import ProductPageSlider from "../components/ProductPageSlider/ProductPageSlider";
import Reviews from "../components/Reviews/Reviews";
import Loader from "../components/UI/Loader";
import Message from "../components/UI/Message";

const ProductPage = ({ match }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const productReviewCreate = useSelector((state) => state.productReviewCreate);
  const {
    loading: loadingProductReview,
    error: errorProductReview,
    success: successProductReview,
  } = productReviewCreate;

  const productList = useSelector((state) => state.productList);
  const { products } = productList;

  const chartDataLines = [
    { label: "5 stars", value: 80, bgColor: "#3FCE61" },
    { label: "4 stars", value: 45, bgColor: "#A6D594" },
    { label: "3 stars", value: 20, bgColor: "#B2B95C" },
    { label: "2 stars", value: 10, bgColor: "#D9B155" },
    { label: "1 stars", value: 2, bgColor: "#CC8A51" },
  ];

  const slides = products.filter((item) => item.category === "nem");

  useEffect(() => {
    if (successProductReview) {
      setRating(0);
      setComment("");
      dispatch({ type: PRODUCT_CREATE_REVIEW_RESET });
    }

    dispatch(listProductDetails(match.params.id));
    dispatch(listProducts());
  }, [dispatch, match, successProductReview]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      createProductReview(match.params.id, {
        rating,
        comment,
      })
    );
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message type="error">{error}</Message>
      ) : (
        <div>
          <div className="goback--wrapper">
            <Link className="goback--link" to="/">
              Go back
            </Link>
          </div>
          <div className="product--container">
            <div className="product--wrapper">
              <div className="product--image__wrapper">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product--details">
                <h1 className="product--title">{product.name}</h1>
                <h1 className="product--title2">ESSAYEZ MAINTENANT</h1>
                <ul className="product--ingredient__list">
                  <li className="product--ingredient__item">
                    <img src={check} alt={check} /> Ingrediente bobun au poulet
                  </li>
                  <li className="product--ingredient__item">
                    <img src={check} alt={check} /> Ingrediente bobun au poulet
                  </li>
                  <li className="product--ingredient__item">
                    <img src={check} alt={check} /> Ingrediente bobun au poulet
                  </li>
                  <li className="product--ingredient__item">
                    <img src={check} alt={check} /> Ingrediente bobun au poulet
                  </li>
                </ul>

                <h3 className="product--price">{product.price} €</h3>
              </div>
            </div>
            <div className="product--info">
              {/* <Review /> */}
              {/* Lucram la review-uri dinamice din DB */}
              <div className="product--reviews">
                {product.reviews.length === 0 && <Message>No Reviews</Message>}
                <h3 className="product--reviews__title">
                  3.5 ({product.reviews.length})
                </h3>
                <div className="product--reviews__container">
                  {product.reviews.map((review) => (
                    <div className="product--reviews__wrapper" key={review._id}>
                      <div className="product--review">
                        <h3 className="product--review__name">
                          <strong>{review.name}</strong>
                        </h3>
                        <div className="product--review__stars-date">
                          <Review value={review.rating} />
                          <p className="product--review__date">
                            {review.createdAt.substring(0, 10)}
                          </p>
                        </div>
                        <p className="product--review__comment">
                          {review.comment}
                        </p>
                      </div>
                      {/* de continuat ep 75 */}
                    </div>
                  ))}
                  {/* <div>
                    <h4>Write a review</h4>
                  </div> */}
                </div>
              </div>

              <div className="description">
                <h2 className="description--title">Description</h2>
                <p className="description--text">
                  {product.description}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                  sequi odio deserunt enim, earum dolorem assumenda, molestiae
                  fugiat voluptates doloribus perferendis maxime laborum beatae.
                  Explicabo fugiat dolorum sit itaque aperiam. Voluptas fugiat
                  ullam nisi ipsam modi quidem explicabo.
                </p>
              </div>
            </div>
          </div>
          <ProductPageSlider slides={products} />
          {userInfo ? (
            // <FormReview />
            <div className="create--review">
              <div className="product--create-review__heading">
                <h4 className="product--create-review__title">
                  Write a review
                </h4>
                {loadingProductReview && <Loader />}
                {successProductReview && (
                  <Message type="success">Review Submitted</Message>
                )}
                {errorProductReview && (
                  <Message type="error">{errorProductReview}</Message>
                )}
              </div>
              <form
                className="product--create-review__form"
                onSubmit={submitHandler}
              >
                <div className="product--create-review__select-wrapper">
                  <label
                    className="product--create-review__label"
                    htmlFor="rating"
                  >
                    Rating
                  </label>
                  <select
                    className="product--create-review__select"
                    name="rating"
                    id="rating"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                  >
                    <option className="product--create-review__option" value="">
                      Select...
                    </option>
                    <option
                      className="product--create-review__option"
                      value="1"
                    >
                      1 - Poor
                    </option>
                    <option
                      className="product--create-review__option"
                      value="2"
                    >
                      2 - Fair
                    </option>
                    <option
                      className="product--create-review__option"
                      value="3"
                    >
                      3 - Good
                    </option>
                    <option
                      className="product--create-review__option"
                      value="4"
                    >
                      4 - Very Good
                    </option>
                    <option
                      className="product--create-review__option"
                      value="5"
                    >
                      5 - Excelent
                    </option>
                  </select>
                </div>
                <div className="product--create-review__comment">
                  <label
                    className="product--create-review__label"
                    htmlFor="comment"
                  >
                    Review
                  </label>
                  <textarea
                    className="product--create-review__textarea"
                    name="comment"
                    id="comment"
                    cols="30"
                    rows="6"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  ></textarea>
                </div>
                <div className="product--create-review__button-wrapper">
                  <button
                    className="product--create-review__button"
                    disabled={loadingProductReview}
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <Message>
              Please <Link to="login">login</Link> to write a review
            </Message>
          )}
          <Reviews dataLines={chartDataLines} />
        </div>
      )}
    </>
  );
};

export default ProductPage;
