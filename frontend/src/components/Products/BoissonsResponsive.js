import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../../actions/productActions";
import Loader from "../UI/Loader";
import Message from "../UI/Message";

const BoissonsResponsive = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { error, loading, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message type="error">{error}</Message>
      ) : (
        <div>
          {products
            .filter((item) => item.category === "boissons")
            .map((filteredItem) => (
              <div
                key={filteredItem._id}
                className="product--responsive__container"
              >
                <div className="products--menu__image">
                  <img src={filteredItem.image} alt={filteredItem.name} />
                </div>
                <h2 className="product--responsive__title">
                  {filteredItem.name}
                </h2>
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
                <h3 className="product--responsive__price">
                  {filteredItem.price} €
                </h3>
              </div>
            ))}
        </div>
      )}
    </>
  );
};

export default BoissonsResponsive;
