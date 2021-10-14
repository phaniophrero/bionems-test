import React from "react";
import { Link } from "react-router-dom";

const Paginate = ({ pages, page, isAdmin = false }) => {
  return (
    pages > 1 && (
      <div className="pagination">
        {[...Array(pages).keys()].map((x) => (
          <Link
            key={x + 1}
            to={
              !isAdmin
                ? `/?page=${x + 1}`
                : `/bionems-admin/productlist/?page=${x + 1}`
            }
            className="pagination--link"
          >
            <button
              className={`pagination--link__button ${
                x + 1 === page ? "active" : ""
              }`}
            >
              {x + 1}
            </button>
          </Link>
        ))}
      </div>
    )
  );
};

export default Paginate;
