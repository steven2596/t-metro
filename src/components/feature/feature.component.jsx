import React from 'react';

import Button from '../button/button.component';

import './feature.styles.scss';

import featureImg from '../../assets/images/feature.jpg';

const Feature = () => {
    return (
        <div className="feature" >
            <div className="feature__left">
                <div className="left__content">
                    <h2 className="left__title--1">The moment forever</h2>
                    <h2 className="left__title--2">Twice season's greeting 2021</h2>
                    <p className="left__text">
                        Special thanks from Twice to Onces for making every year
                        beautiful and memorable. Twice is with you forever and
                        Onces are their life
                    </p>
                    <a href="/shop/merchs/3001">
                        <Button >View Details</Button>
                    </a>
                </div>
                <div className="feature__background" ></div>
            </div>



            <div className="feature__right">
                <img src={featureImg} alt="feature-img" className="right__img" />
            </div>
        </div>
    );
}

export default Feature;