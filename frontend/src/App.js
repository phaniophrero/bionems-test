import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import ReactGa from "react-ga";

import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
// styles
import "./App.scss";
import Nems from "./components/Products/Nems";
import Bobuns from "./components/Products/Bobuns";
import Boissons from "./components/Products/Boissons";
import Salades from "./components/Products/Salades";
import Desserts from "./components/Products/Desserts";
import ProductPage from "./pages/ProductPage";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
// import NavbarCategories from "./components/Navbar/NavbarCategories";

function App() {
  useEffect(() => {
    ReactGa.initialize("284636172");

    // to report page view
    ReactGa.pageview("/");
    console.log("is workinggg");
  }, []);

  return (
    <>
      <Navbar />
      <Layout>
        <Route exact path="/" component={Home} />

        <Route exact path="/" component={Nems} />

        <Route path="/bobuns" component={Bobuns} />

        <Route path="/salades" component={Salades} />

        <Route path="/desserts" component={Desserts} />

        <Route path="/boissons" component={Boissons} />
      </Layout>
      <Route path="/product/:id" component={ProductPage} />
      <Footer />
    </>
  );
}

export default App;
