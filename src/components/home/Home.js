import React from "react";
import "./Home.scss";
import Showcase from "../showcase/Showcase";
import Projects from "../projects/Projects";
import Contact from "../contact/Contact";
import Footer from "../footer/Footer";

function Home() {
  return (
    <div className="Home">
      <Showcase />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
