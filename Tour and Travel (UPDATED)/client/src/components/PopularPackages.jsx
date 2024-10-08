import React from "react";
import BlocksOfOfferes from "./blocksOfOfferes/BlocksOfOfferes";
// import { popularPackages } from "../lib/json_updated";

function PopularPackages({ packageResponse }) {
  console.log("from popular packages");
  console.log(packageResponse);
  return (
    <BlocksOfOfferes
      obj={{ items: packageResponse, title: "Popular Packages" }}
    />
  );
}

export default PopularPackages;
