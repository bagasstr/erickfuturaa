import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import AllProduct from "../Pages/AllProduct";
import ProductDetail from "../Components/ProductDetail";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/all-listings" element={<AllProduct />} />
      <Route path="/listings/:title" element={<ProductDetail />} />
    </Routes>
  );
};

export default Routers;
