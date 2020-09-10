import React from "react";
import Projects from "../projects/Projects";
import Footer from "../footer/Footer";
import './ProjectPage.scss';

const ProjectPage = () => {
  return (
    <div className="projectPage">
        <div className="projectPage__header">
            <h1>Latest projects</h1>
        </div>
      <Projects />
      <div style={{marginBottom: "50px"}}>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectPage;
