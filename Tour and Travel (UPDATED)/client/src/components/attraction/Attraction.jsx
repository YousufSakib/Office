import React from "react";
import { Link } from "react-router-dom";
import "./attraction.scss";

function Attraction() {
  return (
    <div className="attraction">
      <p>
        <span style={{ color: "blue" }}>Highlights of the Bangladesh Tour</span>{" "}
        takes you to the must-visit destinations of this enchanting country,
        featuring its UNESCO World Heritage sites. This captivating journey
        invites you to explore the cultural and natural wonders of South Asia’s
        hidden gem. Venture into the Sundarbans, the largest mangrove forest in
        the world, where you might spot the majestic Bengal tiger. Experience
        the historical allure of Bagerhat, home to remarkable mosques, including
        the famous Sixty Dome Mosque. Discover the bustling city of Dhaka, the
        ancient capital of Sonargaon, and the picturesque Barisal, known for its
        scenic backwater cruises and floating markets. Uncover the Ruins of the
        Buddhist Vihara at Paharpur, which reflect Bangladesh’s rich cultural
        heritage, alongside the 3rd-century BC remnants at Mahasthangarh and the
        historic Puthia City in Rajshahi. In Sreemangal, witness the lush
        landscapes of the “Tea Capital of Bangladesh,” where you can explore
        verdant tea gardens, savor renowned flavors, and immerse yourself in the
        biodiversity of Lawachara National Park, including visits to Manipuri,
        Khasia, and Tripura villages. This journey weaves together a rich array
        of experiences, from serene landscapes to the profound cultural heritage
        of Bangladesh, creating an unforgettable adventure for those eager to
        uncover the unique treasures of this vibrant and diverse nation.
      </p>
      <div className="items">
        <Link to="/meet-Bangladesh">
          <div className="item">
            <img src="pf/Bangladesh_map.png" alt="" />
            <div className="text">
              <span>Discover Bangladesh</span>
              <p>Terrain, People & Heritage</p>
            </div>
          </div>
        </Link>

        <Link to="/places-to-visit">
          <div className="item">
            <img src="pf/culture.webp" alt="" />
            <div className="text">
              <span>Must-see destinations</span>
              <p>Globally renowned & recognized list</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Attraction;
