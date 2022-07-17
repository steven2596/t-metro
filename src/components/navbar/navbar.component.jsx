import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/icons/logo.svg';
import sprite from '../../assets/icons/sprite.svg';
import Dropdown from '../dropdown/dropdown.component';
import NavigationMenu from '../navigation/navigation.component';

import './navbar.styles.scss';

const Navbar = ({ currentUser, signOutStart }) => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar__logo-box">
        <Link to="/" className="router-link">
          <Logo className="navbar__logo" />
        </Link>
      </div>

      <ul className="navbar__right">
        <li className="navbar__item">
          <a href="/shop/albums">Albums</a>
        </li>

        <li className="navbar__item">
          <a href="/shop/photobooks">Photobooks</a>
        </li>
        <li className="navbar__item">
          <a href="/shop/merchs">Merch</a>
        </li>

        <li className="navbar__item">
          <a href="/search">
            <svg className="navbar__icon">
              <use href={sprite + '#icon-search'} />
            </svg>
          </a>
        </li>
        {currentUser ? (
          <li className="navbar__item">
            <svg
              className="navbar__icon navbar__icon--user"
              onClick={() => signOutStart()}
            >
              <use href={sprite + '#icon-log-out'} />
            </svg>
          </li>
        ) : (
          <li className="navbar__item">
            <a href="/login">
              <svg className="navbar__icon navbar__icon--user ">
                <use href={sprite + '#icon-user'} />
              </svg>
            </a>
          </li>
        )}
        <li className="navbar__item">
          <svg
            className="navbar__icon navbar__icon--cart"
            onClick={() => setDropdown(!dropdown)}
          >
            <use href={sprite + '#icon-shopping-cart'} />
          </svg>
        </li>
      </ul>

      <NavigationMenu
        setDropdown={setDropdown}
        currentUser={currentUser}
        signOutStart={signOutStart}
      />
      <Dropdown dropdown={dropdown} setDropdown={setDropdown} />
    </nav>
  );
};

export default Navbar;
