/* eslint-disable no-unused-vars */


import React from "react";
import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes,Navigate } from "react-router-dom";

const LoginComponent = lazy(() => import("./componets/Auth/LoginComponent"));
const RegisterComponent = lazy(() => import("./componets/Auth/RegisterComponent"));


// Dummy authentication check
const isAuthenticated = false; // Replace with actual authentication logic

// PrivateRoute component
const PrivateRoute = ({ element }) => {
  return isAuthenticated ? element : <Navigate to="/login" />;
};

// <Route path="/home" element={<PrivateRoute element={<HomeComponent />} />} />



function App() {
  return (
    <div>
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/register" element={<RegisterComponent />} />
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="*" element={<div>file not found</div>}/>
          
        </Routes>
      </Suspense>
    </BrowserRouter>
  </div>
  );
}

export default App;
