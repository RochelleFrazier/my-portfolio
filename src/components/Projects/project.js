import React from "react";
// import WOW from "wow.js";
import "././project.css";
import { FiGithub } from "react-icons/fi";
import Google from "../../Google_Clone.png";
import Todo from "../../React_Todo.png";
import SignForm from "../../Sign_Form.png";
import Calculator from "../../React_Calculator_App.png";

function Projects() {
  //   new WOW().init();

  return (
    <>
      <div className="project-section" id="projects">
        <h1 className="my-projects">Latest Work</h1>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src={Google} alt="" className="project-img" />
            </div>
            <div className="col-md-6">
              <h2 className="project-name">Google Homepage Clone</h2>
              <p className="project-description">
                This is a clone of the Google Homepage using only Front-end
                code; HTML5, CSS3 and Bootstrap4. The user's only function is to
                use the search bar and button.
              </p>

              <a
                href="https://github.com/RochelleFrazier/Google_Copy.git"
                className="project-link"
                target="_blank"
                rel="noreferrer"
              >
                <i>
                  <FiGithub />
                </i>
                {"     "}
                View Code
              </a>
            </div>
          </div>
          <br />
          <br />
          <br />
          <div className="row">
            <div className="col-md-6">
              <h2 className="project-name">React Todo List</h2>
              <p className="project-description">
                This is a simple to-do application. I developed this application
                using React.
              </p>

              <a
                href="https://github.com/RochelleFrazier/React-Todo-List.git"
                style={{ float: "right" }}
                className="project-link"
                target="_blank"
                rel="noreferrer"
              >
                <i>
                  <FiGithub />
                </i>
                {"     "}
                View Code
              </a>
            </div>
            <div className="col-md-6">
              <img src={Todo} alt="" className="project-img" />
            </div>
          </div>
          <br />
          <br />
          <br />
          <div className="row">
            <div className="col-md-6">
              <img src={SignForm} alt="" className="project-img" />
            </div>
            <div className="col-md-6">
              <h2 className="project-name">Animated Sign In/Out Form</h2>
              <p className="project-description">
                This is a simple sign-in and sign-out form using Javascript to
                animate the right and left panel.
              </p>
              <a
                href="https://github.com/RochelleFrazier/SignIn-SignOut-Form.git"
                className="project-link "
                target="_blank"
                rel="noreferrer"
              >
                <i>
                  <FiGithub />
                </i>
                {"     "}
                View Code
              </a>
            </div>
          </div>
          <br />
          <br />
          <br />
          <div className="row">
            <div className="col-md-6">
              <h2 className="project-name">React Calculator Application</h2>
              <p className="project-description">
                This is a simple calculator application. I developed this
                application using React and CSS-Grid.
              </p>

              <a
                href="https://github.com/RochelleFrazier/React-Calculator.git"
                style={{ float: "right" }}
                className="project-link"
                target="_blank"
                rel="noreferrer"
              >
                <i>
                  <FiGithub />
                </i>
                {"     "}
                View Code
              </a>
            </div>
            <div className="col-md-6">
              <img src={Calculator} alt="" className="project-img" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
