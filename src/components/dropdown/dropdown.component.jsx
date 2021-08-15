import React from 'react';
import ReactDom from 'react-dom'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartItemsCount, selectCartItemsAmount } from '../../redux/cart/cart.selectors';
import { selectCurrentUserID } from '../../redux/user/user.selectors';
import { clearItem, clearCart } from '../../redux/cart/cart.actions';

import './dropdown.styles.scss';

import { ReactComponent as EmptyCart } from '../../assets/icons/empty-cart.svg';

import DropdownItem from '../dropdown-item/dropdown-item.component';
import CustomButton from '../custom-button/custom-button.component';

const Dropdown = ({ dropdown, setDropdown, cartItems, cartItemsCount, cartItemsAmount, clearItem, clearCart, uid }) => {
    return ReactDom.createPortal(
        <div className={`dropdown__container ${dropdown ? 'dropdown-active' : ''}`}>
            <div className="dropdown" >
                <div className="dropdown__top">
                    {/* <svg className="top__cart-icon">
                        <use href={sprite + '#icon-cart'} />
                    </svg> */}

                    {/* <span className="top__count">{cartItemsCount ? cartItemsCount : 0}</span> */}
                    <span className="top__amount"><span>Total:</span> $ {cartItemsAmount ? cartItemsAmount.toFixed(2) : 0}</span>
                    <span className="top__exit-icon" onClick={() => setDropdown(false)}>&#10006;</span>
                </div>
                <div className="dropdown__content" >
                    <div className="dropdown__items" >
                        {
                            cartItems.length > 0 ? cartItems.map(cartItem =>
                                <DropdownItem
                                    key={cartItem.id}
                                    item={cartItem}
                                    cartItems={cartItems}
                                    uid={uid}
                                    clearItem={clearItem} />)
                                :
                                <div className="dropdown__empty-container" >
                                    <EmptyCart className="empty__svg" />
                                    <div className="empty__text-box" >
                                        <h3 className="empty__heading">Your cart is empty</h3>
                                        <p className="empty__text" >Looks like you haven't added any items to your cart yet</p>
                                    </div>

                                </div>

                        }
                    </div>
                    <Link to="/checkout" className="router-link" >
                        <CustomButton onClick={() => setDropdown(false)} >Proceed to Checkout</CustomButton>
                    </Link>
                </div>

            </div>
        </div>,
        document.getElementById('dropdown')
    )
}

const mapStateToProps = createStructuredSelector({
    uid: selectCurrentUserID,
    cartItems: selectCartItems,
    cartItemsCount: selectCartItemsCount,
    cartItemsAmount: selectCartItemsAmount
})

const mapDispatchToProps = (dispatch) => ({
    clearItem: (item) => dispatch(clearItem(item)),
    clearCart: () => dispatch(clearCart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Dropdown);