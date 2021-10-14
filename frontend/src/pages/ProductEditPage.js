import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Button from "../components/UI/Button";
import Loader from "../components/UI/Loader";
import Message from "../components/UI/Message";
import { listProductDetails, updateProduct } from "../actions/productActions";
import { PRODUCT_UPDATE_RESET } from "../constants/productConstants";

const ProductEditPage = ({ match, history }) => {
  const productId = match.params.id;

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [uploading, setUploading] = useState(false);

  // const [selectedImage, setSelectedImage] = useState();

  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { error, loading, product } = productDetails;

  const productUpdate = useSelector((state) => state.productUpdate);
  const {
    error: errorUpdate,
    loading: loadingUpdate,
    success: successUpdate,
  } = productUpdate;

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: PRODUCT_UPDATE_RESET });
      history.push("/bionems-admin/productlist");
    } else {
      if (!product.name || product._id !== Number(productId)) {
        dispatch(listProductDetails(productId));
      } else {
        setName(product.name);
        setPrice(product.price);
        setImage(product.image);
        setBrand(product.brand);
        setCategory(product.category);
        setDescription(product.description);
      }
    }
  }, [dispatch, product, productId, history, successUpdate]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateProduct({
        _id: productId,
        name,
        price,
        image,
        brand,
        category,
        description,
      })
    );
  };

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();

    formData.append("image", file);
    formData.append("product_id", productId);

    setUploading(true);
    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const { data } = await axios.post(
        "/api/products/upload/",
        formData,
        config
      );

      setImage(data);

      setUploading(false);
    } catch (error) {
      setUploading(false);
    }
  };

  // const imageChangeHandler = (e) => {
  //   if (e.target.files && e.target.files > 0) {
  //     setSelectedImage(e.target.files[0]);
  //   }
  // };

  // const removeSelectedImageHandler = (e) => {
  //   e.preventDefault();
  //   setImage("");
  // };

  return (
    <div className="form--container">
      <div className="form--link__wrapper">
        <Link className="form--link" to="/bionems-admin/productlist">
          Go back
        </Link>
      </div>
      {loadingUpdate && <Loader />}
      {errorUpdate && <Message type="error">{errorUpdate}</Message>}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message type="error">{error}</Message>
      ) : (
        <div className="form--wrapper">
          <div className="form--header__row">
            <h1 className="form--title">Edit Product</h1>
            <p className="form--title__description">
              Saisissez votre info pour creer votre compte
            </p>
          </div>

          <form onSubmit={submitHandler} className="form">
            <div className="form--row">
              <label htmlFor="name" className="form--label">
                Nom
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form--input"
              />
            </div>
            <div className="form--row">
              <label htmlFor="price" className="form--label">
                Price
              </label>
              <input
                type="number"
                id="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="form--input"
              />
            </div>
            <div className="form--row">
              <label htmlFor="image" className="form--label">
                Image
              </label>
              <div className="form--input form--input__file-wrapper">
                <input
                  type="text"
                  id="image"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  className="form--input__file"
                />
                <input
                  className="form--input__file-button"
                  type="file"
                  id="image-file"
                  onChange={uploadFileHandler}
                />
                {/* <img
                  style={{
                    width: "5rem",
                    height: "5rem",
                    display: "flex",
                    marginTop: "3rem",
                    flexDirection: "column",
                  }}
                  src={image}
                  alt="product preview"
                /> */}
                {/* <button onClick={removeSelectedImageHandler}>
                  Remove image
                </button> */}
                {uploading && <Loader />}
              </div>
            </div>
            <div className="form--row">
              <label htmlFor="brand" className="form--label">
                Brand
              </label>
              <input
                type="text"
                id="brand"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                className="form--input"
              />
            </div>
            <div className="form--row">
              <label htmlFor="category" className="form--label">
                Brand
              </label>
              <input
                type="text"
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="form--input"
              />
            </div>
            <div className="form--row">
              <label htmlFor="description" className="form--label">
                Description
              </label>
              <input
                type="text"
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="form--input"
              />
            </div>

            <div className="form--row__button">
              <Button type="submit" className="form--button">
                Update
              </Button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ProductEditPage;
