import { 
    GlobalNavigationBar, 
    GlobalNavigationBarLink, 
    GlobalNavigationBarRegion, 
    DynamicIcon
} from "@salesforce/design-system-react";
import React from "react";
import {
    aboutElement,
    resumeElement,
    projectsElement
} from '../utils/metadata';

const Navbar = () => {
    const [activeElement, setActiveElement] = React.useState(aboutElement);
    return (
        <div id="navbar" style={{zIndex:"100"}}>
            <GlobalNavigationBar>
                <GlobalNavigationBarRegion region="primary" navigation>
                    <DynamicIcon style={{marginRight: "50px"}} title="Tejas M R" variant="waffle"/> 
                    <GlobalNavigationBarLink
                        label="tejasmr" 
                        onClick={() => {
                            setActiveElement(aboutElement);
                            window.scrollTo(0, 0);
                            window.location.href="";
                        }}
                    />
                </GlobalNavigationBarRegion>
                <GlobalNavigationBarRegion region="secondary" navigation>
                    <GlobalNavigationBarLink 
                        active={activeElement === aboutElement}
                        label="About" 
                        id={aboutElement} 
                        onClick={() => {
                            setActiveElement(aboutElement);
                            window.scrollTo(0, 0);
                            window.location.href="";
                        }}
                    />
                    <GlobalNavigationBarLink 
                        active={activeElement === resumeElement}
                        label="Resumé" 
                        id={resumeElement} 
                        href="#resume"
                        onClick={() => {
                            setActiveElement(resumeElement);
                            window.location.href = "#resume";
                        }}
                    />
                    <GlobalNavigationBarLink 
                        active={activeElement === projectsElement}
                        label="Projects" 
                        id={projectsElement} 
                        href="#projects"
                        onClick={() => {
                            setActiveElement(projectsElement);
                            window.location.href = "#projects";
                        }}
                    />
                </GlobalNavigationBarRegion>
            </GlobalNavigationBar>
        </div>
    );
}

export default Navbar;