import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.scss";

function Sidebar() {
  return (
    <div className="sidebarwrapper">
      <Link to="/">Home</Link>
      <Link to="/admin">AdminPage</Link>
      <Link to="/admin/packages">Packages</Link>
      <Link to="/admin/packageAdd">Add a Package</Link>
      <Link to="/admin/basic-set-up">Basic set-up</Link>
      <Link to="/admin/basic-images">Add Images</Link>
    </div>
  );
}

export default Sidebar;
