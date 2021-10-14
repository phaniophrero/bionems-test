import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CardDashboard from "../../components/Dashboard/Card/CardDashboard";
import NavbarDashboard from "../../components/Dashboard/Navbar/NavbarDashboard";
import { listProducts } from "../../actions/productActions";
import { listUsers } from "../../actions/userActions";
import { listReviews } from "../../actions/reviewActions";
import { listAnalytics } from "../../actions/analyticActions";
import Message from "../../components/UI/Message";
import Loader from "../../components/UI/Loader";
// import { useGA4React } from "ga-4-react";

const HomeDashboard = ({ history, location }) => {
  const dispatch = useDispatch();

  // let history = useHistory();

  const redirect = location.search ? location.search.split("=")[1] : "/login";

  const productList = useSelector((state) => state.productList);
  const {
    loading: loadingProducts,
    error: errorProducts,
    products,
  } = productList;

  const userList = useSelector((state) => state.userList);
  const { loading: loadingUsers, error: errorUsers, users } = userList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const reviewList = useSelector((state) => state.reviewList);
  const { loading: loadingReviews, error: errorReviews, reviews } = reviewList;

  const analyticList = useSelector((state) => state.analyticList);
  const {
    loading: loadingAnalytics,
    error: errorAnalytics,
    analytics,
  } = analyticList;

  console.log(analytics);

  useEffect(() => {
    if (!userInfo) {
      history.push(redirect);
    } else {
      dispatch(listProducts());
      dispatch(listUsers());
      dispatch(listReviews());
      dispatch(listAnalytics());
    }
  }, [dispatch, history, redirect, userInfo]);

  // console.log(products.length);

  return (
    <div className="dashboard--content">
      <NavbarDashboard />
      <div className="dashboard--container">
        <div className="dashboard--cards">
          <div className="dashboard--cards__header">
            <h1 className="dashboard--cards__title">Dashboard All</h1>
            <span className="dashboard--cards__title-line"></span>
          </div>
          <div className="dashboard--cards__wrapper">
            {loadingProducts ? (
              <Loader />
            ) : errorProducts ? (
              <Message type="error">{errorProducts}</Message>
            ) : (
              <Link className="dashboard--link" to="/bionems-admin/productlist">
                <CardDashboard className="dashboard--card__small">
                  <h2 className="dashboard--card__title">Produits</h2>
                  <h3 className="dashboard--card__subtitle">
                    {products.length}
                  </h3>
                </CardDashboard>
              </Link>
            )}
            {/* {loadingAnalytics ? (
              <Loader />
            ) : errorAnalytics ? (
              <Message type="error">{errorAnalytics}</Message>
            ) : ( */}
            <Link className="dashboard--link" to="#">
              <CardDashboard className="dashboard--card__small">
                <h2 className="dashboard--card__title">Traffic</h2>
                {/* <h3 className="dashboard--card__subtitle">{analytics}</h3> */}
                {/* <div>
                    {analytics.map((data) => (
                      <div key={data.id}>
                        <h3>{data.dimensions}</h3>
                      </div>
                    ))}
                  </div> */}
              </CardDashboard>
            </Link>
            {/* )} */}

            {loadingUsers ? (
              <Loader />
            ) : errorUsers ? (
              <Message type="error">{errorUsers}</Message>
            ) : (
              <Link className="dashboard--link" to="/bionems-admin/userlist">
                <CardDashboard className="dashboard--card__small">
                  <h2 className="dashboard--card__title">Users</h2>
                  <h3 className="dashboard--card__subtitle">{users.length}</h3>
                </CardDashboard>
              </Link>
            )}

            {loadingReviews ? (
              <Loader />
            ) : errorReviews ? (
              <Message type="error">{errorReviews}</Message>
            ) : (
              <Link className="dashboard--link" to="/bionems-admin/reviews">
                <CardDashboard className="dashboard--card__small">
                  <h2 className="dashboard--card__title">Reviews</h2>
                  <h3 className="dashboard--card__subtitle">
                    {reviews.length}
                  </h3>
                </CardDashboard>
              </Link>
            )}

            {/* <CardDashboard className="dashboard--card__small">
              <h2>Products3</h2>
            </CardDashboard>
            <CardDashboard className="dashboard--card__small">
              <h2>Products4</h2>
            </CardDashboard>
            <CardDashboard className="dashboard--card__small">
              <h2>Products5</h2>
            </CardDashboard> */}
          </div>
        </div>

        <div className="dashboard--card-right">
          <div className="dashboard--cards__header">
            <h1 className="dashboard--cards__title">Orders</h1>
            <span className="dashboard--cards__title-line"></span>
          </div>
          <div className="dashboard--cards__wrapper">
            <CardDashboard className="dashboard--card__medium">
              <h2 className="dashboard--card__title">Orders</h2>
            </CardDashboard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeDashboard;
