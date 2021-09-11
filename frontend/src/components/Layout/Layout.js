import React from "react";
// import Navbar from "../Navbar/Navbar";
import Slider from "../Slider/Slider";
// import Footer from "../Footer/Footer";
import NavbarCategories from "../Navbar/NavbarCategories";

const Layout = (props) => {
  return (
    <main className="main-content">
      <Slider />
      <NavbarCategories />

      {props.children}
    </main>
  );
};

export default Layout;
