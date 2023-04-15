import React from "react";
import { Link, NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <nav className="d-flex justify-content-center align-items-center">
          <div className="nav nav-pills ">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/products">Products</Link>
            <Link to="/posts">Posts</Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Footer;
