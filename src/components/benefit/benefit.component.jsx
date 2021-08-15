import React from 'react';

import './benefit.styles.scss';

import benefitData from './benefit.data';
import BenefitBox from '../benefit-box/benefit-box.component';

const BenefitSection = () => {
    return (
        <div className="benefit-section" >
            <h1 className="benefit-section__heading">Only on T-Metro</h1>
            <div className="benefit-section__benefits" >
                {
                    benefitData.map((benefit, index) => <BenefitBox id={index} benefit={benefit} />)
                }
            </div>
        </div>
    );
}

export default BenefitSection;