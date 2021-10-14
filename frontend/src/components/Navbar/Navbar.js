import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import logo from "../../images/logo.png";
import logo from "../../images/bionems-logo2.png";
import flag from "../../images/france.png";
import { GrFacebookOption } from "react-icons/gr";
import { FaPhoneAlt } from "react-icons/fa";
// import { logout } from "../../actions/userActions";
// import Button from "../UI/Button";
import { Link as LinkScroll, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  // const [dropdown, setDropdown] = useState(false);
  // const [dropdownAdmin, setDropdownAdmin] = useState(false);
  // const userLogin = useSelector((state) => state.userLogin);
  // const { userInfo } = userLogin;
  // const dispatch = useDispatch();

  // const ref = useRef();

  // useEffect(() => {
  //   const checkOutsideClick = (e) => {
  //     if (
  //       dropdown ||
  //       (dropdownAdmin && ref.current && !ref.current.contains(e.target))
  //     ) {
  //       setDropdown(false);
  //       setDropdownAdmin(false);
  //     }
  //   };
  //   document.addEventListener("mousedown", checkOutsideClick);

  //   return () => {
  //     // Cleanup the event listener
  //     document.removeEventListener("mousedown", checkOutsideClick);
  //   };
  // }, [dropdown, dropdownAdmin]);

  // const logoutHandler = () => {
  //   // console.log("Logout");
  //   dispatch(logout());
  // };

  return (
    <nav name="heroarea" className="navbar">
      <div className="navbar--top">
        <div className="navbar--flag">
          <h2 className="navbar--flag__text">FR</h2>
          <div className="navbar--flag__icon">
            <img src={flag} alt="Frace Flag BioNems" />
          </div>
        </div>
        <ul className="navbar--list__left">
          <li className="navbar--item">
            <LinkScroll
              to="products"
              className="navbar--link"
              // href="#products"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-250}
            >
              Produits
            </LinkScroll>
          </li>
          <li className="navbar--item navbar--item2">
            <LinkScroll
              to="bionems-truck"
              className="navbar--link"
              // href="#bionems-truck"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              // offset={-100}
            >
              Bionems Truck
            </LinkScroll>
          </li>
        </ul>

        <Link to="/" className="logo--wrapper">
          <img src={logo} alt="Logo BioNems bionems" />
        </Link>

        <ul className="navbar--list__right">
          <li className="navbar--item">
            <LinkScroll
              to="history"
              className="navbar--link"
              // href="#history"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
            >
              L'Histoire
            </LinkScroll>
          </li>
          <li className="navbar--item navbar--item2">
            <LinkScroll
              to="contact"
              className="navbar--link"
              // href="#contact"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
            >
              Nous Contacter
            </LinkScroll>
          </li>
        </ul>

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
