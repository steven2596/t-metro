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
                <h2 className="content__title">Yes, I am Sana</h2>
                <p className="content__text">
                    Here comes the first photobook of Sana for
                    'Yes, I am' photobook series. Can't wait to
                    see Sana's alluring beauty? Order now.
                </p>
                <a href="/shop/photobooks/2000" >
                    <Button>View Details</Button>
                </a>
            </div>
        </div>
    );
}

export default Header;