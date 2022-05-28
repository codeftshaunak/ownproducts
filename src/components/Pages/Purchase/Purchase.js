import React, { useEffect, useState } from "react";
import "./Purchase.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../../firebase.init";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";

function Purchase() {
  const [user] = useAuthState(auth);
  const { productid } = useParams();
  const [product, setProduct] = useState({});

  const {
    productname,
    picture,
    balance,
    minimumOrderQuantity,
    availableQuantity,
  } = product;

  const [value, setValue] = useState(minimumOrderQuantity);

  const { handleSubmit } = useForm();
  const onSubmit = () => {
    const prodname = productname;
    const userName = user.displayName;
    const email = user.email;
    const quantity = value;
    const productPrice = balance;

    const order = { prodname, userName, email, quantity, productPrice };
    console.log(quantity);

    fetch("https://nameless-island-37356.herokuapp.com/order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("You made an order, see your order in dashboard");
      });
  };

  useEffect(() => {
    fetch(`https://nameless-island-37356.herokuapp.com/product/${productid}`)
      .then((resp) => resp.json())
      .then((data) => setProduct(data));
  }, []);

  console.log(value);
  console.log(availableQuantity);
  let errorMessage;
  if (parseInt(value) > parseInt(availableQuantity)) {
    errorMessage = <p className="text-red-500">Please Reduce Few Number</p>;
  }
  if (parseInt(value) < parseInt(minimumOrderQuantity)) {
    errorMessage = <p className="text-red-500">Please Increase Quantity</p>;
  }
  return (
    <>
      <section>
        <h1 className="sr-only">Checkout</h1>

        <div className="relative mx-auto max-w-screen-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="py-5">
              <div className="flex flex-col justify-around items-center gap-5">
                <div>
                  <img
                    className="w-[249px] h-[259px] rounded-xl"
                    src={picture}
                    alt=""
                  />
                </div>
                <div>
                  <p className="text-xl font-medium">Name: {productname}</p>
                  <p className="text-xl font-medium">
                    Minimun Quantity: {minimumOrderQuantity} pices
                  </p>
                  <p className="text-xl font-medium">
                    Available quantity: {availableQuantity} pices
                  </p>
                  <p className="text-xl font-medium">Price: ${balance}</p>
                </div>
              </div>
            </div>

            <div className="py-5">
              <div className="max-w-lg px-4 mx-auto lg:px-8 shadow-sm">
                <form onSubmit={handleSubmit(onSubmit)} className="form">
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      type="text"
                      value={user.displayName}
                      disabled
                      className="input input-bordered w-full max-w-xs"
                    />
                  </div>

                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      value={user.email}
                      disabled
                      className="input input-bordered w-full max-w-xs"
                    />
                  </div>

                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      <span className="label-text">Product Name</span>
                    </label>
                    <input
                      type="text"
                      value={productname}
                      disabled
                      className="input input-bordered w-full max-w-xs"
                    />
                  </div>

                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      <span className="label-text">Quantity</span>
                    </label>
                    <input
                      type="number"
                      value={value || minimumOrderQuantity}
                      onChange={(e) => setValue(e.target.value)}
                      className="input input-bordered w-full max-w-xs"
                    />
                    {errorMessage}
                  </div>

                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      <span className="label-text">Price</span>
                    </label>
                    <input
                      type="number"
                      value={balance}
                      className="input input-bordered w-full max-w-xs"
                    />
                  </div>

                  {parseInt(value) > parseInt(availableQuantity) ||
                  parseInt(value) < parseInt(minimumOrderQuantity) ? (
                    <input
                      className="btn bg-black outline-none text-white hover:text-white w-full max-w-xs mt-5"
                      value="Purchase"
                      disabled
                    />
                  ) : (
                    <input
                      className="btn bg-black outline-none text-white hover:text-white w-full max-w-xs mt-5"
                      value="Purchase"
                      type="submit"
                    />
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
}

export default Purchase;
