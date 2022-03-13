import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom";

import App from "./App";
import { getAccessTokenPromise } from "./modAuth/utils";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { reduxStoreMain, reduxStoreMainPersistor } from "./redux";

import { ApolloProvider, ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
// import { apolloClientMain } from "./apollo/clients";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext(async (_, { headers }) => {
  const token = await getAccessTokenPromise();
  console.log(token);
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <Provider store={reduxStoreMain}>
    <PersistGate loading={<p>loading...</p>} persistor={reduxStoreMainPersistor}>
      <ApolloProvider client={client}>
        <Router>
          <App />
        </Router>
      </ApolloProvider>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
