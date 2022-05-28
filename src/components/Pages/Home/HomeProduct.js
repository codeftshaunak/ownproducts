import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import useProduct from "../../hooks/useProducts";

function HomeProduct() {
  const { productid } = useParams();
  const products = useProduct();
  const product = products.slice(0, 6);

  const navigate = useNavigate();
  const showProduct = (id) => {
    navigate(`productdetail/${id}`);
  };
  return (
    <>
      <h1 className="text-center p-5 text-4xl mt-0">Our Products</h1>
      <div className="homeprod__details flex flex-wrap">
        {product.map((prod) => {
          const {
            productname,
            picture,
            description,
            minimumOrderQuantity,
            availableQuantity,
            balance,
            _id,
          } = prod;
          return (
            <div className="product" key={_id}>
              <img src={picture} alt={productname} className="image" />
              <h1 className="prod__name">{productname}</h1>
              <p className="prod__des">{description}</p>
              <h3 className="min__qnt">
                Minimum order quantity:-{minimumOrderQuantity}
              </h3>
              <h3 className="avaible__qnt">
                Available Quantity:-{availableQuantity}
              </h3>
              <h3 className="price">Per Unit Price:-{balance}</h3>
              <button
                className="btn btn-outline btn-success"
                onClick={() => showProduct(_id)}
              >
                Order Now
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default HomeProduct;
