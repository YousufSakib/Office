import React from "react";
import { Link } from "react-router-dom";
import "./blocksOfOfferes.scss";
import ShortPara from "../ShortPara";
import { BACKEND_URL } from "../../../dynamicInfo";

function BlocksOfOfferes({ obj }) {
  // console.log("Block of offers: ", obj);
  // console.log(obj);
  // console.log(typeof obj);
  return (
    <div className="card">
      {console.log(obj)}
      <h2>{obj.title}</h2>
      <div className="blockOfOffers">
        {obj.items.map((i) => (
          <Link to={"/packages/" + i.id}>
            <div className="item" key={i.id}>
              <img src={`${BACKEND_URL}/uploads/${i.profileImg}`} alt="" />
              <ShortPara len={20}>{i.name}</ShortPara>
              {i?.duration && (
                <p style={{ margin: "-20px 0 20px 0" }}>{i.duration} days</p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default BlocksOfOfferes;
