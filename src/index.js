import { ApolloProvider } from "@apollo/react-hooks";
import React from "react";
import ReactDOM from "react-dom";
//import "bootstrap/dist/css/bootstrap.css";
//import { ApolloProvider } from "react-apollo";
import { client } from "./components/dashboard/DashboardElements";
import App from "./App";

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
