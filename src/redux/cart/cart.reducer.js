import UserActionTypes from '../user/user.types';
import CartActionTypes from './cart.types';

const INITIAL_STATE = {
    cartItems: [],
    addToCartPopup: false,
    error: null
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.FETCH_CART_SUCCESS:
            return {
                ...state,
                cartItems: [...action.payload],
                error: null
            };

        case CartActionTypes.FETCH_CART_FAILURE:
            return {
                ...state,
                error: action.payload
            };

        case UserActionTypes.SIGN_OUT_SUCCESS:
            return {
                ...state,
                cartItems: [],
                error: null
            };

        case CartActionTypes.SHOW_ADD_TO_CART_POPUP:
            return {
                ...state,
                addToCartPopup: true
            };

        case CartActionTypes.HIDE_ADD_TO_CART_POPUP:
            return {
                ...state,
                addToCartPopup: false
            };

        default: return state;

    }
};

export default cartReducer;