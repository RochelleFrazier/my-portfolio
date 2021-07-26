import React from "react";
// import WOW from "wow.js";
import Resume from "../../Rochelle_Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import "././about.css";

function About() {
  //   new WOW().init();

  return (
    <>
      <div className="about-section" id="about">
        <div className="container">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
              <div className="about-text-wrapper ">
                <h1 className="about-title wow animate__animated animate__fadeInDown">
                  About Me
                </h1>
                <h3 className="about-subtitle wow animate__animated animate__fadeIn">
                  Front-end Developer
                </h3>
                <br />
                <p className="about-description animate__animated animate__fadeInUp ">
                  I'm a self taught web developer and designer based in
                  Harrisburg, Pennsylvania. I'm currently looking for employment
                  where I can expanding my coding skills and apply them. My
                  passion is to use technology based solutions, to help solve
                  real world challenges.
                </p>
              </div>
            </div>
            <div className="col-md-2"></div>
          </div>
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8 mt-3 ">
              <div className="button-wrapper">
                {" "}
                <a
                  className="ghost_btn "
                  target="_blank"
                  rel="noreferrer"
                  href={Resume}
                >
                  <AiOutlineDownload /> {"  "}
                  Resume
                </a>
              </div>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
