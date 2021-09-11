import React, { useState, useEffect } from "react";
import axios from "axios";

const NemsResponsive = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const { data } = await axios.get("/api/products/");
      setProducts(data);
    }
    fetchProducts();
  }, []);

  return (
    <>
      {products
        .filter((item) => item.category === "nem")
        .map((filteredItem) => (
          <div
            key={filteredItem._id}
            className="product--responsive__container"
          >
            <div className="products--menu__image">
              <img src={filteredItem.image} alt={filteredItem.name} />
            </div>
            <h2 className="product--responsive__title">{filteredItem.name}</h2>
            <h3 className="product--responsive__price">
              {filteredItem.price} €
            </h3>
          </div>
        ))}
    </>
  );
};

export default NemsResponsive;
