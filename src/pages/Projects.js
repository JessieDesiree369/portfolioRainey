import React from "react";
import ProjectItem from "../components/ProjectItem";
import Proj1 from '../Assets/PWGen1.png'
import Proj2 from '../Assets/CodeQuiz2.png'
import Proj3 from '../Assets/WDSched3.png'
import Proj4 from '../Assets/WthrOrNot4.png'

import "../styling/Projects.css"


function Projects() {
  return (
    <div className="projects">
      <h1> My Projects</h1>
      <div className="projectList">
        <ProjectItem name="Random Password Generator" image={Proj1} />
        <ProjectItem name="Coding Quiz Game" image={Proj2} />
        <ProjectItem name="Work Day Scheduler" image={Proj3} />
        <ProjectItem name="Weather Forecast App" image={Proj4} />
      </div>
    </div>
  );
}

export default Projects;
