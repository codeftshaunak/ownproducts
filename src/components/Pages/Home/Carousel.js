/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Banner from "../../../assert/images/Banner.webp";
import Banner2 from "../../../assert/images/Banner2.jpg";
import Banner3 from "../../../assert/images/Banner.jpg";
import Banner4 from "../../../assert/images/Banner4.webp";
function Carousel() {
  return (
    <>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <div className="slide__desc font-bold">
            <img src={Banner} className="w-full" alt="banner" />
            {/* <h2>We Help To Build Product</h2>
            <button className="btn btn-outline btn-info">Learn More</button> */}
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <div className="slide__desc font-bold">
            <img src={Banner2} className="w-full" alt="banner" />
            {/* <h2>We Help To Build Product</h2>
            <button className="btn btn-outline btn-info">Learn More</button> */}
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <div className="slide__desc font-bold">
            <img src={Banner3} className="w-full" alt="banner" />
            {/* <h2>We Help To Build Product</h2>
            <button className="btn btn-outline btn-info">Learn More</button> */}
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <div className="slide__desc font-bold">
            <img src={Banner4} className="w-full h-15" alt="banner" />
            {/* <h2>We Help To Build Product</h2>
            <button className="btn btn-outline btn-info">Learn More</button> */}
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Carousel;
