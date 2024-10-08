import React from "react";
import "./packageInfo.scss";
import SingleClickableImg from "../singleImg/SingleClickableImg";

function PackageInfo({ profileImg, name, description }) {
  return (
    <div className="package">
      <div className="profile">
        <img className="bounceIn" src={profileImg} alt="" />
        <h1>{name}</h1>
      </div>
      <p>{description}</p>
      <div className="images">
        <div>
          <SingleClickableImg src={"/pf/Crocodile-of-Sundarban-768x576.jpg"} />
        </div>
        <div>
          <SingleClickableImg src="/pf/Jamtola-Sea-Beach-Sundarban-768x576.jpg" />
        </div>
        <div>
          <SingleClickableImg src="/pf/Fishermen-Village-Sundarban-300x225.jpg" />
        </div>
        <div>
          <SingleClickableImg src="/pf/Harberia-Sundarban-768x576.jpg" />
        </div>
        <div>
          <SingleClickableImg src="/pf/Inside-Sundarban-Forest-768x576.jpg" />
        </div>
      </div>
    </div>
  );
}

export default PackageInfo;
