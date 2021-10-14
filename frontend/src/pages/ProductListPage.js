import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/UI/Loader";
import Message from "../components/UI/Message";
import Button from "../components/UI/Button";
import Paginate from "../components/UI/Paginate";
// import actionsIcon from "../images/actions-icon.svg";
import {
  listProductsDashboard,
  deleteProduct,
  createProduct,
} from "../actions/productActions";
import { PRODUCT_CREATE_RESET } from "../constants/productConstants";

const ProductListPage = ({ history, match }) => {
  // const [showActions, setShowActions] = useState(false);
  const dispatch = useDispatch();

  const productListDashboard = useSelector(
    (state) => state.productListDashboard
  );
  const { loading, error, products, page, pages } = productListDashboard;

  const productDelete = useSelector((state) => state.productDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = productDelete;

  const productCreate = useSelector((state) => state.productCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    product: createdProduct,
  } = productCreate;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  let keyword = history.location.search;

  useEffect(() => {
    dispatch({ type: PRODUCT_CREATE_RESET });

    if (!userInfo.isAdmin) {
      history.push("/login");
    }

    if (successCreate) {
      history.push(`/bionems-admin/product/${createdProduct._id}/edit`);
    } else {
      dispatch(listProductsDashboard(keyword));
    }
  }, [
    dispatch,
    history,
    userInfo,
    successDelete,
    successCreate,
    createdProduct,
    keyword,
  ]);

  const deleteHandler = (id) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer cet produit?")) {
      dispatch(deleteProduct(id));
    }
  };

  const createProductHandler = () => {
    dispatch(createProduct());
  };

  // const showActionsHandler = () => {
  //   setShowActions(!showActions);
  // };

  return (
    <div className="container">
      <div className="header--row">
        <div className="header--row__title-wrapper">
          <h1 className="header--row__title">Produits</h1>
        </div>
        <div className="header--row__button-wrapper">
          <Button
            className="header--row__button"
            onClick={createProductHandler}
          >
            Creer produit
          </Button>
        </div>
      </div>
      {loadingDelete && <Loader />}
      {errorDelete && <Message type="error">{errorDelete}</Message>}

      {loadingCreate && <Loader />}
      {errorCreate && <Message type="error">{errorCreate}</Message>}

      {loading ? (
        <Loader />
      ) : error ? (
        <Message type="error">{error}</Message>
      ) : (
        <>
          <table className="dashboard--table">
            <thead className="dashboard--table__head">
              <tr className="dashboard--table__row">
                <th className="dashboard--table__column-title">ID</th>
                <th className="dashboard--table__column-title">Name</th>
                <th className="dashboard--table__column-title">Prix</th>
                <th className="dashboard--table__column-title">Categorie</th>
                <th className="dashboard--table__column-title">Brand</th>
                <th className="dashboard--table__column-title"></th>
              </tr>
            </thead>
            <tbody className="dashboard--table__body">
              {products.map((product) => (
                <tr className="dashboard--table__row" key={product._id}>
                  <td className="dashboard--table__data">{product._id}</td>
                  <td className="dashboard--table__data">{product.name}</td>
                  <td className="dashboard--table__data">{product.price} €</td>
                  <td className="dashboard--table__data">{product.category}</td>
                  <td className="dashboard--table__data">{product.brand}</td>

                  <td className="dashboard--table__data">
                    <Link
                      className="dashboard--table__btn dashboard--table__btn-edit"
                      to={`/bionems-admin/product/${product._id}/edit`}
                    >
                      Edit
                    </Link>
                    <Button
                      onClick={() => deleteHandler(product._id)}
                      className="dashboard--table__btn dashboard--table__btn-delete"
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Paginate page={page} pages={pages} isAdmin={true} />
        </>
      )}
    </div>
  );
};

export default ProductListPage;
