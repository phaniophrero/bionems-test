import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
// import NavbarCategories from "../components/Navbar/NavbarCategories";
import Slider from "../components/Slider/Slider";
import navbarData from "../data/navbarData";
import Nems from "../components/Products/Nems";
import Bobuns from "../components/Products/Bobuns";
import Salades from "../components/Products/Salades";
import Desserts from "../components/Products/Desserts";
import Boissons from "../components/Products/Boissons";
//Sections
import ModalTruckInfo from "../components/ModalTruckInfo/ModalTruckInfo";
import BionemsTruckSection from "../components/Sections/BionemsTruckSection";
import HistorySection from "../components/Sections/HistorySection";

import Navbar2 from "../components/Navbar/Navbar2";

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [showContent, setShowContent] = useState("FirstCategory");

  const hoverHandler = () => setIsHovered(!isHovered);
  const showContentHandler = (category) => {
    setShowContent(category);
  };

  return (
    <>
      <Navbar />
      <Navbar2 />
      <Slider />
      <nav className="navbar navbar--categories">
        <ul className="navbar--list">
          {navbarData.map((item, index) => (
            <li
              key={item.id}
              onMouseEnter={hoverHandler}
              onMouseLeave={hoverHandler}
              onClick={() => showContentHandler(item.category)}
              className={
                showContent === item.category
                  ? "navbar--list__item active"
                  : "navbar--list__item"
              }
            >
              <button className={item.cName}>{item.name}</button>
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

      {showContent === "FirstCategory" && <Nems />}
      {showContent === "SecondCategory" && <Bobuns />}
      {showContent === "ThirdCategory" && <Salades />}
      {showContent === "FourthCategory" && <Desserts />}
      {showContent === "FifthCategory" && <Boissons />}

      {/* <ModalTruckInfo /> */}

      <BionemsTruckSection />
      <HistorySection />

      <Footer />
    </>
  );
};

export default Home;
