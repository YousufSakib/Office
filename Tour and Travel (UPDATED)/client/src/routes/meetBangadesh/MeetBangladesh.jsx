import React, { useEffect } from "react";
import "./meetBangladesh.scss";
import SingleClickableImg from "../../components/singleImg/SingleClickableImg";
import slowScrollToTop from "../../lib/slowScrolltoTop";

function MeetBangladesh() {
  useEffect(() => {
    const targetElement = document.getElementById("meetBangladesh");
    slowScrollToTop(targetElement, 110, 1000);
    // targetElement.scrollIntoView({ behavior: "smooth" });
  }, []);
  return (
    <div className="meetBangladesh" id="meetBangladesh">
      <h1>Discover Bangladesh</h1>
      <p>
        Bangladesh is a verdant gem in South Asia, characterized by its
        intricate network of rivers and friendly locals. This captivating
        country boasts a rich tapestry of history, dynamic cultures, and
        stunning natural landscapes. Visitors can explore the world’s longest
        natural sandy beach, Cox’s Bazar, and the expansive Sundarbans, the
        largest mangrove forest known for its intriguing wildlife, including the
        famous Bengal tiger. Other highlights include the picturesque Kuakata
        beach, the coral paradise of Saint Martin’s Island, and the culturally
        diverse Chittagong Hill Tracts, home to vibrant indigenous communities.
        The breathtaking hilly landscapes of Bandarban and the charming lakes of
        Rangamati offer unforgettable experiences. With its wealth of historical
        sites and natural wonders, Bangladesh is a paradise for travelers,
        researchers, and nature enthusiasts alike.
      </p>
      <div className="images">
        <div>
          <SingleClickableImg src="Sundarban-Tiger.jpg" />
          {/* <img src="Sundarban-Tiger.jpg" alt="" /> */}
        </div>
        <div>
          <SingleClickableImg src="Tea-Plantation-Tour-Bd.jpg" />
        </div>
        <div>
          <SingleClickableImg src="Coxs-Bazaar-Saintmartin.jpg" />
        </div>
        <div>
          <SingleClickableImg src="Paharpur-Temple-Village-Tou.jpg" />
        </div>
      </div>
      <h2>Concealed Treasures</h2>
      <p>
        The hidden treasures of Bangladesh will enchant you with their charm,
        much like the changing seasons and the warm smiles of its people. Home
        to the world’s largest mangrove forest, the Sundarbans, this remarkable
        region is inhabited by Bengal tigers, saltwater crocodiles, spotted
        deer, diverse bird species, and various primates. Spanning over 10,000
        square kilometers, the Sundarbans is recognized as a UNESCO World
        Heritage site, alongside the Paharpur Buddhist Temple and the stunning
        15th-century Sixty Dome Mosque in Bagerhat, both of which highlight
        Bangladesh's beauty. With over a century's worth of mosques and temples
        and rich archaeological sites, the historical legacy of this land is
        truly captivating. Did you know that Bangladesh boasts the longest
        natural sea beach in the world? Cox’s Bazar stretches for 120 kilometers
        along the Bay of Bengal, offering serene moments by the sea. Don't miss
        the enchanting Saint Martin Island, known for its crystal-clear waters
        and coconut groves. While the majority of the population is Muslim, the
        Chittagong Hill Tracts present a different cultural landscape, home to
        Christian and Buddhist Adivasi communities living in harmony with their
        traditions. Sylhet, famously known as the “land of tea,” invites you to
        savor a variety of teas amidst its lush green scenery.
        <div style={{ marginTop: "25px" }}>
          <SingleClickableImg src="Rangamati.jpg" />
        </div>
      </p>
      <h2>Warm-hearted Locals</h2>
      <p>
        Bangladeshi culture is renowned for its warmth and hospitality. If you
        love making friends, connecting with locals, and experiencing travel
        without disruptions, this is undoubtedly the ideal country to explore.
        Here, you'll find yourself at the center of attention, surrounded by
        joyful, smiling faces eager to share their culture and traditions with
        you.
      </p>
      <div className="images">
        <div>
          <SingleClickableImg src="Chittagong-Hill-Tracts-Tour.jpg" />
        </div>
        <div>
          <SingleClickableImg src="Barisal-Backwater.jpg" />
        </div>
        <div>
          <SingleClickableImg src="Otter-Fishing-Tour.jpg" />
        </div>
      </div>
      <h2>Fast Facts</h2>
      <div className="quick-fact">
        <p>
          <span>Official Name:</span> The People’s Republic of Bangladesh.
        </p>
        <p>
          <span>State Language:</span> Bengali<span>Capital:</span> Dhaka
        </p>
        <p>
          <span>Nationality:</span> Bangladeshi<span>Name of Currency:</span>{" "}
          Taka(TK)
        </p>
        <p>
          <span>Area:</span> 56977 sq. miles or 147570 sq. km.
        </p>
        <p>
          <span>Territorial Water:</span> 200 nautical miles.
        </p>
        <p>
          <span>Population:</span> 2024 estimate- 173,562,364
        </p>
        <p>
          <span>State Religion:</span> Islam but other main religions namely
          Hinduism, Buddhism, Christianity are practiced in peace and harmony.
        </p>
        <p>
          <span>National Anthem:</span> The first ten lines of ‘Amar Sonar
          Bangla’ written by Nobel Luareate Rabindranath Tagore.
        </p>
        <p>
          <span>National Flag:</span> Consists of a circle colored red
          throughout its area, resting on a green rectangular background.
        </p>
        <p>
          <span>Geographical Location:</span> North, West & South-India, East-
          India and Myanmar.
        </p>
        <p>
          <span>Drives:</span> On the left.
        </p>
        <p>
          <span>Time Zone:</span> UTC +6 (BST)
        </p>
        <p>
          <span>Calling Code:</span> +880
        </p>
        <p>
          <span>SO 3166 Code:</span> BD
        </p>
      </div>
    </div>
  );
}

export default MeetBangladesh;
