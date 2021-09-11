import React, { useState } from "react";

import starFill from "../../images/Star.svg";
import starEmpty from "../../images/Star-empty.svg";

import Input from "../UI/Input";
import Textarea from "../UI/Textarea";
import Button from "../UI/Button";

const FormReview = () => {
  const [star, setStar] = useState(false);

  const starHandler = () => {
    setStar(true);
  };

  const formHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form className="form--review" onChange={formHandler} action="#">
      <h3 className="form--review__title">Créer un commentaire</h3>
      <div className="form--review__row">
        <label className="form--review__star--label" htmlFor="review--stars">
          Note generale
        </label>
        <div className="form--review__stars--wrapper">
          <button className="form--review__star" onClick={starHandler}>
            {star ? (
              <img src={starFill} alt={starFill} />
            ) : (
              <img src={starEmpty} alt={starEmpty} />
            )}
          </button>
          <button className="form--review__star">
            <img src={starEmpty} alt={starEmpty} />
          </button>
          <button className="form--review__star">
            <img src={starEmpty} alt={starEmpty} />
          </button>
          <button className="form--review__star">
            <img src={starEmpty} alt={starEmpty} />
          </button>
          <button className="form--review__star">
            <img src={starEmpty} alt={starEmpty} />
          </button>
        </div>
      </div>
      <div className="form--review__row--group">
        <div className="form--review__row form--review__row--inline">
          <label className="form--review__label" htmlFor="username">
            Nom
          </label>
          <Input className="form--review__input" type="text" name="username" />
        </div>
        <div className="form--review__row form--review__row--inline">
          <label className="form--review__label" htmlFor="email">
            Email
          </label>
          <Input className="form--review__input" type="email" name="email" />
        </div>
      </div>
      <div className="form--review__row">
        <label className="form--review__label" htmlFor="title">
          Ajouter un titre
        </label>
        <Input className="form--review__input" type="text" name="title" />
      </div>
      <div className="form--review__row">
        <label className="form--review__label" htmlFor="comment">
          Ajouter un commentaire
        </label>
        <Textarea
          className="form--review__textarea"
          name="comment"
          rows="10"
          cols="50"
          maxLength="100"
        />
      </div>
      <div className="form--review__row form--review__row--button">
        <Button className="form--review__button">Envoyer</Button>
      </div>
    </form>
  );
};

export default FormReview;
