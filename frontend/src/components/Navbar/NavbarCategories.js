import React, { useState } from "react";
import navbarData from "../../data/navbarData";
import { Link, useLocation } from "react-router-dom";

const NavbarCategories = () => {
  const [isHovered, setIsHovered] = useState(false);

  const hoverHandler = () => setIsHovered(!isHovered);

  const location = useLocation();
  //destructuring pathname from location

  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");

  return (
    <nav className="navbar navbar--categories">
      <ul className="navbar--list">
        {navbarData.map((item, index) => (
          <li
            key={item.id}
            // className="navbar--list__item"
            onMouseEnter={hoverHandler}
            onMouseLeave={hoverHandler}
            className={
              splitLocation[1] === item.path
                ? "navbar--list__item active"
                : "navbar--list__item"
            }
          >
            <Link className={item.cName} to={item.path}>
              {item.name}
            </Link>
            {item.hover && isHovered ? (
              <span
                className={`${item.id === index ? "active--dot" : "dot"}`}
              ></span>
            ) : (
              ""
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavbarCategories;
