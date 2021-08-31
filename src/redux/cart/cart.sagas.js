import { put, call, takeLatest, all } from 'redux-saga/effects';
import UserActionTypes from '../user/user.types';
import { firestore } from '../../firebase/firebase.utils';
import { fetchCartSuccess, fetchCartFailure, showAddToCartPopup } from './cart.actions';
import { addItemToCart, addItemWithCount, removeItemFromCart, clearItemFromCart } from './cart.utils';
import CartActionTypes from './cart.types';

// variable to check whether function is addItem

export function* fetchCartAsync({ payload: { cartItems } }) {
    try {
        yield put(fetchCartSuccess(cartItems))

    } catch (error) {
        yield put(fetchCartFailure(error))
    }
}

//Update cartItems in database after adding or removing item
export function* updateCart({ uid, items, isAddFunction }) {
    const userRef = yield firestore.doc(`users/${uid}`);
    yield userRef.update({
        cartItems: items
    });

    if (isAddFunction) {
        yield put(showAddToCartPopup());
    }

    const snapshot = yield userRef.get();
    const { cartItems } = yield snapshot.data();
    yield put(fetchCartSuccess(cartItems));
}

export function* addItemAsync({ payload: { uid, item, cartItems } }) {
    const items = addItemToCart(cartItems, item);
    let isAddFunction = true;

    try {
        yield call(updateCart, { uid, items, isAddFunction })
    } catch (error) {
        yield put(fetchCartFailure(error))
    }
}

export function* addItemWithCountAsync({ payload: { uid, product, cartItems, count } }) {
    const items = addItemWithCount(cartItems, { product, count });
    let isAddFunction = true;

    try {
        yield call(updateCart, { uid, items, isAddFunction })
    } catch (error) {
        yield put(fetchCartFailure(error))
    }
}

export function* removeItemAsync({ payload: { uid, item, cartItems } }) {
    const items = removeItemFromCart(cartItems, item);

    try {
        yield call(updateCart, { uid, items })
    } catch (error) {
        yield put(fetchCartFailure(error))
    }
}


export function* clearItemFromCartAsync({ payload: { uid, item, cartItems } }) {
    const items = clearItemFromCart(cartItems, item);

    try {
        yield call(updateCart, { uid, items })
    } catch (error) {
        yield put(fetchCartFailure(error))
    }
}

export function* onFetchCartStart() {
    yield takeLatest(
        UserActionTypes.SIGN_IN_SUCCESS,
        fetchCartAsync
    )
}

export function* onAddItem() {
    yield takeLatest(
        CartActionTypes.ADD_ITEM,
        addItemAsync
    )
}

export function* onAddItemWithCount() {
    yield takeLatest(
        CartActionTypes.ADD_ITEM_WITH_COUNT,
        addItemWithCountAsync
    )
}

export function* onRemoveItem() {
    yield takeLatest(
        CartActionTypes.REMOVE_ITEM,
        removeItemAsync
    )
}

export function* onClearItemFromCart() {
    yield takeLatest(
        CartActionTypes.CLEAR_ITEM,
        clearItemFromCartAsync
    )
}



export function* cartSagas() {
    yield all([
        call(onFetchCartStart),
        call(onAddItem),
        call(onRemoveItem),
        call(onClearItemFromCart),
        call(onAddItemWithCount)
    ])
};