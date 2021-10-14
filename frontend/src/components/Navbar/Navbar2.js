import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

const Navbar2 = () => {
  return (
    <nav name="heroarea" className="navbar2">
      <ul className="navbar2--list2">
        <li className="navbar2--item">
          <LinkScroll
            to="heroarea"
            className="navbar2--link"
            // href="#products"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-250}
            activeClass="active"
          >
            Accueil
          </LinkScroll>
        </li>

        <li className="navbar2--item">
          <LinkScroll
            to="products"
            className="navbar2--link"
            // href="#products"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-250}
            activeClass="active"
          >
            Produits
          </LinkScroll>
        </li>

        <li className="navbar2--item navbar2--item2">
          <LinkScroll
            to="bionems-truck"
            className="navbar2--link"
            // href="#bionems-truck"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            // offset={-100}
            activeClass="active"
          >
            Bionems Truck
          </LinkScroll>
        </li>

        <li className="navbar2--item">
          <LinkScroll
            to="history"
            className="navbar2--link"
            // href="#history"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            activeClass="active"
          >
            L'Histoire
          </LinkScroll>
        </li>
        <li className="navbar--item2 navbar2--item2">
          <LinkScroll
            to="contact"
            className="navbar2--link"
            // href="#contact"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            activeClass="active"
          >
            Nous Contacter
          </LinkScroll>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar2;
