import React from "react";
import "./amenities.scss";
import { homeAmenities } from "../../lib/json";
function Amenities({ Len, Des, ButtonText, ButtonLink }) {
  return (
    <>
      <div className="amenitiesHeader">
        <div className="left">
          <h1>Amenities & Facilities</h1>
          <span>{Des || ""}</span>
        </div>

        <button className="amenitiesButton">
          <a href={ButtonLink || "#"}>{ButtonText || "Click"}</a>
        </button>
      </div>
      <div className="amenities">
        {homeAmenities?.map((obj) => (
          <div className="amenity" key={obj?.key}>
            <img src={obj?.img} alt={obj?.title} />
            <h2>{obj?.title}</h2>
            <p>{obj?.des}</p>
            <button>Read more</button>
          </div>
        ))}
      </div>
      )
    </>
  );
}

export default Amenities;
