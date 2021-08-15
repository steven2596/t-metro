import { put, call, takeLatest, all, take } from 'redux-saga/effects';
import { auth, googleProvider, createUserDocument, getCurrentUser } from '../../firebase/firebase.utils';
import { signInFailure, signInSuccess, signOutFailure, signOutSuccess } from './user.actions';
import UserActionTypes from './user.types';

//take userAuth and set current user
export function* setCurrentUser(userAuth) {
    const userRef = yield createUserDocument(userAuth);
    const snapshot = yield userRef.get();

    yield put(signInSuccess({ id: snapshot.id, ...snapshot.data() }))
}

export function* googleSignInAsync() {
    try {
        const { user } = yield auth.signInWithPopup(googleProvider);
        yield call(setCurrentUser, user);
    } catch (error) {
        yield put(signInFailure(error))
    }
}

export function* emailSignInAsync({ payload: { email, password } }) {
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        yield call(setCurrentUser, user);
    } catch (error) {
        yield put(signInFailure(error));
    }
}

export function* signUpAsync({ payload: { displayName, email, password } }) {
    try {
        const { user } = yield auth.createUserWithEmailAndPassword(email, password);
        const userRef = yield createUserDocument(user, { displayName });
        const snapshot = yield userRef.get();
        alert('Account Sign Up Successful');
        yield put(signInSuccess({ id: snapshot.id, ...snapshot.data() }));
    } catch (error) {
        yield put(signInFailure(error))
    }
}

export function* isUserAuthenticated() {
    try {
        const userAuth = yield getCurrentUser();
        if (!userAuth) return;
        yield call(setCurrentUser, userAuth)
    } catch (error) {
        yield put(signInFailure(error))
    }
}

export function* signOutAsync() {
    try {
        yield auth.signOut();
        yield put(signOutSuccess());
    } catch (error) {
        yield put(signOutFailure(error));
    }
}

export function* onCheckUserSession() {
    yield takeLatest(
        UserActionTypes.CHECK_USER_SESSION,
        isUserAuthenticated
    )
};

export function* onGoogleSignInStart() {
    yield takeLatest(
        UserActionTypes.GOOGLE_SIGN_IN_START,
        googleSignInAsync
    )
};

export function* onEmailSignInStart() {
    yield takeLatest(
        UserActionTypes.EMAIL_SIGN_IN_START,
        emailSignInAsync
    )
};

export function* onSignUpStart() {
    yield takeLatest(
        UserActionTypes.SIGN_UP_START,
        signUpAsync
    )
}

export function* onSignOutStart() {
    yield takeLatest(
        UserActionTypes.SIGN_OUT_START,
        signOutAsync
    )
}

export function* userSagas() {
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onSignUpStart),
        call(onCheckUserSession),
        call(onSignOutStart)
    ])
};