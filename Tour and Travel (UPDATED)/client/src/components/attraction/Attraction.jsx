import React from "react";
import { Link } from "react-router-dom";
import "./attraction.scss";

function Attraction() {
  return (
    <div className="attraction">
      <p>
        Bangladesh is a land of river and smiling people in South Asia,
        exhilarating mix with fascinating history, vibrant cultures and
        panoramic beauty of nature is waiting to welcome you. The world's single
        largest mangrove forest, ruins of the largest Buddhist monastery,
        colorful Indigenous groups, the mystery of hilly regions, longest
        unbroken sea-beach & the flourishing islands, endless tea plantations,
        and the generous people are a lifetime experience for travelers.
      </p>
      <div className="items">
        <Link to="/meet-Bangladesh">
          <div className="item">
            <img src="pf/meet-bangladesh.png" alt="" />
            <div className="text">
              <span>Meet Bangladesh</span>
              <p>Land, People & Culture</p>
            </div>
          </div>
        </Link>

        <Link>
          <div className="item">
            <img src="pf/things-to-do.png" alt="" />
            <div className="text">
              <span>Things to do</span>
              <p>Festivals, activities & events</p>
            </div>
          </div>
        </Link>

        <Link>
          <div className="item">
            <img src="pf/Places-to-visit.png" alt="" />
            <div className="text">
              <span>Places to visit</span>
              <p>World famous & popular list</p>
            </div>
          </div>
        </Link>

        <Link>
          <div className="item">
            <img src="pf/world-heritage.png" alt="" />
            <div className="text">
              <span>World heritages</span>
              <p>UNESCO sites</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Attraction;
