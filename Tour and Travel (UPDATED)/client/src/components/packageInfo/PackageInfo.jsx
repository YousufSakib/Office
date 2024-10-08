import React from "react";
import "./packageInfo.scss";
import SingleClickableImg from "../singleImg/SingleClickableImg";
//{ images, profileImg, name, description }
function PackageInfo({ packageResponse }) {
  // console.log("from packageTable ");
  // console.log(packageResponse);
  const images = JSON.parse(packageResponse.images);
  // console.log("log from package info " + packageResponse.images);
  // console.log(typeof packageResponse.images);
  return (
    <div className="package">
      <div className="profile">
        <img className="bounceIn" src={packageResponse?.profileImg} alt="" />
        <h1>{packageResponse?.name}</h1>
      </div>
      <p>{packageResponse?.description}</p>
      <div className="images">
        {images.map((i) => (
          <div key={i.key}>
            <SingleClickableImg src={i.src} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PackageInfo;
