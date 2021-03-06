import UserActionTypes from './user.types';

export const signInSuccess = (user) => ({
    type: UserActionTypes.SIGN_IN_SUCCESS,
    payload: user
})

export const signInFailure = (error) => ({
    type: UserActionTypes.SIGN_IN_FAILURE,
    payload: error
})

export const checkUserSession = () => ({
    type: UserActionTypes.CHECK_USER_SESSION
})

export const showLoginPopup = () => ({
    type: UserActionTypes.SHOW_LOGIN_POPUP
})

export const hideLoginPopup = () => ({
    type: UserActionTypes.HIDE_LOGIN_POPUP
})

export const googleSignInStart = () => ({
    type: UserActionTypes.GOOGLE_SIGN_IN_START
});

export const emailSignInStart = (user) => ({
    type: UserActionTypes.EMAIL_SIGN_IN_START,
    payload: user
})

export const signUpStart = (user) => ({
    type: UserActionTypes.SIGN_UP_START,
    payload: user
})

//User signs out
export const signOutStart = () => ({
    type: UserActionTypes.SIGN_OUT_START
})

export const signOutSuccess = () => ({
    type: UserActionTypes.SIGN_OUT_SUCCESS
})

export const signOutFailure = (error) => ({
    type: UserActionTypes.SIGN_OUT_FAILURE,
    payload: error
})