import React, { useState } from 'react';
import ReactDom from 'react-dom'

import './navigation.styles.scss';
import sprite from '../../assets/icons/sprite.svg';

const NavigationMenu = ({ currentUser }) => {
    const [menu, setMenu] = useState(false);

    return ReactDom.createPortal(
        <div className={`navigation ${menu ? 'navigation-active' : ''} `} >
            <div className="navigation__button-container" onClick={() => setMenu(!menu)} >
                <figure className="navigation__menu-button">&nbsp;</figure>
            </div>

            <div className="navigation__background" ></div>
            <div className="navigation__menu-container" >
                <a href="/search">
                    <svg className="navigation__search-icon" >
                        <use href={sprite + '#icon-search'} />
                    </svg>
                </a>
                <ul className="navigation__menu">
                    <li className="navigation__item">
                        <a href="/" >Home</a>
                    </li>
                    <li className="navigation__item">
                        <a href="/shop/albums" >Albums</a>
                    </li>
                    <li className="navigation__item">
                        <a href="/shop/photobooks" >Photobooks</a>
                    </li>
                    <li className="navigation__item">
                        <a href="/shop/merchs">Merch</a>
                    </li>
                    <li className="navigation__item">
                        <a href="/checkout">Checkout</a>
                    </li>
                    <li className="navigation__item">
                        {
                            currentUser ?
                                <a href='#' className="navigation__link">Log Out</a>
                                :
                                <a href="/login" className="navigation__link">Sign In / Register</a>
                        }
                    </li>
                </ul>
            </div>
        </div>, document.getElementById('navigation')
    )
};

export default NavigationMenu;