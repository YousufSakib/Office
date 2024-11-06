import React from "react";
import "./packageInfo.scss";
import SingleClickableImg from "../singleImg/SingleClickableImg";
import { BACKEND_URL } from "../../../dynamicInfo";

//{ images, profileImg, name, description }
function PackageInfo({ packageResponse }) {
  // console.log("from packageTable ");
  // console.log(packageResponse);
  console.log("log from package info " + packageResponse.images);
  console.log(typeof packageResponse.images);
  return (
    <div className="package">
      <h2>Description</h2>
      <p>{packageResponse?.description}</p>
      <div className="images">
        {packageResponse.images.map((i) => (
          <div key={i.key}>
            <SingleClickableImg
              src={`${BACKEND_URL}/uploads/${i.src}`}
              height={300}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PackageInfo;
