import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Button from "../components/UI/Button";
import Loader from "../components/UI/Loader";
import Message from "../components/UI/Message";
import { getUserDetails, updateUser } from "../actions/userActions";
import { USER_UPDATE_RESET } from "../constants/userConstants";

const UserEditPage = ({ match, history }) => {
  const userId = match.params.id;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { error, loading, user } = userDetails;

  const userUpdate = useSelector((state) => state.userUpdate);
  const {
    error: errorUpdate,
    loading: loadingUpdate,
    success: successUpdate,
  } = userUpdate;

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: USER_UPDATE_RESET });
      history.push("/bionems-admin/userlist");
    } else {
      if (!user.name || user._id !== Number(userId)) {
        dispatch(getUserDetails(userId));
      } else {
        setName(user.name);
        setEmail(user.email);
        setIsAdmin(user.isAdmin);
      }
    }
  }, [user, userId, successUpdate, history]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updateUser({ _id: user._id, name, email, isAdmin }));
  };

  return (
    <div className="form--container">
      <div className="form--link__wrapper">
        <Link className="form--link" to="/bionems-admin/userlist">
          Go back
        </Link>
      </div>

      {loadingUpdate && <Loader />}
      {errorUpdate && <Message type="error">{errorUpdate}</Message>}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message type="error">{error}</Message>
      ) : (
        <div className="form--wrapper">
          <div className="form--header__row">
            <h1 className="form--title">Edit User</h1>
            <p className="form--title__description">
              Saisissez votre info pour creer votre compte
            </p>
          </div>

          <form onSubmit={submitHandler} className="form">
            <div className="form--row">
              <label htmlFor="name" className="form--label">
                Nom
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form--input"
              />
            </div>
            <div className="form--row">
              <label htmlFor="email" className="form--label">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form--input"
              />
            </div>
            <div className="form--row">
              <label htmlFor="isAdmin" className="form--label">
                Is Admin
              </label>
              <input
                type="checkbox"
                id="isAdmin"
                value={isAdmin}
                onChange={(e) => setIsAdmin(e.target.checked)}
                className="form--input form--input-checkbox"
              />
            </div>
            <div className="form--row__button">
              <Button type="submit" className="form--button">
                Update
              </Button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default UserEditPage;
