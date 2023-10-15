// src/components/Projects.js

import React from "react";

const Projects = () => {
  return (
    <section style={sectionStyle} id="projects">
      <h2>Projects</h2>
      {'BBC_news,VIT_news,GEARAGETECH,REPAIRPOINT,MUSICON'}
    </section>
  );
};

const sectionStyle = {
  backgroundColor: "red",
  padding: "20px",
};

export default Projects;
