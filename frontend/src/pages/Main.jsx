import React from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import ProductsList from "../components/ProductsList";
import Footer from "../components/Footer";

export default function Main() {
  return (
    <>
      <NavBar />
      <Hero />
      <ProductsList />
      <Footer />
    </>
  );
}
