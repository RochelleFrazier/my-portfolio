import React from "react";
// import WOW from "wow.js";
import { FiGithub } from "react-icons/fi";
import { IoLogoGoogle } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import Code from "../../landing.png";

import "././home.css";

function Home() {
  //   new WOW().init();
  return (
    <>
      <div className="home-section" id="home">
        <div className="container">
          <div className="row ">
            <div className="col-xl-6 ">
              <div className="home-text-wrapper">
                <h1 className="home-heading">
                  Hi, I am <span>Rochelle!&nbsp;&nbsp;&nbsp;</span>
                </h1>
                <h3 className="home-title">Front-end Developer</h3>
                <p className="home-subtitle">
                  A Junior Developer passionate about writing clean and efficent
                  code while improving my UI/UX design knowledge.
                </p>
              </div>
            </div>

            <div className="col-xl-6 ">
              <div className="home-img-wrapper">
                <img src={Code} alt="#" className="img-fluid home-img" />
              </div>
            </div>
          </div>
        </div>
        <div className="icon-bar">
          <a
            href="https://github.com/RochelleFrazier"
            target="_blank"
            rel="noreferrer"
            className="github"
          >
            <FiGithub />
          </a>
          <a
            href="mailto:rochellesakura@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="google"
          >
            <IoLogoGoogle />
          </a>
          <a
            href="https://www.linkedin.com/in/rochellejfrazier/"
            target="_blank"
            rel="noreferrer"
            className="linkedin"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </>
  );
}

export default Home;
