import React from "react";
import SidebarComponent from "./sidebar";
import Dashboard from "./Dashboard";
const Layout = () => {
  return (
    <div className="home-page-container">
      <div className="overall-body-container">
        <div className="left-sidebar">
          <SidebarComponent />
        </div>
        <div className="inner-body-container">
          <Dashboard />
        </div>
      </div>
    </div>
  );
};

export default Layout;
