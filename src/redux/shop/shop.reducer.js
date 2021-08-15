import ShopActionTypes from './shop.types.js';

const INITIAL_STATE = {
    collections: null,
    isStoreDataFetched: false,
    error: null
};

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ShopActionTypes.FETCH_COLLECTION_SUCCESS:
            return {
                ...state,
                collections: action.payload,
                isStoreDataFetched: true,
                error: null
            };

        case ShopActionTypes.FETCH_COLLECTION_FAILURE:
            return {
                ...state,
                error: action.payload
            };

        default: return state;
    }
};

export default shopReducer;