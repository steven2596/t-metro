import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUserID } from '../../redux/user/user.selectors';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { addItem, removeItem, clearItem, clearCart } from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';

const CheckoutItem = ({ item, addItem, removeItem, clearItem, uid, cartItems }) => {
    const { title, price, type, imgUrl, quantity } = item;

    const total = (price * quantity).toFixed(2);

    return (
        <div className="checkout-item" >
            <div className="checkout-item__img-box" >
                <img src={imgUrl} alt="checkout-img" className="checkout-item__img" />
            </div>

            <div className="checkout-item__details" >
                <span className="checkout-item__title">{title}</span>
                <span className="checkout-item__type">{type}</span>
                <span className="checkout-item__price">$ {price}</span>
                <span className="checkout-item__remove-btn" onClick={() => clearItem({ item, uid, cartItems })} >remove item</span>
            </div>

            <div className="checkout-item__right" >
                <div className="checkout-item__counter" >
                    <span
                        className="checkout-item__btn"
                        onClick={() => removeItem({ item, uid, cartItems })}
                    >&#8722;
                    </span>
                    <span className="checkout-item__count" >{quantity}</span>
                    <span
                        className="checkout-item__btn"
                        onClick={() => addItem({ item, uid, cartItems })}
                    >
                        &#43;
                    </span>
                </div>
                <span className="checkout-item__total" >$ {total}</span>
            </div>
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    uid: selectCurrentUserID,
    cartItems: selectCartItems
})

const mapDispatchToProps = (dispatch) => ({
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item)),
    clearItem: item => dispatch(clearItem(item)),
    clearCart: () => dispatch(clearCart())
})

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutItem);