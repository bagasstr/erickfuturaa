import React from "react";
import Hero from "../Components/Hero";
import Filter from "../Components/Filter";
import Product from "../Components/Product";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Filter />
      <Product />
      {/* <Produk /> */}
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
