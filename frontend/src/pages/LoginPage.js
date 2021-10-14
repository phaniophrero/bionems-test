import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Button from "../components/UI/Button";
import Loader from "../components/UI/Loader";
import Message from "../components/UI/Message";
import { login } from "../actions/userActions";

const LoginPage = ({ location, history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const redirect = location.search
    ? location.search.split("=")[1]
    : "/bionems-admin";

  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log("Submitted");
    dispatch(login(email, password));
  };

  return (
    <div className="form--container">
      {error && <Message type="error">{error}</Message>}
      {loading && <Loader />}
      <form onSubmit={submitHandler} className="form">
        <div className="form--header__row">
          <h1 className="form--title">Connexion</h1>
          <p className="form--title__description">
            Saisissez votre e-mail pour vous connecter
          </p>
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
          <label htmlFor="password" className="form--label">
            Mot de Passe
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form--input"
          />
        </div>
        <div className="form--row__button">
          <Button type="submit" className="form--button">
            Me Connecter
          </Button>
        </div>
      </form>
      <div className="form--row">
        <h3 className="form--new-admin__title">Nouveau admin ?</h3>
        <Link
          className="form--new-admin__link"
          to={redirect ? `/register?redirect=${redirect}` : "/register"}
        >
          Creer mon compte
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
