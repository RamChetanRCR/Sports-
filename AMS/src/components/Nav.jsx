import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <nav className="container">
      <Link to="/Home">Home</Link>
      <Link to="/Athletes">Athletes</Link>
      <Link to="/Coaches">Coaches</Link>
      <Link to="/leaderboard">Leaderboard</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/about">about</Link>
      <Link to="/login">Login</Link>
      <Link to="/sign">Sign Up</Link>

    </nav>
  );
};

export default Nav;
