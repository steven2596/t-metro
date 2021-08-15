import { createSelector } from 'reselect';

const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
    [selectUser],
    user => user.currentUser
);

export const selectCurrentUserID = createSelector(
    [selectCurrentUser],
    currentUser => currentUser && currentUser.id
)

export const selectAuthError = createSelector(
    [selectUser],
    user => user.error
);
