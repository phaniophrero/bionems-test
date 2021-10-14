import React, { useState } from "react";
import { Link as LinkScroll } from "react-scroll";

const ModalTruckInfo = () => {
  const [modalBg, setModalBg] = useState(true);

  const modalBgHandler = () => {
    setModalBg(false);
  };

  return (
    <>
      {modalBg ? (
        <div
          onClick={modalBgHandler}
          className={`modalTruck--exit-background ${
            !modalBg ? "remove--bg" : ""
          }`}
        ></div>
      ) : (
        ""
      )}

      {modalBg ? (
        <div className="modalTruck--background">
          <div className="modalTruck--container">
            <div className="modalTruck--button__wrapper">
              <button onClick={modalBgHandler} className="modalTruck--button">
                X
              </button>
            </div>
            <header className="modalTruck--header">
              <h1 className="modalTruck--title">
                Où puis-je trouver le Bionems Truck
              </h1>
            </header>
            <div className="modalTruck--info">
              <div className="modalTruck--subheader">
                <h2 className="modalTruck--subtitle">
                  Les marchés où vous pouvez nous trouver:
                </h2>
              </div>
              <div className="modalTruck--info__list">
                <pre>
                  <h3>
                    <strong>Du 21 Octobre au 12 Novembre</strong>
                  </h3>
                  <p>Mardi: Parking St. Michel</p>
                  <p>Mercredi: Parking St. Michel</p>
                  <p>Jeudi: Parking Rond point E.Leclerc</p>
                  <p>Vendredi: Parking Intermarche</p>
                  <p>Samedi: Basse Ville Quimperle</p>
                </pre>
              </div>
            </div>
            <div className="modalTruck--link__wrapper">
              <LinkScroll
                to="products"
                className="modalTruck--link"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-250}
              >
                Produits
              </LinkScroll>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default ModalTruckInfo;
