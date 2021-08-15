import UserActionTypes from '../user/user.types';
import CartActionTypes from './cart.types';

const INITIAL_STATE = {
    cartItems: [],
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

        default: return state;

    }
};

export default cartReducer;