import React from 'react'
import { Alert, Icon } from '@salesforce/design-system-react';

export default function UnderDevelopment() {
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
                            heading: 'This website is still under testing. Thank you for your patience.',
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
