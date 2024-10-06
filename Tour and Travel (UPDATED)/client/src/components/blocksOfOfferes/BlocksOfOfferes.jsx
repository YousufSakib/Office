import React from "react";
import { Link } from "react-router-dom";
import "./blocksOfOfferes.scss";
import ShortPara from "../ShortPara";
function BlocksOfOfferes({ obj }) {
  return (
    <div className="card">
      <h2>{obj.title}</h2>
      <div className="blockOfOffers">
        {obj.items.map((i) => (
          <Link to={i.link}>
            <div className="item" key={i.id}>
              <img src={i.src} alt="" />
              <ShortPara len={20}>{i.title}</ShortPara>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default BlocksOfOfferes;
