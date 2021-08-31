import UserActionTypes from '../user/user.types';
import CartActionTypes from './cart.types';

export const fetchCartSuccess = (cartItems) => ({
    type: CartActionTypes.FETCH_CART_SUCCESS,
    payload: cartItems
})

export const fetchCartFailure = (error) => ({
    type: CartActionTypes.FETCH_CART_FAILURE,
    payload: error
})

export const addItem = (item) => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
});

export const addItemWithCount = (item) => ({
    type: CartActionTypes.ADD_ITEM_WITH_COUNT,
    payload: item
})

export const removeItem = (item) => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: item
});

export const clearItem = (item) => ({
    type: CartActionTypes.CLEAR_ITEM,
    payload: item
});

export const clearCart = () => ({
    type: UserActionTypes.SIGN_OUT_SUCCESS
});

export const showAddToCartPopup = () => ({
    type: CartActionTypes.SHOW_ADD_TO_CART_POPUP
});

export const hideAddToCartPopup = () => ({
    type: CartActionTypes.HIDE_ADD_TO_CART_POPUP
});