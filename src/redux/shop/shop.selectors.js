import { createSelector } from 'reselect';

const CollectionID = {
    albums: 0,
    photobooks: 1,
    merchs: 2
}

const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollection = (collectionUrl) => (
    createSelector(
        [selectShopCollections],
        collections => collections && collections.find(collection => collection.id === CollectionID[collectionUrl])
    )
)

export const selectAllItems = createSelector(
    [selectShopCollections],
    collections => {
        let items = [];

        for (let i = 0; i < collections.length; i++) {
            items = items.concat(collections[i].items)
        }

        return items;
    }
)

export const selectDataFetchingStatus = createSelector(
    [selectShop],
    shop => shop.isStoreDataFetched
)