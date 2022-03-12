import { reduxStoreMain } from "../redux/storeMain";
import { authTokenActions } from "./actions";
import { apolloClientMain } from "../apollo";
import { REFRESH } from "../mutations";

// export const possibleRefreshTokenErrors = [
//     'Refresh token is required', // refresh token is not sent or Cookie is deleted
//     'Invalid refresh token', // refresh token is not in the database
//     'Refresh token is expired' // refresh token is expired
//   ]

export const possibleAccessTokenErrors = [
  "Login required.", // access token is not sent or Header key is not correct
  "Error decoding signature", // access token or prefix is invalid
  "Signature has expired", // access token is expired
];

async function getRefreshedAccessTokenPromise() {
  try {
    const { data } = await apolloClientMain.mutate({ mutation: REFRESH });
    if (data && data.refresh) authTokenActions.setRefreshToken(data.refresh);
    return data.refresh.newToken;
  } catch (error) {
    authTokenActions.logOut();
    console.log(error);
    return error;
  }
}

let pendingAccessTokenPromise = null;

export function getAccessTokenPromise() {
  const authTokenState = reduxStoreMain.getState().authToken;
  const currentNumericDate = Math.round(Date.now() / 1000);

  if (
    authTokenState &&
    authTokenState.token &&
    authTokenState.expirationTime &&
    currentNumericDate + 1 * 60 <= authTokenState.expirationTime
  ) {
    if (currentNumericDate + 3 * 60 >= authTokenState.expirationTime)
      getRefreshedAccessTokenPromise();
    return new Promise((resolve) => resolve(authTokenState.token));
  }

  if (!pendingAccessTokenPromise)
    pendingAccessTokenPromise = getRefreshedAccessTokenPromise().finally(
      () => (pendingAccessTokenPromise = null)
    );

  return pendingAccessTokenPromise;
}
