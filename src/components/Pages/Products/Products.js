import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useProduct from "../../hooks/useProducts";

function Products() {
  const { productid } = useParams();
  const products = useProduct();

  const navigate = useNavigate();
  const showProduct = (id) => {
    navigate(`../productdetail/${id}`);
  };

  return (
    <div className="p-10">
      <div>ShowAllParts {products.length}</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        {products.map((prod) => {
          const { productname, picture, description, balance, _id } = prod;
          return (
            <div className="product" key={_id}>
              {/* <img src={picture} alt={productname} className="image" />
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
              </button> */}

              <div className="card lg:max-w-lg bg-base-100 shadow-2xl">
                <figure>
                  <img className="" src={picture} alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{productname}</h2>
                  <p>Price: ${balance}</p>
                  <p>{description.slice(0, 90)}</p>
                  <div className="card-actions justify-end">
                    <button
                      onClick={() => showProduct(_id)}
                      className="btn btn-primary"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
