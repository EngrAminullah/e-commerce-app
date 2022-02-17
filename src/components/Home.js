import React from "react";
import Products from "./Products";

function Home() {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img
          src="/assets/bg.jpg"
          className="card-img"
          alt="Background"
          height="750px"
        />
        <div className="card-img-overlay d-flex flex-column text-center">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0 text-dark">
              NEW SEASON ARRIVAL
            </h5>
            <p className="card-text fs-2 text-dark">CHECKOUT ALL THE TRENDS</p>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
}

export default Home;
