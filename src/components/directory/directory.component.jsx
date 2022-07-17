import React from 'react';
import './directory.styles.scss';

import img1 from '../../assets/images/directory-1.jpg';
import img2 from '../../assets/images/directory-2.jpeg';
import img3 from '../../assets/images/directory-3.jpeg';

const Directory = () => {
  return (
    <div className="directory">
      <h2 className="directory__heading">Browse Our Collections</h2>

      <div className="directory__image-box directory__image-box--1">
        <a href="/shop/albums">
          <img src={img1} alt="directory-img1" className="directory__image" />
          <div className="directory__overlay"></div>
          <h2 className="directory__title">albums</h2>
        </a>
      </div>

      <div className="directory__image-box directory__image-box--2">
        <a href="/shop/photobooks">
          <img src={img2} alt="directory-img2" className="directory__image" />
          <div className="directory__overlay"></div>
          <h2 className="directory__title">photobooks</h2>
        </a>
      </div>

      <div className="directory__image-box directory__image-box--3">
        <a href="/shop/merchs">
          <img src={img3} alt="directory-img3" className="directory__image" />
          <div className="directory__overlay"></div>
          <h2 className="directory__title">merch</h2>
        </a>
      </div>
    </div>
  );
};

export default Directory;
