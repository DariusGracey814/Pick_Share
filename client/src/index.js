import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store";

import App from "./App";

// Create app container
const container = document.getElementById("root");
// Specify root
const root = createRoot(container);
// Render app in root container
root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
