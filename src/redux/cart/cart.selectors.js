import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

//Returns total quantity of items in cart
export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0
    )
)

//Returns total amount for all items in cart
export const selectCartItemsAmount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (accumulatedAmount, cartItem) => accumulatedAmount + (cartItem.quantity * cartItem.price), 0
    )
)