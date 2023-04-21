import React from "react";
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";
import PRODUCTS from "../data";
const SingleProduct = () => {
  const navigate = useNavigate();

  return (
    <main>
      <div className="pg-header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h1>Title</h1>
            </div>

            <div className="col-lg-5">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-end">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="/products">Products</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Page Title
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="container content">
        <div className="row">
          <div className="col-lg-5">image</div>
          <div className="col-lg-7">
            <h2>name</h2>
            <p className="price">price</p>
            <p>details...</p>
            <br />
            <button
              onClick={() => {
                navigate(-1);
              }}
              className="btn btn-primary btn-sm"
            >
              BACK
            </button>
            <button
              onClick={() => {
                navigate("/products");
              }}
              className="btn btn-primary btn-sm"
            >
              NAVIGATE TO PRODUCTS
            </button>
            <Link to="/products" className="btn btn-primary btn-sm">
              PRODUCTS
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SingleProduct;
