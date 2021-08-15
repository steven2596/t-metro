import ShopActionTypes from "./shop.types";


export const fetchCollectionStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTION_START
});

export const fetchCollectionSuccess = (data) => ({
    type: ShopActionTypes.FETCH_COLLECTION_SUCCESS,
    payload: data
});

export const fetchCollectionFailure = (error) => ({
    type: ShopActionTypes.FETCH_COLLECTION_FAILURE,
    payload: error
})
