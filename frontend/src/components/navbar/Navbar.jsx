import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary ">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <b>TODO</b>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item px-2 py-1">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item px-2 py-1">
                <Link className="nav-link active" aria-current="page" to="/about">
                  About Us
                </Link>
              </li>
              <li className="nav-item px-2 py-1">
                <Link className="nav-link active" aria-current="page" to="/todo">
                  todo
                </Link>
              </li>
              <li className="nav-item px-2 py-1">
                <Link className="nav-link active btn btn-primary" aria-current="page" to="/signup">
                  Sign Up
                </Link>
              </li>
              <li className="nav-item px-2 py-1">
                <Link className="nav-link active btn btn-primary" aria-current="page" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item px-2 py-1">
                <Link className="nav-link active btn btn-danger" aria-current="page" to="/logout">
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
