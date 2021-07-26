import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./components/Navbar/navbar";
import Home from "./components/Home/home";
// import Landing from "./components/Landing/landing";
import About from "./components/About/about";
import Skills from "./components/Skills/skills";
import Projects from "./components/Projects/project";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Home />
      <Projects />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </Router>
  );
}

export default App;
