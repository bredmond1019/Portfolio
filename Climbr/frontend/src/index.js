import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom";
import App from "./App";

import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from "@apollo/client";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <App />
    </Router>
  </ApolloProvider>,
  document.getElementById("root")
);
