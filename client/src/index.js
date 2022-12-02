import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

// Create app container
const container = document.getElementById("root");
// Specify root
const root = createRoot(container);
// Render app in root container
root.render(<App />);
