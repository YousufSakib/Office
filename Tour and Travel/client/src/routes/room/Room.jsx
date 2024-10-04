import React from "react";
import "./room.scss";
import RoomCard from "../../components/roomCard/RoomCard";
import { roomsDes } from "../../lib/json";
function Room() {
  return (
    <div className="room">
      <div className="RoomDesHeader">
        <div className="left">
          <h1>Come & Stay With Us</h1>
          <span>
            Pick any of our hotel rooms to experience the delightful decor,
            complemented with modern amenities for a comfortable stay.
          </span>
        </div>

        <button className="amenitiesButton">
          <a href="#">View All</a>
        </button>
      </div>
      <div className="roomCards">
        {roomsDes.map((obj) => (
          <RoomCard key={obj.id} {...obj} />
        ))}
      </div>
    </div>
  );
}

export default Room;
//w750 gap40
