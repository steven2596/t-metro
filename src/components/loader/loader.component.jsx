import React from 'react';
import './loader.styles.scss';

const Loader = () => {
    return (
        <div className="loader__screen">
            <div className="loader__container">
                <div className="loader__bar"></div>
                <div className="loader__bar"></div>
                <div className="loader__bar"></div>
                <div className="loader__bar"></div>
                <div className="loader__bar"></div>
                <div className="loader__bar"></div>
                <div className="loader__bar"></div>
            </div>
        </div>
    );
}

export default Loader;