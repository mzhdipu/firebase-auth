import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="bg-red-300 h-screen flex justify-center items-center">
      <div className="hero-section text-6xl">
        <h1>This is Hero Section</h1>

        <div className="flex gap-2 w-52 m-auto justify-between mt-5">
          <Link to='/login' className="btn">Login</Link>
          <Link to='/registration' className="btn">Registration</Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
