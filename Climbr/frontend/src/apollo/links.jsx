import { onError } from "@apollo/client/link/error";
import { createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { getAccessTokenPromise } from "../modAuth/utils";

export const errorHandler = ({ graphQLErrors, networkError }) => {
  if (graphQLErrors) graphQLErrors.forEach(({ message }) => console.log(message));
  if (networkError) {
    console.log(networkError);
  }
};

export const linkError = onError(errorHandler);

// export const linkAuth = createHttpLink({
//   uri: "/auth",
//   // DEV purpose of credential header and CORS... check before production release
//   credentials: "include",
// });

export const linkMain = createHttpLink({
  uri: "/graphql",
  // DEV purpose of credential header and CORS... check before production release
  // credentials: "same-origin",
});

export const linkTokenHeader = setContext(async (_, { headers }) => {
  const token = await getAccessTokenPromise();
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});
