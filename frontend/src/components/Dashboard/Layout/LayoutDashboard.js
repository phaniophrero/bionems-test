import React from "react";
import NavbarDashboard from "../Navbar/NavbarDashboard";

const LayoutDashboard = (props) => {
  return (
    <div className="dashboard--layout">
      <NavbarDashboard />
      <div className="dashboard--content">{props.children}</div>
    </div>
  );
};

export default LayoutDashboard;
