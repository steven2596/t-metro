import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, round, googleButton, ...props }) => {
    return (
        <button
            className=
            {
                `custom-button 
            ${round ? 'round' : ''}
            ${googleButton ? 'google-btn' : ''}`
            }
            {...props}
        >
            {children}
        </button>
    )
}

export default CustomButton;