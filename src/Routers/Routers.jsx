import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import AllProduct from "../Pages/AllProduct";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/all-listings" element={<AllProduct />} />
    </Routes>
  );
};

export default Routers;
