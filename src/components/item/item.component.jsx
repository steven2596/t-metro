import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { addItem } from '../../redux/cart/cart.actions';
import { selectCurrentUserID } from '../../redux/user/user.selectors';
import { selectCartItems } from '../../redux/cart/cart.selectors';

import './item.styles.scss';

const Item = ({ item, addItem, uid, cartItems }) => {
    const { id, title, price, imgUrl, type } = item;

    return (
        <div className="item" >
            <div className="item__img-container" >
                <div className="item__overlay" />
                <div className="item__button" onClick={() => addItem({ cartItems, item, uid })} >Add to Cart</div>
                <img src={imgUrl} alt="product-img" className="item__img" />
            </div>
            <a href={`/shop/${type}s/${id}`} className="router-link">
                <div className="item__detail" >
                    <h4 className="item__title" >{title}</h4>
                    <span className="item__price" >${price}</span>
                </div >
            </a >
        </div >
    );
}

const mapStateToProps = createStructuredSelector({
    uid: selectCurrentUserID,
    cartItems: selectCartItems
})

const mapDispatchToProps = (dispatch) => ({
    addItem: (item) => dispatch(addItem(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(Item);