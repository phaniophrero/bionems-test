import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Button from "../components/UI/Button";
import Loader from "../components/UI/Loader";
import Message from "../components/UI/Message";
import { register } from "../actions/userActions";

const LoginPage = ({ location, history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const redirect = location.search ? location.search.split("=")[1] : "/";

  const userRegister = useSelector((state) => state.userRegister);
  const { error, loading, userInfo } = userRegister;

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log("Submitted");
    if (password !== confirmPassword) {
      setMessage("Le mot de passe ne correspond pas");
    } else {
      dispatch(register(name, email, password));
    }
  };

  return (
    <div className="form--container">
      {message && <Message type="error">{message}</Message>}
      {error && <Message type="error">{error}</Message>}
      {loading && <Loader />}
      <form onSubmit={submitHandler} className="form">
        <div className="form--header__row">
          <h1 className="form--title">Créer un compte</h1>
          <p className="form--title__description">
            Saisissez votre info pour creer votre compte
          </p>
        </div>
        <div className="form--row">
          <label htmlFor="name" className="form--label">
            Nom
          </label>
          <input
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
          <input
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
          <input
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
          <input
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
            Creer compte
          </Button>
        </div>
      </form>
      <div className="form--row">
        <h3 className="form--new-admin__title">Deja admin ?</h3>
        <Link
          className="form--new-admin__link"
          to={redirect ? `/login?redirect=${redirect}` : "/login"}
        >
          Accedez a mon compte
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
