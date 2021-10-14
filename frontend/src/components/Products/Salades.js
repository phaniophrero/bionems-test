import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../../actions/productActions";
import SaladesResponsive from "../../components/Products/SaladesResponsive";
import Loader from "../UI/Loader";
import Message from "../UI/Message";

const Salades = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { error, loading, products } = productList;

  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 620;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return width < breakpoint ? (
    <SaladesResponsive />
  ) : (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message type="error">{error}</Message>
      ) : (
        <div className="products--menu">
          {products
            .filter((item) => item.category === "salade")
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
                <ul className="products--menu__ingredients">
                  {filteredItem.ingredient1 ? (
                    <li className="products--menu__ingredient">
                      {filteredItem.ingredient1}
                    </li>
                  ) : (
                    ""
                  )}
                  {filteredItem.ingredient2 ? (
                    <li className="products--menu__ingredient">
                      {filteredItem.ingredient2}
                    </li>
                  ) : (
                    ""
                  )}
                  {filteredItem.ingredient3 ? (
                    <li className="products--menu__ingredient">
                      {filteredItem.ingredient3}
                    </li>
                  ) : (
                    ""
                  )}
                  {filteredItem.ingredient4 ? (
                    <li className="products--menu__ingredient">
                      {filteredItem.ingredient4}
                    </li>
                  ) : (
                    ""
                  )}
                  {filteredItem.ingredient5 ? (
                    <li className="products--menu__ingredient">
                      {filteredItem.ingredient5}
                    </li>
                  ) : (
                    ""
                  )}
                  {filteredItem.ingredient6 ? (
                    <li className="products--menu__ingredient">
                      {filteredItem.ingredient6}
                    </li>
                  ) : (
                    ""
                  )}
                </ul>
                <h3 className="products--menu__price">
                  {filteredItem.price} €
                </h3>
              </Link>
            ))}
        </div>
      )}
    </>
  );
};

export default Salades;
