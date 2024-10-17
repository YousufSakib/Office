import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.scss";

function Sidebar() {
  return (
    <div className="sidebarwrapper">
      <Link to="/">Home</Link>
      <Link to="/admin">AdminPage</Link>
      <Link to="/admin/packages">All Packages</Link>
      <Link to="/admin/packageAdd">Add new Package</Link>
      <Link to="/admin/companyInfoSetUp">Info Setup</Link>
      <Link to="/admin/basic-images">Basic Images</Link>
    </div>
  );
}

export default Sidebar;
