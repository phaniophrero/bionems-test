import React from "react";
import NavbarDashboard from "../../components/Dashboard/Navbar/NavbarDashboard";

const LayoutDashboard = ({ children }) => {
  return (
    <div className="dashboard--content">
      <NavbarDashboard />
      {children}
    </div>
  );
};

export default LayoutDashboard;
