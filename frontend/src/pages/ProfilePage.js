import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../components/UI/Button";
import Input from "../components/UI/Input";
import Loader from "../components/UI/Loader";
import Message from "../components/UI/Message";
import { getUserDetails, updateUserProfile } from "../actions/userActions";
import { USER_UPDATE_PROFILE_RESET } from "../constants/userConstants";

const ProfilePage = ({ history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { error, loading, user } = userDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const { success } = userUpdateProfile;

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    } else {
      if (!user || !user.name || success || userInfo._id !== user._id) {
        dispatch({ type: USER_UPDATE_PROFILE_RESET });
        dispatch(getUserDetails("profile"));
      } else {
        setName(user.name);
        setEmail(user.email);
      }
    }
  }, [dispatch, history, userInfo, user, success]);

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log("Submitted");
    if (password !== confirmPassword) {
      setMessage("Le mot de passe ne correspond pas");
    } else {
      dispatch(
        updateUserProfile({
          id: user._id,
          name: name,
          email: email,
          password: password,
        })
      );
      setMessage("Le mot de passe ne correspond pas");
    }
  };

  return (
    <div>
      <div className="form--container">
        {message && <Message type="error">{message}</Message>}
        {error && <Message type="error">{error}</Message>}
        {loading && <Loader />}
        <form onSubmit={submitHandler} className="form">
          <div className="form--header__row">
            <h1 className="form--title">Modifier votre compte</h1>
            <p className="form--title__description">
              Saisissez votre info pour modifier votre compte
            </p>
          </div>
          <div className="form--row">
            <label htmlFor="name" className="form--label">
              Nom
            </label>
            <Input
              type="text"
              name="name"
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
            <Input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form--input"
            />
          </div>
          <div className="form--row">
            <label htmlFor="password" className="form--label">
              Mot de Passe
            </label>
            <Input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form--input"
            />
          </div>
          <div className="form--row">
            <label htmlFor="confirmPassword" className="form--label">
              Confirmez le mot de passe
            </label>
            <Input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="form--input"
            />
          </div>
          <div className="form--row__button">
            <Button type="submit" className="form--button">
              Mettre à jour
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;
