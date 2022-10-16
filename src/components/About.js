import React from 'react';
import { Button } from '@salesforce/design-system-react';
import $ from 'jquery';
import './About.css';

const carouselText = [
    { text: " Tejas M R" },
    { text: " a software engineer" }
]

let count = 0;

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
    React.useEffect(() => {
        $('#sentence').text = "I am";
        $(document).ready(async () => {
            carousel(carouselText, "#sentence")
        });
    }, [])
    return (
        <>
            <div id="about">
                <div style={{backgroundPosition: "center center !important"}} className="slds-brand-band slds-brand-band_medium slds-brand-band_group"></div>
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

                <div className="slds-box-center" style={{ margin: "1rem", marginTop: "3rem" }}>
                    <div className="slds-box slds-text-align_center" style={{ maxWidth: "600px", borderRadius: "10px", boxShadow: "4px 3px 8px 1px #969696" }}>

                        <div style={{ padding: "1rem 0.5rem 0.5rem 0.5rem", color: "#16325c" }} className="slds-text-color_inverse slds-p-top--x-large slds-text-heading--large">I like to</div>
                        <div style={{ padding: "0.5rem 1.5rem 0.5rem 1.5rem", fontSize: "1rem", color: "#16325c" }} className='slds-text-color_inverse slds-text-heading--regular slds-p-bottom--x-large'>
                            solve engineering and business problems with the best technologies available
                        </div>

                        <Button style={{ margin: "0.5rem 0.5rem 0.5rem 0rem", color: "#16325c", boxShadow: "2px 2px 2px 1px #969696" }} label="View my Resumé" href="#resume"></Button>

                        <Button style={{ margin: "0.5rem 0rem 0.5rem 0.5rem", color: "#16325c", boxShadow: "2px 2px 2px 1px #969696" }} label="My Projects" href="#projects"></Button>

                        <div style={{ padding: "0.5rem 1.1rem 1rem 1.1rem" }}>
                            <div className="slds-text-color_inverse" style={{ fontWeight: "normal", color: "#16325c" }}>
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
            </div>
        </>
    )
}