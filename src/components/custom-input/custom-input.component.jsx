import React from 'react';

import './custom-input.styles.scss';

const CustomInput = ({ handleChange, value, label, ...others }) => {
    return (
        <div className="custom-input__group" >
            <input className="custom-input__input" onChange={handleChange} {...others} />
            <label
                className=
                {
                    `custom-input__label
                    ${value.length > 0 ? 'smallLabel' : ''}`
                }
            >{label}</label>
        </div>
    );
}

export default CustomInput;