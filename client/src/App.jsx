import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./Components/UI/Header/Header";
import Homepage from "../pages/Homepage";

// Lazy Load for Optimization
const SignUpPage = React.lazy(() => import("../pages/SignUp"));
const ErrorPage = React.lazy(() => import("../pages/ErrorPage"));
const HomeAuthenticated = React.lazy(() => import("../pages/Home"));

import "./index.css";

function App() {
  return (
    <main>
      <Header />

      <Routes>
        {/* Header Displays on every page */}

        {/* Home Route */}
        <Route path="/" element={<Homepage />} />
        {/* Lazy load sign up form */}
        <Route
          path="/pick-share-signup-form"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <SignUpPage />
            </Suspense>
          }
        />
        <Route
          path="/pick-share-homeDarius"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <HomeAuthenticated />
            </Suspense>
          }
        />

        {/* Redirect to home every other route */}
        <Route
          path="*"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <ErrorPage />
            </Suspense>
          }
        />
      </Routes>
    </main>
  );
}

export default App;
