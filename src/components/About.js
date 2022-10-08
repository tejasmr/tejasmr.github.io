import React from 'react';
import { Button } from '@salesforce/design-system-react';


export default function About() {
    return (
        <>
            <div className="slds-box slds-text-align_center">
                <div className="slds-p-top--x-large slds-text-heading--large">Tejas M R</div>
                <div className="slds-m-top--small"></div>
                <div style={{fontSize: "1rem"}} className='slds-text-heading--label slds-p-bottom--x-large'>Software Engineer</div> 
                <Button style={{backgroundColor: "#0073b1", color:"white"}} label="LinkedIn" onClick={() => {
                    window.location.href = "https://linkedin.com/in/tejas-m-r";
                }}></Button>
                <Button style={{backgroundColor: "#24292f", color:"white"}} label="Github" onClick={() => {
                    window.location.href = "https://github.com/tejasmr";
                }}></Button>
                <Button style={{backgroundColor: "#338ccc", color:"white"}} label="Twitter" onClick={() => {
                    window.location.href = "https://twitter.com/MrTejasMR"
                }}></Button>
            </div>
        </>
    )
}
