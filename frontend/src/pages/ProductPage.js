import React, { useState, useEffect } from "react";
import axios from "axios";
// Icons
import check from "../images/check.svg";
import Review from "../components/Reviews/Review";
import FormReview from "../components/Reviews/FormReview";
import ProductPageSlider from "../components/ProductPageSlider/ProductPageSlider";
import Reviews from "../components/Reviews/Reviews";

const ProductPage = ({ match }) => {
  const [product, setProduct] = useState([]);
  const [products, setProducts] = useState([]);

  const chartDataLines = [
    { label: "5 stars", value: 80, bgColor: "#3FCE61" },
    { label: "4 stars", value: 45, bgColor: "#A6D594" },
    { label: "3 stars", value: 20, bgColor: "#B2B95C" },
    { label: "2 stars", value: 10, bgColor: "#D9B155" },
    { label: "1 stars", value: 2, bgColor: "#CC8A51" },
  ];

  //   for(const rating in props.ratings) {
  //       const ratingLine = rating
  //   }

  const slides = products.filter((item) => item.category === "nem");

  useEffect(() => {
    async function fetchProducts() {
      const { data } = await axios.get("/api/products/");
      setProducts(data);
    }
    fetchProducts();
  }, []);

  useEffect(() => {
    async function fetchProduct() {
      const { data } = await axios.get(`/api/products/${match.params.id}`);
      setProduct(data);
    }
    fetchProduct();
  }, []);

  return (
    <>
      <div className="product--container">
        <div className="product--wrapper">
          <div className="product--image__wrapper">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="product--details">
            <h1 className="product--title">{product.name}</h1>
            <h1 className="product--title2">ESSAYEZ MAINTENANT</h1>
            <ul className="product--ingredient__list">
              <li className="product--ingredient__item">
                <img src={check} alt={check} /> Ingrediente bobun au poulet
              </li>
              <li className="product--ingredient__item">
                <img src={check} alt={check} /> Ingrediente bobun au poulet
              </li>
              <li className="product--ingredient__item">
                <img src={check} alt={check} /> Ingrediente bobun au poulet
              </li>
              <li className="product--ingredient__item">
                <img src={check} alt={check} /> Ingrediente bobun au poulet
              </li>
            </ul>

            <h3 className="product--price">{product.price} €</h3>
          </div>
        </div>
        <div className="product--info">
          <Review product={product} />

          <div className="description">
            <h2 className="description--title">Description</h2>
            <p className="description--text">
              {product.description}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
              sequi odio deserunt enim, earum dolorem assumenda, molestiae
              fugiat voluptates doloribus perferendis maxime laborum beatae.
              Explicabo fugiat dolorum sit itaque aperiam. Voluptas fugiat ullam
              nisi ipsam modi quidem explicabo.
            </p>
          </div>
        </div>
      </div>
      <ProductPageSlider slides={slides} />
      <FormReview />
      <Reviews dataLines={chartDataLines} />
    </>
  );
};

export default ProductPage;
