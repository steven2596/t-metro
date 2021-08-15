import { put, call, takeLatest, all, } from 'redux-saga/effects';
import { firestore } from '../../firebase/firebase.utils';
import { fetchCollectionFailure, fetchCollectionSuccess } from './shop.actions';
import ShopActionTypes from './shop.types';

export function* fetchCollectionAsync() {
    const shopData = [];
    try {
        const collectionRef = firestore.collection('store');
        const collectionSnapshot = yield collectionRef.get();
        collectionSnapshot.docs.map(doc => shopData.push(doc.data()));

        yield put(fetchCollectionSuccess(shopData))
    } catch (error) {
        yield put(fetchCollectionFailure(error.message))
    }
}

export function* onFetchCollectionStart() {
    yield takeLatest(
        ShopActionTypes.FETCH_COLLECTION_START,
        fetchCollectionAsync
    )
}

export function* shopSagas() {
    yield all([
        call(onFetchCollectionStart)
    ])
};