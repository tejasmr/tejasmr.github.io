import React from 'react';
import './ExperienceCard.css';

export default function ExperienceCard(props) {
    const experience = props.experience;
    return (
        <div className="slds-box-center" style={{ margin: "1rem" }}>
            <div className="slds-box slds-text-align_center" style={{ textAlign: "left", maxWidth: "600px", borderRadius: "10px", boxShadow: "4px 3px 8px 1px #969696" }}>

                <div id="experienceCard" style={{display: "flex"}}>
                    <div>
                        <div
                            style={{ padding: "0.5rem 0.5rem 0rem 0.5rem", fontSize: "20px", color: "#16325c" }}>
                            {experience.duration}
                        </div>

                        <div
                            style={{ padding: "0rem 0.5rem 0rem 0.5rem", fontSize: "16px", color: "#16325c", fontWeight: "normal" }}>
                            {experience.designation}
                        </div>

                        <div
                            style={{ padding: "1rem 0.5rem 0rem 0.5rem", fontSize: "16px", color: "#16325c", fontWeight: "normal" }}>
                            {experience.company}
                        </div>

                        <div
                            style={{ padding: "1rem 0.5rem 1rem 0.5rem", fontSize: "16px", color: "#16325c", fontWeight: "normal" }}>
                            {experience.location}
                        </div>
                    </div>

                    <div style={{ fontWeight: "normal", fontSize: "14px", paddingTop: "0.5rem" }}>
                        {experience.description}
                    </div>
                </div>

            </div>
        </div>
    )
}
