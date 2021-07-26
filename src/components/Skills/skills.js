import React from "react";
// import WOW from "wow.js";
import "././skills.css";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import { SiProtoDotIo } from "react-icons/si";
import { SiJavascript } from "react-icons/si";

function Skills() {
  //   new WOW().init();

  return (
    <>
      <div className="skills-section" id="skills">
        <div className="skill">
          <h1 className="skname">My Skills</h1>
          <div className="skillsets">
            <div className="sk flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <i>
                    <SiHtml5 />
                  </i>
                  <br />
                  <br />
                  <h3 className="skill-title">HTML5</h3>
                </div>
                <div className="flip-card-back">
                  <h1 className="card-back-title">HTML5</h1>
                  <br />
                  <p className="card-back-content">+2 Years Experience</p>
                </div>
              </div>
            </div>
            <div className="sk flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <i>
                    <SiCss3 />
                  </i>
                  <br />
                  <br />
                  <h3 className="skill-title">CSS3</h3>
                </div>
                <div className="flip-card-back">
                  <h1 className="card-back-title">CSS3</h1>
                  <br />
                  <p className="card-back-content">+2 Years Experience</p>
                  <p className="card-back-content">CSS-Grid</p>
                </div>
              </div>
            </div>
            <div className="sk flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <i>
                    <SiJavascript />
                  </i>
                  <br />
                  <br />
                  <h3 className="skill-title">Javascript</h3>
                </div>
                <div className="flip-card-back">
                  <h1 className="card-back-title">Javascript</h1>
                  <br />
                  <p className="card-back-content">+2 Years Experience</p>
                </div>
              </div>
            </div>
            <div className="sk flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <i>
                    <SiProtoDotIo />
                  </i>
                  <br />
                  <br />
                  <h3 className="skill-title">UI/UX</h3>
                </div>
                <div className="flip-card-back">
                  <h1 className="card-back-title">UI/UX</h1>
                  <br />
                  <p className="card-back-content">+&#189; Years Experience</p>
                </div>
              </div>
            </div>
            <div className="sk flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <i>
                    <SiBootstrap />
                  </i>
                  <br />
                  <br />
                  <h3 className="skill-title">Bootstrap</h3>
                </div>
                <div className="flip-card-back">
                  <h1 className="card-back-title">Bootstrap 3 & 4</h1>
                  <br />
                  <p className="card-back-content">+2 Years Experience</p>
                </div>
              </div>
            </div>
            <div className="sk flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <i>
                    <SiReact />
                  </i>
                  <br />
                  <br />
                  <h3 className="skill-title">React</h3>
                </div>
                <div className="flip-card-back">
                  <h1 className="card-back-title">React</h1>
                  <br />
                  <p className="card-back-content">+1 Years Experience</p>
                  <p className="card-back-content">React Bootstrap</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
