import { ApolloProvider } from "@apollo/client";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { client } from "./lib/apollo";
import HomePage from "./pages/HomePage";
import { Router } from "./routes/router";
import "./styles/global.css";

const App = () => {
  return (
    <React.StrictMode>
      <ApolloProvider client={client} >
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ApolloProvider>
    </React.StrictMode>
  );
};

export default App;
