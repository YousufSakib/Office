import React from "react";
import "./roomCard.scss";

function RoomCard({ img, title, des }) {
  return (
    <div className="card">
      <img src={img} alt="" />
      <h3>{title}</h3>
      <span>{des}</span>
      <button>Read more</button>
    </div>
  );
}

export default RoomCard;
