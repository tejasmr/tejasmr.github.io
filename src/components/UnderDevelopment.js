import React from 'react'
import { AlertContainer, Alert, Icon, IconSettings } from '@salesforce/design-system-react';
import { useNavigate } from 'react-router-dom';

export default function UnderDevelopment() {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = React.useState(true);
    return (
        <>
            {isOpen ? (
                    <Alert
                        dismissible
                        icon={<Icon 
                            category="utility"
							name="thunder"
                        />}
                        labels={{
                            heading: 'This website is still under development. Thank you for your patience.',
                            headingLink: 'Visit Github',
                        }}
                        onClickHeadingLink={() => {
                            window.location.href = 'https://github.com/tejasmr/tejasmr.github.io'
                        }}
                        onRequestClose={() => {
                            setIsOpen(false);
                        }}
                    />
            ) : null}
        </>
    )
}
