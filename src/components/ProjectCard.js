import { Button, ButtonGroup } from '@salesforce/design-system-react'
import React from 'react'

export default function ProjectCard(props) {
    return (
        <div className="slds-box-center" style={{ margin: "1rem" }}>
            <div className="slds-box slds-text-align_center" style={{ textAlign: "left", maxWidth: "600px", borderRadius: "10px", boxShadow: "4px 3px 8px 1px #969696" }}>

                <div id="projectCard">
                    <div
                        style={{ padding: "0.5rem 0.5rem 0rem 0.5rem", fontSize: "20px", color: "#16325c" }}>
                        {props.project.name}
                    </div>

                    <div
                        style={{ padding: "0rem 0.5rem 0rem 0.5rem", fontSize: "16px", color: "#16325c", fontWeight: "normal" }}>
                        {props.project.role}
                    </div>

                    <div
                        style={{ padding: "1rem 0.5rem 0rem 0.5rem", fontSize: "12px", color: "#16325c" }}>
                        <ButtonGroup variant="list">
                            {props.project.actions.map((action) => <Button style={{boxShadow: "1px 1px 1px 1px #969696"}} label={action.text} onClick={() => {
                                window.location.href = action.link;
                            }} />)}
                        </ButtonGroup>
                    </div>

                    <div style={{ fontWeight: "normal", fontSize: "14px", padding: "1rem 0.5rem 0rem 0.5rem", textAlign: "justify" }}>
                        {props.project.description}
                    </div>
                </div>
            </div>
        </div>
    )
}
