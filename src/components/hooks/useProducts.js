import React, { useState, useEffect } from "react";

const useProduct = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://nameless-island-37356.herokuapp.com/products")
      .then((resp) => resp.json())
      .then((data) => setProduct(data));
  }, []);
  return product;
};

export default useProduct;
