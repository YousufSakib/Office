import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./adminLayout.scss";
import Footer from "../../components/footer/Footer";
import { useImages } from "../../components/ImageContext";
import { useInfo } from "../../components/CompanyInfoContext";
import { BACKEND_URL } from "../../../dynamicInfo";
function AdminLayout() {
  const [isHovered, setIsHovered] = useState(false);
  const [isSideOpen, setIsSideOpen] = useState(false);
  const { logo } = useImages();
  const { companyName } = useInfo();

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const handleBugerClick = () => {
    setIsSideOpen((prev) => !prev);
  };
  return (
    <>
      {/* <Navbar /> */}
      <div className="show-responsive">
        <div className="md">Mid</div>
        <div className="lg">large</div>
        <div className="sm">small</div>
      </div>
      <div
        className={`adminLayout ${isSideOpen ? "open" : ""} ${
          isHovered ? "hovered" : ""
        }`}
      >
        <div onClick={handleBugerClick} className="fullScreenShadow"></div>
        <div
          className="adminSidebarTop"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="left">
            <img src={`${BACKEND_URL}/uploads/${logo}`} alt="" />
            <span>{companyName}</span>
          </div>
          <img
            className="adminNavcross"
            onClick={handleBugerClick}
            src={`"../../../../public/${
              isSideOpen ? "adminX.png" : "adminMenu.png"
            }`}
            alt=""
          />
        </div>
        <div
          className={`adminSidebar ${isSideOpen ? "open" : ""}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* <AdminSidebar /> */}
          <div className="sidebarwrapper">
            <div className="row">
              <img src="../../../../public/homePage.png" alt="Admin" />
              <Link to="/admin">AdminHome</Link>
            </div>

            <div className="row">
              <img src="../../../../public/allPackages.png" alt="allPackages" />
              <Link to="/admin/packages">All Packages</Link>
            </div>
            <div className="row">
              <img src="../../../../public/packageAdd.png" alt="packageAdd" />
              <Link to="/admin/packageAdd">Add new Package</Link>
            </div>
            <div className="row">
              <img src="../../../../public/pages.png" alt="Pages Edit" />
              <Link to="">Pages</Link>
            </div>
            <div className="row">
              <img src="../../../../public/infoSetup.png" alt="infoSetup" />
              <Link to="/admin/companyInfoSetUp">Info Setup</Link>
            </div>
            <div className="row">
              <img src="../../../../public/basicImages.png" alt="basicImages" />
              <Link to="/admin/basic-images">Basic Images</Link>
            </div>
          </div>
        </div>
        <div className="content">
          <Outlet />
          {/* <Footer /> */}
        </div>
      </div>
    </>
  );
}

export default AdminLayout;
