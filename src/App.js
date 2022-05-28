import { Route, Routes } from "react-router-dom";
import "./App.css";
import Error from "./components/Pages/404page/Error";
import Blog from "./components/Pages/Blog/Blog";
import AddProduct from "./components/Pages/Dashboard/AddProduct";
import AddReview from "./components/Pages/Dashboard/AddReview";
import Dashboard from "./components/Pages/Dashboard/Dashboard";
import MakeAdmin from "./components/Pages/Dashboard/MakeAdmin";
import ManageAllOrders from "./components/Pages/Dashboard/ManageAllOrders";
import MyOrder from "./components/Pages/Dashboard/MyOrder";
import MyProfile from "./components/Pages/Dashboard/MyProfile";
import Home from "./components/Pages/Home/Home";
import Login from "./components/Pages/Login/Login";
import PrivetRouteAdmin from "./components/Pages/Login/PrivetRouteAdmin";
import SignUp from "./components/Pages/Login/SignUp";
import MyPortfolio from "./components/Pages/Portfolio/Portfolio";
import Products from "./components/Pages/Products/Products";
import Purchase from "./components/Pages/Purchase/Purchase";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import Header from "./components/Shared/Header/Header";

const App = () => {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/product" element={<Products></Products>}></Route>
        <Route path="/myportfolio" element={<MyPortfolio />}></Route>

        <Route
          path="/productdetail/:productid"
          element={
            <RequireAuth>
              <Purchase></Purchase>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route path="myprofile" element={<MyProfile />} />
          <Route path="myorder" element={<MyOrder />} />
          <Route path="addreview" element={<AddReview />} />
          <Route
            path="makeadmin"
            element={
              <PrivetRouteAdmin>
                <MakeAdmin />
              </PrivetRouteAdmin>
            }
          />
          <Route
            path="addtoproduct"
            element={
              <PrivetRouteAdmin>
                <AddProduct />
              </PrivetRouteAdmin>
            }
          />
          <Route
            path="manageallorders"
            element={
              <PrivetRouteAdmin>
                <ManageAllOrders />
              </PrivetRouteAdmin>
            }
          />
        </Route>

        <Route path="*" element={<Error></Error>}></Route>
      </Routes>
    </div>
  );
};

export default App;
