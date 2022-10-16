import React from 'react'
import experiences from '../data/experiences'
import ExperienceCard from './ExperienceCard'
import educations from '../data/educations'
import EducationCard from './EducationCard'

export default function Resume() {
  return (
    <>
      <div id="resume">
        <div style={{ height: "39px" }}></div>
        <div
          className="slds-box-center"
          style={{ margin: "1rem", display: "flex", alignContent: "center", justifyContent: "center" }}>
          <div
            style={{ fontSize: "40px", padding: "1rem 0.5rem 0.5rem 0.5rem", color: "#16325c" }}
            className="slds-text-color_inverse slds-p-top--x-large slds-text-heading--large">
            Resumé
          </div>
          <div>
            <div style={{ fontSize: "25px", textAlign: "start", margin: "1rem", marginBottom: "1.5rem" }}>Experience</div>
            {experiences.map((exp) => <ExperienceCard experience={exp} />)}
          </div>
          <div>
            <div style={{ fontSize: "25px", textAlign: "start", margin: "1rem", marginBottom: "1.5rem" }}>Education</div>
            {educations.map((edu) => <EducationCard education={edu} />)}
          </div>
        </div>
      </div>
    </>
  )
}
