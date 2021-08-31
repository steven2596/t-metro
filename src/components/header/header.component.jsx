import React from 'react';

import './header.styles.scss';

import headerImg from '../../assets/images/header.jpg';
import Button from '../button/button.component';

const Header = () => {
    return (
        <div className="header">
            <div className="header__img-container">
                <img src={headerImg} alt="header" className="header__img" />
            </div>

            <div className="header__content">
                <span className="content__sub-title">new release</span>
                <h2 className="content__title">Taste of Love</h2>
                <p className="content__text">
                    TWICE has come back with their 10th mini album "Taste of Love".
                    The title track "Alcohol Free" is a new summer song made by
                    combining hip-hop with Bossa Nova.
                </p>
                <a href="/shop/albums/1000" >
                    <Button>View Details</Button>
                </a>
            </div>
        </div>
    );
}

export default Header;