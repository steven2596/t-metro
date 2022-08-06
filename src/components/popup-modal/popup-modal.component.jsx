import React from 'react';
import ReactDom from 'react-dom';
import { Link } from 'react-router-dom';
import './popup-modal.styles.scss';

import { ReactComponent as LoginPopup } from '../../assets/icons/login-popup.svg';
import Button from '../button/button.component';

const PopupModal = ({ showLoginPopup, hideLoginPopup }) => {
  return ReactDom.createPortal(
    <div className={`popup-modal ${showLoginPopup ? 'popup-visible' : ''}`}>
      <div className="popup-modal__overlay"></div>
      <div className="popup-modal__content">
        <h3 className="popup-modal__heading">
          Please Log in or Register to continue
        </h3>
        <LoginPopup className="popup-modal__svg" />
        <Link to="/login" onClick={() => hideLoginPopup()}>
          <Button>Go to Sign-in Page</Button>
        </Link>
        <span
          className="popup-modal__exit-icon"
          onClick={() => hideLoginPopup()}
        >
          &#10006;
        </span>
      </div>
    </div>,
    document.getElementById('popup-modal')
  );
};

export default PopupModal;
