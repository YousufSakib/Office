import React from "react";
import "./amenities.scss";
function Amenities() {
  return (
    <>
      <div className="amenitiesHeader">
        <div className="left">
          <h1>Amenities & Facilities</h1>
          <span>
            If you are looking for a relaxing, refreshing and rejuvenating
            experience altogether, we offer all of that under one roof.
          </span>
        </div>

        <button>View All</button>
      </div>
      <div className="amenities">
        <div className="amenity">
          <img src="swimming-pool.jpg" alt="" />
          <h2>An Infinite-edge Pool</h2>
          <p>
            Experience the joy of swimming in our infinity-edge pool that gives
            you a nice picturesque view.
          </p>
          <button>Read more</button>
        </div>
        <div className="amenity">
          <img src="swimming-pool.jpg" alt="" />
          <h2>An Infinite-edge Pool</h2>
          <p>
            Experience the joy of swimming in our infinity-edge pool that gives
            you a nice picturesque view.
          </p>
          <button>Read more</button>
        </div>
        <div className="amenity">
          <img src="swimming-pool.jpg" alt="" />
          <h2>An Infinite-edge Pool</h2>
          <p>
            Experience the joy of swimming in our infinity-edge pool that gives
            you a nice picturesque view.
          </p>
          <button>Read more</button>
        </div>
      </div>
    </>
  );
}

export default Amenities;
