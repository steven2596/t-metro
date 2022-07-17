import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import shopReducer from './shop/shop.reducer';
import cartReducer from './cart/cart.reducer';

//persistConfig is JSON object for redux persist configuration
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart', 'shop']
}

const rootReducer = combineReducers({
    user: userReducer,
    shop: shopReducer,
    cart: cartReducer
});

export default persistReducer(persistConfig, rootReducer);