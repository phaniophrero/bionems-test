import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listAnalytics } from "../../actions/analyticActions";
import Loader from "../../components/UI/Loader";
import Message from "../../components/UI/Message";

const AnalyticsDashboard = () => {
  const dispatch = useDispatch();

  const analyticList = useSelector((state) => state.analyticList);
  const { loading, error, analytics } = analyticList;

  console.log(analytics);

  useEffect(() => {
    dispatch(listAnalytics());
  }, [dispatch]);

  return loading ? (
    <Loader />
  ) : error ? (
    <Message type="error">{error}</Message>
  ) : (
    <div>{analytics}</div>
  );
};

export default AnalyticsDashboard;
