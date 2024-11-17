import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Showcase from "../../components/Showcase/Showcase";
import Brands from "../../components/Brands/Brands";
import ProductSection from "../../components/ProductSection/ProductSection";
import './homepage.scss'
import ReviewSection from "../../components/ReviewSection/ReviewSection";
import Footer from "../../components/Footer/Footer";

function Homepage() {
  return (
    <>
      <Navbar />
      <Showcase />
      <Brands />
      <ProductSection />
      <hr />
      <ProductSection />
      <ReviewSection />
      <Footer />
    </>
  );
}

export default Homepage;
