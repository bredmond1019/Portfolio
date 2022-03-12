import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom";

import App from "./App";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { reduxStoreMain, reduxStoreMainPersistor } from "./redux";

import { ApolloProvider } from "@apollo/client";
import { apolloClientMain } from "./apollo";

ReactDOM.render(
  <Provider store={reduxStoreMain}>
    <PersistGate loading={<p>loading...</p>} persistor={reduxStoreMainPersistor}>
      <ApolloProvider client={apolloClientMain}>
        <Router>
          <App />
        </Router>
      </ApolloProvider>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
