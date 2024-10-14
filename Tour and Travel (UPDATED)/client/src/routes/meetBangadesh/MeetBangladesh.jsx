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
      <h1>Meet Bangladesh</h1>
      <p>
        Bangladesh is a South-Asia greenest bijou- a land plaited with rivers &
        smiling peoples and exhilarating mix with fascinating history, vibrant
        cultures, panoramic beauties, historical ruins, flora and fauna, hills
        and forests, sandy sea beaches and wildlife, is waiting to welcome . The
        world’s longest sandy beach- Cox’s Bazaar, the world’s single largest
        mangrove forest- Sundarbans forest-the home of man eating tigers,
        Oceanic Kuakata, Coral island-Saint martin’s, the home of colorful
        Indigenous group Chittagong Hill Tracts Bandarban and Lake City
        Rangamati, the scenic beauty of the hilly regions, historic and
        archaeological sites etc. are life time experience for travelers.
        Bangladesh, a land of tourists, researchers, and wildlife and nature
        lovers.
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
      <h2>Hidden Riches</h2>
      <p>
        The hidden riches of Bangladesh will seduce you gradually to be amazed
        like seasonal colors and smiling people. The world’s largest mangrove
        forest is here, the land of man-eater tigers, saltwater crocodiles,
        dotted deer, birds, bull sharks, various primates and snakes with more
        than 300 rivers named Sundarbans which covers an area of 10000 square
        kilometers. It’s been marked as UNESCO world heritage site along with
        Paharpur Buddist Temple and famous 15th Century creation ‘Sixty Domed
        Mosque’ in Bagerhat, will force you to call ‘Bangladesh’ as a beautiful
        country. Besides, the mosques and temples made more than 100 centuries,
        and the archeological monuments will enrich the historical tradition of
        this land to you. Did you know that? This small country having the
        largest sea beach in the world. Cox’s Bazaar, the 120 km longest beach
        of Bay of Bengal, which can give you tranquility. And never miss Saint
        Martin Island, the island of blue water and coconut garden. Although,
        majority of the people are Muslim, you can find the separate world when
        you step down to the Chittagong hill tracts area. There is still home to
        Christian and Buddhist Adivasi tribal peoples, who spend life with their
        own cultures. Sylhet is familiar as ‘land of tea’ will give you the
        various taste of tea as well as the technique to sink greenery.
        <div style={{ marginTop: "25px" }}>
          <SingleClickableImg src="Rangamati.jpg" />
        </div>
      </p>
      <h2>Welcoming People</h2>
      <p>
        Bangladeshi culture is famously welcoming and hospitable. If you enjoy
        making friends, blending with so people and traveling without any
        disturbance, this is apparently the best country to explore. You could
        be served by being the center of attention very easily here, with full
        of joy and smiling faces.
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
      <h2>Quick Facts</h2>
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
          <span>Population:</span> 2016 estimate- 162,951,560, 2011
          census-149,772,364, Density- 1,106/ sq. km. (2,864.5/sq mi)
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
          India and Myanmar.<span>Drives:</span> On the left.
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
