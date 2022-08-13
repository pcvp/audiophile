import React from "react";
import { BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { Router } from "./routes/router";
import "./styles/global.css";

const App = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </React.StrictMode>
  );
};

export default App;
