import React from "react";

const HistorySection = () => {
  return (
    <section name="history" className="history--section">
      <header className="history--section__header">
        <h2 className="history--section__title">
          <strong>L'Histoire</strong>
        </h2>
      </header>
      <div className="history--section__bio">
        <p className="history--section__description">
          Anne-Sophie a PIC(qué) le camion de son grand-père André sous l’œil
          malicieux de son père Jacques…
        </p>
        <p className="history--section__description">
          <span>Son objectif :</span> mettre du swing, du twist et un brin de
          rock’n’roll dans vos assiettes !
        </p>
        <p className="history--section__description">
          <span>Bravo</span> à nos producteurs locaux pour leur respect et leur
          amour des produits : La Ferme des Caillats (Royans-Vercors – Drôme),
          La viande D’ici (Drôme), Les Iles Ferays (Tournon sur Rhône –
          Ardèche), Jean-Luc Raillon (Saint-Vincent-la-Commanderie – Drôme).
        </p>
        <p className="history--section__description">
          <span>Chapeau</span> à nos pâtissiers, boulangers & cuisiniers pour
          leurs délicieux pains, desserts et sauces 100% Maison Pic !
        </p>
        <p className="history--section__description">
          <span>Standing ovation</span> aux artistes Cartoon Dave & Miranda
          Richmond Mouillot qui ont croqué et peint le PicUp Truck avec passion
          et talent !
        </p>
      </div>
    </section>
  );
};

export default HistorySection;
