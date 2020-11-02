import React, { useState } from 'react';
import ProjectData from '../data/ProjectData/ProjectData'
import Particle from '../Header/HeaderMain/Particle';
import ProjectCard from '../ProjectCard/ProjectCard';
import './Project.css';
const Project = () => {
  const [projects] = useState(ProjectData);

  return (
    <section id="projects" className="py-5 ">
      <br/>
      <h1 className='text-center font-weight-bold text-warning my-2' data-aos="zoom-in-down">PROJECTS</h1>
      <div className="container row w-100 mx-auto justify-content-center special-section">
          {
            projects.map(singleProject => <ProjectCard singleProject={singleProject} key={singleProject.id}></ProjectCard>)
          }
        </div>
        <div className='particles'>
          <Particle particleParams={"projects"}/>
        </div>
    </section>
  );
};

export default Project;