/* eslint-disable no-unused-vars */


import React from "react";
import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes,Navigate } from "react-router-dom";

// eslint-disable-next-line import/first
import FooterComponent from "./componets/Layout/FooterComponent";
import HomePageComponent from "./componets/pages/HomepageComponent";

const LoginComponent = lazy(() => import("./componets/Auth/LoginComponent"));
const RegisterComponent = lazy(() => import("./componets/Auth/RegisterComponent"));
const NavbarComponent=lazy(()=>import("./componets/Layout/NavbarComponent"))
const ProductbuyList=lazy(()=>import('./componets/pages/Productbuyhistory'))
const CartDataList=lazy(()=>import('./componets/pages/CartDatabyEmail'))


// import NavbarComponent from "./componets/Layout/NavbarComponent";


// Dummy authentication check
const isAuthenticated = Boolean(localStorage.getItem('authToken')); // Replace with actual authentication logic

// PrivateRoute component
const PrivateRoute = ({ element }) => {
  return isAuthenticated ? element : <Navigate to="/login" />;
};

// Main App component
function App() {
  return (
    <div>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <NavbarComponent />
          <Routes>
            <Route path="/login" element={<LoginComponent />} />
            <Route path="/register" element={<RegisterComponent />} />
            <Route path="/home" element={<HomePageComponent/>}/>
            <Route path="/" element={<PrivateRoute element={<Navigate to="/login" />} />} />
            <Route path="/productbuylist" element={<ProductbuyList/>}/>
            <Route path="/usercartlist" element={<CartDataList/>}/>
            {/* Add more protected routes here */}
            <Route path="/protected" element={<PrivateRoute element={<div>Protected Page</div>} />} />
            <Route path="*" element={<div>File not found</div>} />
          </Routes>
          <FooterComponent/>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;