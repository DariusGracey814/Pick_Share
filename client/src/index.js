import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";

// Create app container
const container = document.getElementById("root");
// Specify root
const root = createRoot(container);
// Render app in root container
root.render(
  <Router>
    <App />
  </Router>
);
