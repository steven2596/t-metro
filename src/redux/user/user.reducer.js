import UserActionTypes from "./user.types";

const INITIAL_STATE = {
    currentUser: null,
    error: null,
    showLoginPopup: null
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.SIGN_IN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                showLoginPopup: false,
                error: null
            };

        case UserActionTypes.SIGN_OUT_SUCCESS:
            return {
                ...state,
                currentUser: null,
                showLoginPopup: null,
                error: null
            };

        case UserActionTypes.SHOW_LOGIN_POPUP:
            return {
                ...state,
                showLoginPopup: true
            }

        case UserActionTypes.HIDE_LOGIN_POPUP:
            return {
                ...state,
                showLoginPopup: false
            }

        case UserActionTypes.SIGN_IN_FAILURE:
        case UserActionTypes.SIGN_UP_FAILURE:
        case UserActionTypes.SIGN_OUT_FAILURE:
            return {
                ...state,
                showLoginPopup: null,
                error: action.payload
            };

        default: return state;
    }
};

export default userReducer;