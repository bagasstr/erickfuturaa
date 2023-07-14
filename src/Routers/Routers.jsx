import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import AllProduct from "../Pages/AllProduct";
import ProductDetail from "../Components/ProductDetail";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/listings/detail/:title" element={<ProductDetail />} />
      <Route path="/all-listings" element={<AllProduct />} />
    </Routes>
  );
};

export default Routers;
