import React from "react";
import Carousel from "./Carousel";
import HomeProduct from "./HomeProduct";
import "./Home.css";
import Summary from "./Summary";
import HomeReview from "./HomeReview";
import Footer from "../../Shared/Footer/Footer";
import OneProduct from "./OneProduct";
import OurPartnes from "./OurPartnes";

function Home() {
  return (
    <>
      <Carousel></Carousel>
      <HomeProduct></HomeProduct>
      <Summary></Summary>
      <OneProduct></OneProduct>
      <div className="bg-white p-5 text-black">
        <HomeReview></HomeReview>
      </div>
      <OurPartnes></OurPartnes>
      <Footer></Footer>
    </>
  );
}

export default Home;
