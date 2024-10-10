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
      <div className="profile">
        <img
          className="bounceIn"
          src={`${BACKEND_URL}/uploads/${packageResponse?.profileImg}`}
          alt=""
        />
        <h1>{packageResponse?.name}</h1>
      </div>
      <p>{packageResponse?.description}</p>
      <div className="images">
        {packageResponse.images.map((i) => (
          <div key={i.key}>
            <SingleClickableImg src={`${BACKEND_URL}/uploads/${i.src}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PackageInfo;
