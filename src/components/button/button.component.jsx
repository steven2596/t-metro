import React from 'react';

import './button.styles.scss';

const Button = ({ children, square, primary, ...others }) => {
    return (
        <div
            className={`button ${square ? 'btn-square' : ''} ${primary ? 'btn-primary' : ''}`} {...others} >
            {children}
        </div>
    );
}

export default Button;