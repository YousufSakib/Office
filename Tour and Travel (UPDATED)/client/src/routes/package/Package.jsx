import React from "react";
import "./package.scss";
import PackageTable from "../../components/packageTable/PackageTable";
import PackageInfo from "../../components/packageInfo/PackageInfo";
function Package() {
  return (
    <div>
      <PackageInfo />
      <PackageTable />
    </div>
  );
}

export default Package;
