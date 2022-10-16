import React from 'react'
import projects from '../data/projects'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <>
      <div id="projects">
        <div style={{ height: "39px" }}></div>
        <div
          className="slds-box-center"
          style={{ margin: "1rem", display: "flex", alignContent: "center", justifyContent: "center" }}>
          <div
            style={{ fontSize: "40px", padding: "1rem 0.5rem 0.5rem 0.5rem", color: "#16325c" }}
            className="slds-text-color_inverse slds-p-top--x-large slds-text-heading--large">
            Projects
          </div>
          <div className="slds-text-color_inverse" style={{ fontSize: "14px", fontWeight: "normal", color: "#16325c", marginTop: "1rem", maxWidth: "500px", textAlign: "center" }}>
            I have worked on projects funded by IISc and IEEE. I have also 
            contributed to open-source projects like opencv and aws-cdk. 
            I have created and published multiple libraries and packages 
            in various languages to various package manager repositories. 
          </div>
          {projects.map((proj) => <ProjectCard project={proj} />)}
        </div>
      </div>
    </>
  )
}
