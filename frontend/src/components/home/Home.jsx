import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home d-flex justify-content-center align-item-center">
      <div className="container d-flex justify-content-center align-item-center flex-column">
        <h1 className="text-center">
          Organize your <br /> work and life, finally,
        </h1>
        <p className="text-center">
          Become focused, organized, and calm <br /> with todo app.
        </p>
        <div className="text-center">
          <button className="btn btn-danger text-center" ><Link to="/todo" className="link">Make Todo List</Link></button>
        </div>
      </div>
    </div>
  );
};

export default Home;
