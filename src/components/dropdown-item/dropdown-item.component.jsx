import React from 'react';

import './dropdown-item.styles.scss';

const DropdownItem = ({ item, uid, cartItems, clearItem }) => {
    const { title, price, quantity, imgUrl } = item;
    return (
        <div className="dropdown-item" >
            <div className="dropdown-item__img-box">
                <img src={imgUrl} alt="item-img" className="dropdown-item__img" />
            </div>

            <div className="dropdown-item__content">
                <span className="dropdown-item__title">{title}</span>
                <span className="dropdown-item__price">${price} X {quantity}</span>
                <span className="dropdown-item__remove" onClick={() => clearItem({ item, uid, cartItems })} >REMOVE</span>
            </div>
        </div>
    );
}

export default DropdownItem;