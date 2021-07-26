import React from "react";
import { IconContext } from "react-icons/lib";
import { CgMenuMotion } from "react-icons/cg";

import "bootstrap/dist/css/bootstrap.min.css";

import "././navbar.css";

function Navbar() {
  return (
    <>
      <IconContext.Provider value={{ color: "#ff6363", size: "50px" }}>
        <nav className="navbar navbar-expand-lg bg-transparent fixed-top">
          <a className="navbar-brand pl-5" href="#home" rel="noreferrer">
            Rochelle Frazier
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span>
              <CgMenuMotion />
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#home">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
