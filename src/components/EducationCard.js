import React from 'react';
import './EducationCard.css';

export default function EducationCard(props) {
    const education = props.education;
    return (
        <div className="slds-box-center" style={{ margin: "1rem" }}>
            <div className="slds-box slds-text-align_center" style={{ textAlign: "left", maxWidth: "600px", borderRadius: "10px", boxShadow: "4px 3px 8px 1px #969696" }}>

                <div id="educationCard" style={{display: "flex"}}>
                    <div>
                        <div
                            style={{ padding: "0.5rem 0.5rem 0rem 0.5rem", fontSize: "20px", color: "#16325c" }}>
                            {education.duration}
                        </div>

                        <div
                            style={{ padding: "0rem 0.5rem 0rem 0.5rem", fontSize: "16px", color: "#16325c", fontWeight: "normal" }}>
                            {education.degree}
                        </div>

                        <div
                            style={{ padding: "1rem 0.5rem 0rem 0.5rem", fontSize: "16px", color: "#16325c", fontWeight: "normal" }}>
                            {education.college}
                        </div>

                        <div
                            style={{ padding: "1rem 0.5rem 1rem 0.5rem", fontSize: "16px", color: "#16325c", fontWeight: "normal" }}>
                            {education.location}
                        </div>
                    </div>

                    <div style={{ fontWeight: "normal", fontSize: "14px", paddingTop: "0.5rem" }}>
                        {education.description}
                    </div>
                </div>

            </div>
        </div>
    )
}
