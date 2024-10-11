import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import "./adminLayout.scss";
import Footer from "../../components/footer/Footer";

function AdminLayout() {
  return (
    <>
      {/* <Navbar /> */}
      <div className="show-responsive">
        <div className="md">Mid</div>
        <div className="lg">large</div>
        <div className="sm">small</div>
      </div>
      <div className="adminLayout">
        <div className="sideBar">
          <Sidebar />
        </div>
        <div className="content">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default AdminLayout;
