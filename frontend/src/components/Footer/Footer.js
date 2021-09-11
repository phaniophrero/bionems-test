import React from "react";
import Map from "../Map/Map";
import logoFooter from "../../images/logo2.png";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="footer--main">
      <div className="footer--left-side">
        <div className="footer--logo__wrapper">
          <img src={logoFooter} alt="BioNems Logo" />
        </div>

        <div className="footer--social-media">
          <h2 className="footer--social-media__title">Trouvez Nous Sur</h2>
          <div className="footer--social-media__icons">
            <a
              className="footer--social-media__links footer--social-media__facebook"
              href="https://www.facebook.com/Dbionems"
            >
              <FaFacebook />
            </a>
            <a
              className="footer--social-media__links footer--social-media__instagram"
              href="https://www.instagram.com/bionems.fr/"
            >
              <AiFillInstagram />
            </a>
            <a
              className="footer--social-media__links footer--social-media__whatsapp"
              href="https://wa.me/0664709183"
            >
              <IoLogoWhatsapp />
            </a>
          </div>
        </div>
      </div>
      <div className="footer--right-side">
        <ul className="footer--program">
          <li>
            Lundi{" "}
            <span className="footer--program__hours left">11:30 - 14:30</span>{" "}
            <span className="footer--program__green-line">|</span>{" "}
            <span className="footer--program__hours">18:00 - 20:30</span>
          </li>
          <li>
            Mardi{" "}
            <span className="footer--program__hours left">11:30 - 14:30</span>{" "}
            <span className="footer--program__green-line">|</span>{" "}
            <span className="footer--program__hours">18:00 - 20:30</span>
          </li>
          <li>
            Mercredi{" "}
            <span className="footer--program__hours left">11:30 - 14:30</span>{" "}
            <span className="footer--program__green-line">|</span>{" "}
            <span className="footer--program__hours">18:00 - 20:30</span>
          </li>
          <li>
            Jeudi{" "}
            <span className="footer--program__hours left">11:30 - 14:30</span>{" "}
            <span className="footer--program__green-line">|</span>{" "}
            <span className="footer--program__hours">18:00 - 20:30</span>
          </li>
          <li>
            Vendredi{" "}
            <span className="footer--program__hours left">11:30 - 14:30</span>{" "}
            <span className="footer--program__green-line">|</span>{" "}
            <span className="footer--program__hours">18:00 - 20:30</span>
          </li>
          <li>
            Samedi{" "}
            <span className="footer--program__hours left">11:30 - 14:30</span>{" "}
            <span className="footer--program__green-line">|</span>{" "}
            <span className="footer--program__hours">18:00 - 20:30</span>
          </li>
          <li>
            Dimanche{" "}
            <span className="footer--program__hours left">11:30 - 14:30</span>{" "}
            <span className="footer--program__green-line">|</span>{" "}
            <span className="footer--program__hours">18:00 - 20:30</span>
          </li>
        </ul>
        <Map />
      </div>
    </footer>
  );
};

export default Footer;
