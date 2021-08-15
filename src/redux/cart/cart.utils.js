export const addItemToCart = (cartItems, newItem) => {
    const existingItem = cartItems.find(item => item.id === newItem.id);

    if (existingItem) {
        return cartItems.map(item => (
            item.id === existingItem.id ?
                { ...item, quantity: item.quantity + 1 } : item
        ))
    }

    return [...cartItems, { ...newItem, quantity: 1 }]
};

export const addItemWithCount = (cartItems, item) => {
    const { product, count } = item;

    const existingItem = cartItems && cartItems.find(item => item.id === product.id);

    if (existingItem) {
        return cartItems.map(item => (
            item.id === existingItem.id ?
                { ...item, quantity: item.quantity + count } : item
        ))
    }

    return [...cartItems, { ...product, quantity: count }]
}

export const removeItemFromCart = (cartItems, itemToRemove) => {
    const existingItem = cartItems.find(item => item.id === itemToRemove.id);

    if (existingItem) {
        if (existingItem.quantity > 1) {
            return cartItems.map(item => (
                item.id === existingItem.id ?
                    { ...item, quantity: item.quantity - 1 } : item
            ))
        } else {
            return cartItems.filter(item => item.id !== existingItem.id)
        }
    }

    return cartItems;
};

export const clearItemFromCart = (cartItems, itemToClear) => {
    const existingItem = cartItems.find(item => item.id === itemToClear.id);

    if (existingItem) {
        return cartItems.filter(item => item.id !== existingItem.id)
    }

    return cartItems;
}