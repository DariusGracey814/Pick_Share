import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./Components/UI/Header/Header";
import Homepage from "../pages/Homepage";
import "./index.css";

function App() {
  return (
    <main>
      <Header />
      
      <Routes>
        {/* Header Displays on every page */}

        {/* Home Route */}
        <Route path="/" element={<Homepage />} />
      </Routes>
    </main>
  );
}

export default App;
