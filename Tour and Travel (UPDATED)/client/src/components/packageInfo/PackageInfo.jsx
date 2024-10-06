import React from "react";
import "./packageInfo.scss";
import SingleClickableImg from "../singleImg/SingleClickableImg";

function PackageInfo() {
  return (
    <div className="package">
      <div className="profile">
        <img className="bounceIn" src="pf/The-Sundarbans-350x230.gif" alt="" />
        <h1>Bagerhat and Sundarbans Tour</h1>
      </div>
      <p>
        Discover the enchanting Sundarbans and the historic mosque city of
        Bagerhat on a Bangladesh tour—2 UNESCO World Heritage Sites. Navigate
        waterways through lush mangrove forests, encountering Bengal tigers and
        diverse wildlife. Immerse in local culture, visit villages and witness
        the harmonious coexistence of nature and communities. A unique adventure
        awaits in this ecological wonderland. The Sundarbans mangrove forest is
        one of the most extensive single such forests in the world (140,000 ha).
        It lies on the delta of the Bay’s Ganges, Brahmaputra, and Meghna rivers
        of Bengal. It is adjacent to the border of India’s Sundarbans World
        Heritage Site inscribed in 1987. The site is intersected by a complex
        network of tidal waterways, mudflats, and small islands of salt-tolerant
        mangroves. It presents an excellent example of ongoing ecological
        processes. The area is known for its wide range of fauna, including 260
        bird species, the man-eating Bengal tiger, and other threatened species
        such as the estuarine crocodile and the Indian python. Bagerhat, hosts
        the magnificent Sixty Dome Mosque, a UNESCO World Heritage Site. Built
        in the 15th century, it’s impressive architecture and intricate
        terracotta decorations reflect the region’s rich history.
      </p>
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
