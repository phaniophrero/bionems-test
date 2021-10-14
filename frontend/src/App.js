import React from "react";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
// styles
import "./App.scss";
import ProductPage from "./pages/ProductPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import UserListPage from "./pages/UserListPage";
import UserEditPage from "./pages/UserEditPage";
import ProductListPage from "./pages/ProductListPage";
import ProductEditPage from "./pages/ProductEditPage";
import HomeDashboard from "./pages/DashboardPages/HomeDashboard";
import ReviewsDashboard from "./pages/DashboardPages/ReviewsDashboard";
import AnalyticsDashboard from "./pages/DashboardPages/AnalyticsDashboard";
// import LayoutDashboard from "./pages/DashboardPages/LayoutDashboard";

function App() {
  //**todo - Conditie daca este Admin poate accesa link-ul de dashboard */

  return (
    <>
      <div className="main-content">
        <Route exact path="/" component={Home} />
        <Route path="/product/:id" component={ProductPage} />
      </div>
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />

      {/* <LayoutDashboard> */}
      <Route exact path="/bionems-admin" component={HomeDashboard} />

      <Route path="/bionems-admin/userlist" component={UserListPage} />
      <Route path="/bionems-admin/user/:id/edit" component={UserEditPage} />
      <Route path="/bionems-admin/profile" component={ProfilePage} />

      <Route path="/bionems-admin/productlist" component={ProductListPage} />
      <Route
        path="/bionems-admin/product/:id/edit"
        component={ProductEditPage}
      />

      <Route path="/bionems-admin/reviews" component={ReviewsDashboard} />

      <Route
        path="/bionems-admin/analyticlist"
        component={AnalyticsDashboard}
      />
      {/* </LayoutDashboard> */}
    </>
  );
}

export default App;
