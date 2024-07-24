import React from "react";
import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { ProductProvider } from "./componets/Contextapis/ProductDatacontextAPI";

// Lazy loading components
const LoginComponent = lazy(() => import("./componets/Auth/LoginComponent"));
const RegisterComponent = lazy(() => import("./componets/Auth/RegisterComponent"));
const NavbarComponent = lazy(() => import("./componets/Layout/NavbarComponent"));
const ProductbuyList = lazy(() => import('./componets/pages/Productbuyhistory'));
const CartDataList = lazy(() => import('./componets/pages/CartDatabyEmail'));
const HomePageComponent = lazy(() => import('./componets/pages/HomepageComponent'));
const ProductDetailsPage = lazy(() => import('./componets/pages/ProductDetailsComponent'));
const ProductBuyingPage = lazy(() => import('./componets/pages/ProductBuyingPage'));
const FooterComponent = lazy(() => import('./componets/Layout/FooterComponent'));

// Dummy authentication check
const isAuthenticated = Boolean(localStorage.getItem('authToken'));

// PrivateRoute component
const PrivateRoute = ({ element }) => {
  return isAuthenticated ? element : <Navigate to="/login" />;
};

// Main App component
function App() {
  return (
    <ProductProvider>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <NavbarComponent />
          <Routes>
            <Route path="/login" element={<LoginComponent />} />
            <Route path="/register" element={<RegisterComponent />} />
            <Route path="/" element={<PrivateRoute element={<Navigate to="/home" />} />} />
       
            <Route path="/productbuylist" element={<ProductbuyList />} />
            <Route path="/usercartlist" element={<CartDataList />} />
            <Route path="/home" element={<HomePageComponent />} />
            <Route path="/product/:id" element={<ProductDetailsPage />} />
            <Route path="/p" element={<ProductBuyingPage />} />

            <Route path="/protected" element={<PrivateRoute element={<div>Protected Page</div>} />} />
            <Route path="*" element={<div>File not found</div>} />
          </Routes>
          <FooterComponent />
        </Suspense>
      </BrowserRouter>
    </ProductProvider>
  );
}

export default App;
