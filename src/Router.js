import React from "react";
import Link from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

const Router = () => {
  return (
    <div>
      <Link to="/Home">
        <h4>Home</h4>
      </Link>
      <Link to="/Home">ABout</Link>
      <Link to="/Home">Contact</Link>
    </div>
  );
};
export default Router;
