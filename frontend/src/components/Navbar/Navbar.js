import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import flag from "../../images/france.png";
import { GrFacebookOption } from "react-icons/gr";
import { FaPhoneAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar--top">
        <div className="navbar--flag">
          <h2 className="navbar--flag__text">FR</h2>
          <div className="navbar--flag__icon">
            <img src={flag} alt="Frace Flag BioNems" />
          </div>
        </div>

        <Link to="/" className="logo--wrapper">
          <img src={logo} alt="Logo BioNems bionems" />
        </Link>

        <div className="navbar--contact__wrapper">
          <a
            className="navbar--top__facebook"
            href="https://www.facebook.com/Dbionems"
          >
            <GrFacebookOption />
          </a>
          <a href="https://wa.me/0664709183" className="navbar--top__phone-nr">
            <span className="navbar--phone-nr__icon-wrapper">
              <FaPhoneAlt />
            </span>
            06 64 70 91 83
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
