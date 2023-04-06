export const selectToken = store => store.auth.accessToken;

export const selectRefreshToken = store => store.auth.refreshToken;

export const selectSid = store => store.auth.sid;

export const selectUserId = store => store.auth.userId;

export const selectUserEmail = store => store.auth.userEmail;

export const selectIsLoggedIn = store => store.auth.isLoggedIn;

export const selectUserName = store => store.auth.userName;
