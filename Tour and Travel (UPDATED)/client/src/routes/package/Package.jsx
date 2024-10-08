import React from "react";
import "./package.scss";
import PackageTable from "../../components/packageTable/PackageTable";
import PackageInfo from "../../components/packageInfo/PackageInfo";
import { useLoaderData } from "react-router-dom";
function Package() {
  const post = useLoaderData();
  return (
    <div>
      <PackageInfo post={post} />
      <PackageTable post={post} />
    </div>
  );
}

export default Package;
