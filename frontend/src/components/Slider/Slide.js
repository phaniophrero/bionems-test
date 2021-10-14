import React from "react";
import logo from "../../images/logo.png";

const Slide = (props) => {
  // console.log(props.keyId);

  return (
    <div key={props.keyId} className="slide-content">
      <div className="slide--text">
        {/* <div className="logo--wrapper">
          <img src={logo} alt="Logo BioNems" />
        </div> */}
        <div className="slide--content__left">
          <h1
            className={`slide--title ${
              props.cNameTitle ? props.cNameTitle : ""
            }`}
          >
            {props.title}
            <span
              className={`slide--subtitle ${props.cName ? props.cName : ""}`}
            >
              {props.subtitle}
            </span>
          </h1>
          <div className="slide--menu">
            <div className={props.cNameMenuList}>
              {/* <h2 className="slide--menu__title">{props.menuTitle}</h2> */}
              <ul className="slide--menu__list-items">
                <li>{props.menuTitleItem1}</li>
                <li>{props.menuTitleItem2}</li>
                <li>{props.menuTitleItem3}</li>
                {props.keyId === "s2" && <li>{props.menuTitleItem4}</li>}
              </ul>
            </div>
            {props.keyId === "s1" && (
              <div className="slide--menu__list">
                {/* <h2 className="slide--menu__title">Roulleaux</h2> */}
                <ul className="slide--menu__list-items">
                  <li>Roulleau de printemps au poulet</li>
                  <li>Roulleau de printemps au vegetarien</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className={`slide--image ${props.cNameImage}`}>
        <h2 className="slide--image__title">{props.price}</h2>
        <h3 className="slide--image__title2">Bon prix</h3>
        <img src={props.image} alt="BioNems Menu Images Nems et Rouleaux" />
      </div>
    </div>
  );
};

export default Slide;
