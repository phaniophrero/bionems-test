import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import BoissonsResponsive from "../Products/BoissonsResponsive";

const Boissons = () => {
  const [products, setProducts] = useState([]);

  const [width, setWidth] = useState(window.innerWidth);

  const breakpoint = 620;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  useEffect(() => {
    async function fetchProducts() {
      const { data } = await axios.get("/api/products/");
      setProducts(data);
    }
    fetchProducts();
  }, []);

  return width < breakpoint ? (
    <BoissonsResponsive />
  ) : (
    <div className="products--menu">
      {products
        .filter((item) => item.category === "boisson")
        .map((filteredItem) => (
          <Link
            to={`/product/${filteredItem._id}`}
            key={filteredItem._id}
            className="products--menu__item"
          >
            <div className="products--menu__image">
              <img src={filteredItem.image} alt={filteredItem.name} />
            </div>
            <h2 className="products--menu__title">{filteredItem.name}</h2>
            <h3 className="products--menu__price">{filteredItem.price} €</h3>
          </Link>
        ))}
    </div>
  );
};

export default Boissons;
