import { 
    GlobalNavigationBar, 
    GlobalNavigationBarLink, 
    GlobalNavigationBarRegion, 
    GlobalNavigationBarLabel,
    DynamicIcon
} from "@salesforce/design-system-react";
import React from "react";
import { useNavigate } from "react-router-dom";

import {
    aboutElement,
    resumeElement,
    projectsElement,
    contactElement,
    aboutLink,
    resumeLink,
    projectsLink,
    contactLink
} from '../utils/metadata';
import UnderDevelopment from "./UnderDevelopment";

const Navbar = (props) => {
    const [activeElement, setActiveElement] = React.useState(aboutElement);
    const navigate = useNavigate();
    return (
        <>
            <GlobalNavigationBar>
                <GlobalNavigationBarRegion region="primary" navigation>
                    <DynamicIcon title="Tejas M R" variant="waffle"/> 
                    <GlobalNavigationBarLink
                        label="Tejas M R" 
                        onClick={() => {
                            setActiveElement(aboutElement);
                            navigate(aboutLink);
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
                            navigate(aboutLink);
                        }}
                    />
                    <GlobalNavigationBarLink 
                        active={activeElement === resumeElement}
                        label="Resumé" 
                        id={resumeElement} 
                        onClick={() => {
                            setActiveElement(resumeElement);
                            navigate(resumeLink);
                        }}
                    />
                    <GlobalNavigationBarLink 
                        active={activeElement === projectsElement}
                        label="Projects" 
                        id={projectsElement} 
                        onClick={() => {
                            setActiveElement(projectsElement);
                            navigate(projectsLink);
                        }}
                    />
                    <GlobalNavigationBarLink 
                        active={activeElement === contactElement}
                        label="Contact" 
                        id={contactElement} 
                        onClick={() => {
                            setActiveElement(contactElement);
                            navigate(contactLink);
                        }}
                    />
                </GlobalNavigationBarRegion>
            </GlobalNavigationBar>
        </>
    );
}

export default Navbar;