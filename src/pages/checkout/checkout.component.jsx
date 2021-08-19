import React from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import EmptyText from '../../components/empty-text/empty-text.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
import { selectCartItems, selectCartItemsAmount } from '../../redux/cart/cart.selectors';

import './checkout.styles.scss';

const CheckOut = ({ cartItems, totalAmount }) => {
    return (
        <div className="checkout" >
            <h1 className="checkout__header" >Shopping Cart</h1>
            <div className="checkout__cart" >
                {
                    cartItems.length > 0 ?
                        cartItems.map(item => <CheckoutItem key={item.id} item={item} />) :
                        <EmptyText />
                }
            </div>
            <div className="checkout__summary" >
                <h3 className="summary__title">order summary</h3>
                <div className="summary__content" >
                    <div className="summary__item" >
                        <span >Amount</span>
                        <span >$ {totalAmount.toFixed(2)}</span>
                    </div>
                    <div className="summary__item" >
                        <span className="summary__text" >Shipping</span>
                        <span className="summary__number">FREE</span>
                    </div>
                    <div className="summary__item border-top" >
                        <span  >Total Amount</span>
                        <span >$ {totalAmount.toFixed(2)}</span>
                    </div>
                    <StripeCheckoutButton price={totalAmount.toFixed(2)} />
                </div>

            </div>
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    totalAmount: selectCartItemsAmount
})

export default connect(mapStateToProps)(CheckOut);