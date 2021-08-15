import React from 'react';

import './footer.styles.scss';

import sprite from '../../assets/icons/sprite.svg';

const Footer = () => {
    return (
        <footer className="footer">
            <h3 className="footer__title">CONNECT</h3>

            <ul className="footer__icons">
                <li className="footer__icon-item" >
                    <a href="https://www.facebook.com/JYPETWICE" className="footer__icon-link" target="_blank" rel="noopener noreferrer">
                        <svg className="footer__icon" >
                            <use href={sprite + '#icon-facebook'} />
                        </svg>
                    </a>
                </li>
                <li className="footer__icon-item" >
                    <a href="https://www.instagram.com/twicetagram/" className="footer__icon-link" target="_blank" rel="noopener noreferrer">
                        <svg className="footer__icon" >
                            <use href={sprite + '#icon-instagram'} />
                        </svg>
                    </a>
                </li>
                <li className="footer__icon-item" >
                    <a href="https://www.youtube.com/channel/UCzgxx_DM2Dcb9Y1spb9mUJA" className="footer__icon-link" target="_blank" rel="noopener noreferrer">
                        <svg className="footer__icon" >
                            <use href={sprite + '#icon-youtube'} />
                        </svg>
                    </a>
                </li>
                <li className="footer__icon-item" >
                    <a href="https://twitter.com/JYPETWICE" className="footer__icon-link" target="_blank" rel="noopener noreferrer">
                        <svg className="footer__icon" >
                            <use href={sprite + '#icon-twitter'} />
                        </svg>
                    </a>
                </li>
            </ul>

            <p className="footer__text">
                Copyright by T-METRO Co, Ltd. All rights reserved.
            </p>
        </footer>
    );
}

export default Footer;
