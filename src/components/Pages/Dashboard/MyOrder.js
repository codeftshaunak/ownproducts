import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../../firebase.init";
import Spinner from "../../Shared/Spinner/Spinner";

function MyOrder() {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      const email = user.email;
      const url = `https://nameless-island-37356.herokuapp.com/order?email=${email}`;
      fetch(url, {
        method: "GET",
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((resp) => {
          if (resp.status === 403 || resp.status === 401) {
            signOut(auth);
            localStorage.removeItem("accessToken");
            navigate("/login");
          }
          return resp.json();
        })
        .then((data) => setOrders(data));
    };
    getOrders();
  }, []);
  // console.log(orders);

  const handleDelete = (id) => {
    const sure = window.confirm("Are sure to delete it?");
    if (sure) {
      const url = `https://nameless-island-37356.herokuapp.com/orders/${id}`;
      fetch(url, { method: "DELETE" })
        .then((resp) => resp.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.success("successfully delete one order");
            const remaining = orders.filter((order) => order._id !== id);
            setOrders(remaining);
          }
        });
    }
  };

  console.log(orders);

  return (
    <div>
      <h1 className="text-xl text-center">My orderment {orders.length}</h1>

      <div className="overflow-x-auto ">
        <table className="table w-full ">
          <thead>
            <tr>
              <th>Number</th>
              <th>Name</th>
              <th>Order Name</th>
              <th>Quantity</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr className="hover" key={order._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={
                            user?.photoURL ||
                            "https://api.lorem.space/image/face?hash=3174"
                          }
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">
                        {order.userName || "Normal guy"}
                      </div>
                      <div className="text-sm opacity-50">{order.email}</div>
                    </div>
                  </div>
                </td>
                <td>{order.prodname}</td>
                <td>{order.quantity} pices</td>

                <td>
                  {order.productPrice && !order.paid && (
                    <Link to={`/dashboard/payment/${order._id}`}>
                      <button className="btn btn-xs mx-1">Pay</button>
                    </Link>
                  )}
                  {order.productPrice && order.paid && (
                    <button className="btn btn-xs btn-success mx-1">
                      Paid
                    </button>
                  )}
                  <button
                    onClick={() => handleDelete(order._id)}
                    className="btn btn-xs mx-1 btn-error"
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ToastContainer />
    </div>
  );
}

export default MyOrder;
