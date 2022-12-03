import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styling/navbar.css";
import MenuIcon from "../Assets/Menu.jpg";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="links">
        <h3 className="head"> Jessie Rainey </h3>
        <div className="toggleButton">
          <button
            onClick={() => {
              setExpandNavbar((prev) => !prev);
            }}
          >
            <img className="menu" src={MenuIcon} alt="" />
          </button>
        </div>
        <Link to=""> aboutMe </Link>
        <Link to="/projects"> Portfolio </Link>
        <Link to="/Resume"> Resume </Link>
        <Link to="/Contact"> Contact </Link>
      </div>
    </div>
  );
}

export default Navbar;
