import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import AllProduct from "../Pages/AllProduct";
import ProductDetail from "../Components/ProductDetail";
import PreviewImage from "../Components/PreviewImage";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/listings/detail/:title" element={<ProductDetail />} />
      <Route
        path="/listings/detail/:title/previewImage"
        element={<PreviewImage />}
      />
      <Route path="/all-listings" element={<AllProduct />} />
    </Routes>
  );
};

export default Routers;
