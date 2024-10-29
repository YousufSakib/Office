import React from "react";
import "./adminPackageSetup.scss";
import FullScreenloading from "../../components/fullScreenloading/FullScreenloading";
import AdminPackageTourPlaces from "../../components/adminPackageTourPlaces/AdminPackageTourPlaces";
import AdminPackageTourCategories from "../../components/adminPackageTourCategories/AdminPackageTourCategories";

function AdminPackageSetup() {
  return (
    <>
      <AdminPackageTourPlaces />
      <p style={{ margin: "50px 0 50px 0" }}></p>
      <AdminPackageTourCategories />
    </>
  );
}

export default AdminPackageSetup;
