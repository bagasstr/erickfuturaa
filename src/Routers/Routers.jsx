import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import AllProduct from "../Pages/AllProduct";
import ProductDetail from "../Components/ProductDetail";
import PreviewImage from "../Components/PreviewImage";
import SpekLengkap from "../Components/SpekLengkap";
import Profile from "../Pages/Profile";
import Contact from "../Pages/Contact";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/listings/detail/:title" element={<ProductDetail />} />
      <Route
        path="/listings/detail/:title/previewImage"
        element={<PreviewImage />}
      />
      <Route
        path="/listings/detail/:title/spek-lengkap"
        element={<SpekLengkap />}
      />
      <Route path="/all-listings" element={<AllProduct />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default Routers;
