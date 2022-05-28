import React from "react";

function OneProduct() {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/Design/swarosvki-i7/sw-00-teaser-high.jpg.asset.1646863687443.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
            alt=""
          />
          <div>
            <h3 className="text-5xl font-bold">Build Your Dream Car!</h3>
            <p className="py-6">
              We can build your dream car with us. We are here for provide you
              every equipment. You can also modify your car from here.
            </p>
            <button className="btn btn-primary">Explore More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OneProduct;
