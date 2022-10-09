import React from 'react';
import { Button } from '@salesforce/design-system-react';
import { useNavigate } from 'react-router-dom';
import $ from 'jquery';

const carouselText = [
    { text: " Tejas M R" },
    { text: " a software engineer" }
]

var count = 0;

async function typeSentence(sentence, eleRef, delay = 100) {
    const letters = sentence.split("");
    while (count < letters.length) {
        await waitForMs(delay);
        $(eleRef).append(letters[count]);
        count++;
    }
    return;
}

async function deleteSentence(eleRef) {
    const sentence = $(eleRef).html();
    const letters = sentence.split("");
    while (count > 0) {
        await waitForMs(100);
        letters.pop();
        $(eleRef).html(letters.join(""));
        count--;
    }
}

function waitForMs(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function carousel(carouselList, eleRef) {
    var i = 0;
    while (true) {
        await typeSentence(carouselList[i].text, eleRef);
        await waitForMs(1500);
        await deleteSentence(eleRef);
        await waitForMs(500);
        i++
        if (i >= carouselList.length) { i = 0; }
    }
}


export default function About() {
    const navigate = useNavigate();
    React.useEffect(() =>  {
        $(document).ready(async () => {
            carousel(carouselText, "#sentence")
        });
    }, [])
    return (
        <>
            <div className="slds-brand-band slds-brand-band_small slds-brand-band_group"></div>
            <div className="slds-box slds-text-align_center">
                <div className="typing-container">
                    <span id="sentence" style={{ fontSize: "2rem", color: "#000" }} className="slds-p-top--xx-small slds-text-heading--large">I am</span>
                    <span className="input-cursor"></span>
                </div>
                <div className="slds-m-top--large"></div>
                <Button style={{ backgroundColor: "#0073b1", color: "white" }} label="LinkedIn" onClick={() => {
                    window.location.href = "https://linkedin.com/in/tejas-m-r";
                }}></Button>
                <Button style={{ backgroundColor: "#24292f", color: "white" }} label="Github" onClick={() => {
                    window.location.href = "https://github.com/tejasmr";
                }}></Button>
                <Button style={{ backgroundColor: "#338ccc", color: "white" }} label="Twitter" onClick={() => {
                    window.location.href = "https://twitter.com/MrTejasMR"
                }}></Button>
                <div className="slds-m-top--xx-large"></div>
            </div>

            <div className="slds-box-center" style={{ margin: "1rem" }}>
                <div className="slds-box slds-text-align_center" style={{ maxWidth: "600px", backgroundColor: "#16325c", borderRadius: "10px" }}>

                    <div style={{ padding: "1rem 0.5rem 0.5rem 0.5rem" }} className="slds-text-color_inverse slds-p-top--x-large slds-text-heading--large">I like to</div>
                    <div style={{ padding: "0.5rem 1.5rem 0.5rem 1.5rem", fontSize: "1rem" }} className='slds-text-color_inverse slds-text-heading--regular slds-p-bottom--x-large'>
                        solve engineering and business problems with the best technologies available
                    </div>

                    <Button style={{ margin: "0.5rem 0.5rem 0.5rem 0rem" }} label="View my Resumé" onClick={() => {
                        navigate('/resume')
                    }}></Button>

                    <Button style={{ margin: "0.5rem 0rem 0.5rem 0.5rem" }} label="My Projects" onClick={() => {
                        navigate('/projects')
                    }}></Button>

                    <div style={{ padding: "0.5rem 1.1rem 1rem 1.1rem" }}>
                        <div className="slds-text-color_inverse" style={{ fontWeight: "normal" }}>
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