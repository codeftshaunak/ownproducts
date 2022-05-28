import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink, Outlet } from "react-router-dom";
import Spinner from "../../Shared/Spinner/Spinner";
import auth from "../../../firebase.init";
import useAdmin from "../../hooks/useAdmin";

function Dashboard() {
  const [user] = useAuthState(auth);
  const [admin, adminLoading] = useAdmin(user);

  if (adminLoading) {
    return <Spinner />;
  }
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center ">
        <h1>Welcome to Dashboard</h1>
        {/* <!-- Page content here --> */}
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-gray-100 text-base-content gap-3">
          {/* <!-- Sidebar content here --> */}
          <li>
            <NavLink to={"/dashboard/myprofile"}>My Profile</NavLink>
          </li>

          {admin ? (
            <li>
              <NavLink to={"/dashboard/addtoproduct"}>Add To Product</NavLink>
            </li>
          ) : (
            <li>
              <NavLink to={"/dashboard/addreview"}>Add Review</NavLink>
            </li>
          )}

          {admin && (
            <li>
              <NavLink to={"/dashboard/makeadmin"}>Make Admin</NavLink>
            </li>
          )}
          {admin && (
            <li>
              <NavLink to={"/dashboard/manageallorders"}>
                Manage All Orders
              </NavLink>
            </li>
          )}
          {admin ? (
            <li>
              <NavLink to={"/dashboard/manageproduct"}>Manage Products</NavLink>
            </li>
          ) : (
            <li>
              <NavLink to={"/dashboard/myorder"}>My Order</NavLink>
            </li>
          )}
        
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
