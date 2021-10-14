import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listReviews } from "../../actions/reviewActions";

const ReviewsDashboard = () => {
  const dispatch = useDispatch();

  const reviewList = useSelector((state) => state.reviewList);
  const { loading, error, reviews } = reviewList;

  console.log(reviews);

  useEffect(() => {
    dispatch(listReviews());
  }, [dispatch]);

  return <div>{reviews.length}</div>;
};

export default ReviewsDashboard;
