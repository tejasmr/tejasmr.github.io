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
                <div className="slds-m-top--xx-large"></div>
            </div>
            
            <div className="slds-box-center">
                <div className="slds-box slds-text-align_center" style={{width: "500px", backgroundColor:"#16325c", borderRadius: "10px"}}>
                    <div style={{padding:"1rem 0.5rem 0.5rem 0.5rem"}} className="slds-text-color_inverse slds-p-top--x-large slds-text-heading--large">I like to</div>
                    <div style={{padding:"0.5rem 1.5rem 0.5rem 1.5rem", fontSize: "1rem"}} className='slds-text-color_inverse slds-text-heading--regular slds-p-bottom--x-large'>
                    solve engineering and business problems with the best technologies available    
                    </div> 
                    <div style={{padding:"0.5rem 1.1rem 1rem 1.1rem"}}>
                        <div className="slds-text-color_inverse" style={{fontWeight: "normal"}}>
                            I am working as a Software Engineer at Endur Shell Energy. I am 
                            interested in using various technologies to solve problems. I 
                            have been contributing to open source projects like opencv and 
                            aws-cdk, creating OS projects like tezzgl and tezz-pylsd, 
                            packages published like table-creator (npmjs), selenium-
                            chromedriver and pylsd (pypi) and PythonPrint (nuget), github 
                            actions like genREADME and mongoexport.
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}