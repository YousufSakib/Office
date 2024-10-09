import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import "./adminLayout.scss";

function AdminLayout() {
  return (
    <>
      {/* <Navbar /> */}
      <div className="adminLayout">
        <div className="sideBar">
          <Sidebar />
        </div>
        <div className="content">
          {/* <Outlet /> */}
          <div className="content">content</div>
        </div>
      </div>
    </>
  );
}

export default AdminLayout;
