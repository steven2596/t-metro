import React from 'react';

import './benefit-box.styles.scss';

import sprite from '../../assets/icons/sprite.svg';

const BenefitBox = ({ benefit }) => {
    const { title, description, icon } = benefit;

    return (
        <div className="benefitBox">
            <svg className="benefitBox__icon">
                <use href={sprite + icon} />
            </svg>
            <h3 className="benefitBox__title">{title}</h3>
            <p className="benefitBox__description">{description}</p>
        </div>
    );
}

export default BenefitBox;