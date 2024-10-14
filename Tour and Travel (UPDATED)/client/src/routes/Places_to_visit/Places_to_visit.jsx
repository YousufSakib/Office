import React, { useEffect } from "react";
import SingleClickableImg from "../../components/singleImg/SingleClickableImg";
import "./places_to_visit.scss";
import slowScrollToTop from "../../lib/slowScrolltoTop";

function Places_to_visit() {
  useEffect(() => {
    const targetElement = document.getElementById("places_to_visit");
    slowScrollToTop(targetElement, 80, 1000);
    // targetElement.scrollIntoView({ behavior: "smooth" });
  }, []);
  return (
    <div className="places_to_visit" id="places_to_visit">
      <h1>Places to visit</h1>
      <p>
        Highlights of Bangladesh Tour covers top sites of Bangladesh including
        UNESCO World Heritages. This is a captivating sojourn through the
        cultural and natural wonders of this South Asian gem. Explore the
        Sundarbans, the world’s largest mangrove forest, where Bengal tigers
        roam freely. Immerse yourself in the historical charm of Bagerhat’s
        mosques, including the iconic Sixty Dome Mosque. Discover Dhaka city,
        the old capital Sonargaon, and the beautiful Barisal of its backwater
        cruise & floating market. Explore the Ruins of the Buddhist Vihara at
        Paharpur, a testament to Bangladesh’s rich cultural tapestry, 3rd
        century BC ruins at Mahasthangarh and historical Puthia City in
        Rajshahi. Sreemangal unveils the verdant beauty of the “Tea Capital of
        Bangladesh.” Explore lush tea gardens, savor world-renowned flavors, and
        immerse yourself in the biodiversity of Lawachara National Park
        including Manipuri, Khasia & Tripura Villages. The journey offers a
        tapestry of experiences, from the serenity of the landscapes to the
        richness of Bangladesh’s cultural heritages, creating an unforgettable
        adventure for those seeking to discover the unique treasures that define
        this diverse and vibrant nation.
      </p>

      <h2>Dhaka</h2>
      <p>
        As the capital city of Bangladesh, Dhaka is a bustling metropolis that
        blends rich history with modern vibrancy. Visitors can explore the
        historic Lalbagh Fort, the stunning Ahsan Manzil, and the lively
        Sadarghat riverfront. The city is also famous for its vibrant markets
        and street food, offering a taste of local culture. Dhaka's museums,
        such as the National Museum, provide insight into the country’s
        heritage, making it an essential stop for anyone seeking to understand
        Bangladesh's unique identity.
      </p>
      <div className="images">
        <div>
          <SingleClickableImg src="dhaka1.jpg" />
          {/* <img src="Sundarban-Tiger.jpg" alt="" /> */}
        </div>
        <div>
          <SingleClickableImg src="dhaka2.jpg" />
        </div>
        <div>
          <SingleClickableImg src="dhaka3.jpg" />
        </div>
      </div>
      <h2>Sonargaon</h2>
      <p>
        Once the capital of Bengal, Sonargaon is a historical city that offers a
        glimpse into the region’s rich past. Visitors can explore the Panam
        City, a preserved area of ancient buildings, and the Folk Art and Craft
        Museum, which showcases traditional crafts and art forms. The serene
        landscapes along the Meghna River provide a picturesque backdrop for
        exploring this historical gem, making it a perfect day trip from Dhaka.
      </p>
      <div className="images">
        <div>
          <SingleClickableImg src="Sonargaon1.jpg" />
          {/* <img src="Sundarban-Tiger.jpg" alt="" /> */}
        </div>
        <div>
          <SingleClickableImg src="Sonargaon2.jpg" />
        </div>
        <div>
          <SingleClickableImg src="Sonargaon3.jpg" />
        </div>
      </div>
      <h2>Cox's Bazar</h2>
      <p>
        Cox's Bazar boasts the longest natural sea beach in the world,
        stretching over 120 kilometers along the Bay of Bengal. Known for its
        golden sands and stunning sunsets, it’s a favorite destination for both
        local and international tourists. Visitors can indulge in various
        activities, including beach sports, surfing, and exploring nearby
        islands like Saint Martin’s. The vibrant atmosphere, coupled with
        numerous hotels and restaurants, makes Cox's Bazar a perfect getaway for
        relaxation and adventure.
      </p>
      <div className="images">
        <div>
          <SingleClickableImg src="Cox_Bazar1.jpg" />
          {/* <img src="Sundarban-Tiger.jpg" alt="" /> */}
        </div>
        <div>
          <SingleClickableImg src="Cox_Bazar2.jpg" />
        </div>
        <div>
          <SingleClickableImg src="Cox_Bazar3.jpg" />
        </div>
      </div>
      <h2>Bandarban</h2>
      <p>
        Nestled in the Chittagong Hill Tracts, Bandarban is renowned for its
        stunning hills, valleys, and tribal culture. Adventure seekers can trek
        through the scenic landscapes, visit the majestic Nilgiri hills, and
        explore the tranquil Sangu River. The region is rich in biodiversity and
        offers opportunities to experience the unique traditions of the
        indigenous communities. Bandarban’s breathtaking views and serene
        environment make it a perfect destination for those looking to connect
        with nature.
      </p>
      <div className="images">
        <div>
          <SingleClickableImg src="Bandarban1.jpg" />
          {/* <img src="Sundarban-Tiger.jpg" alt="" /> */}
        </div>
        <div>
          <SingleClickableImg src="Bandarban2.jpg" />
        </div>
        <div>
          <SingleClickableImg src="Bandarban3.jpg" />
        </div>
      </div>
      <h2>Chittagong Hill Tracts</h2>
      <p>
        The Chittagong Hill Tracts is a stunning region characterized by rolling
        hills, lush greenery, and a rich tapestry of indigenous cultures. This
        area is perfect for adventure seekers, offering opportunities for
        trekking, kayaking, and exploring remote villages. Visitors can
        experience the vibrant traditions of the hill tribes, such as the Chakma
        and Marma, and enjoy the breathtaking views from various vantage points.
        The tranquil landscapes and rich biodiversity make this a unique
        destination for nature lovers.
      </p>
      <div className="images">
        <div>
          <SingleClickableImg src="Chittagong Hill Tracts1.jpg" />
          {/* <img src="Sundarban-Tiger.jpg" alt="" /> */}
        </div>
        <div>
          <SingleClickableImg src="Chittagong Hill Tracts2.jpg" />
        </div>
        <div>
          <SingleClickableImg src="Chittagong Hill Tracts3.jpg" />
        </div>
      </div>
      <h2>Rangamati</h2>
      <p>
        Rangamati is often called the "Lake District" of Bangladesh due to its
        picturesque Kaptai Lake, surrounded by hills and forests. The area is
        perfect for boating, fishing, and enjoying the serene beauty of nature.
        Visitors can explore the local tribal culture, visit the floating
        markets, and hike to the nearby hills for panoramic views. The vibrant
        natural scenery, combined with the cultural richness, makes Rangamati an
        enchanting spot for both relaxation and adventure.
      </p>
      <div className="images">
        <div>
          <SingleClickableImg src="Rangamati1.jpg" />
          {/* <img src="Sundarban-Tiger.jpg" alt="" /> */}
        </div>
        <div>
          <SingleClickableImg src="Rangamati2.jpg" />
        </div>
        <div>
          <SingleClickableImg src="Rangamati3.jpg" />
        </div>
      </div>
      <h2>Sylhet</h2>
      <p>
        Sylhet, known for its lush tea gardens and rolling hills, is often
        referred to as the “Land of Two Leaves and a Bud.” This picturesque
        region is perfect for nature lovers, with attractions like the Ratargul
        Swamp Forest and the stunning Jaflong area. The serene beauty of the tea
        estates, combined with the cultural richness of the local Sylheti
        people, makes Sylhet a peaceful retreat. Visitors can also explore the
        iconic shrine of Hazrat Shah Jalal, a significant site for many
        pilgrims.
      </p>
      <div className="images">
        <div>
          <SingleClickableImg src="sylhet1.jpg" />
          {/* <img src="Sundarban-Tiger.jpg" alt="" /> */}
        </div>
        <div>
          <SingleClickableImg src="sylhet2.jpg" />
        </div>
        <div>
          <SingleClickableImg src="sylhet3.jpg" />
        </div>
      </div>
      <h2>Srimangal</h2>
      <p>
        Srimangal is called “The land of two leaves and a bud” and also known as
        the camellia, green carpet or Tea Mountain. Delighted with the revolving
        hills, the endless tea plantations, rubber & pineapple gardens, and deep
        forest ground are bound to make your days memorable. Just offer entering
        the tea estates the nice smells and green beauty will lead you many
        kilometers away. The town is small & travel-friendly to sink into the
        greenery. This is one of the best places to spend days with hiking,
        wildlife watching and drinking fresh tea.
        <div className="images">
          <div>
            <SingleClickableImg src="Srimangal1.jpg" />
            {/* <img src="Sundarban-Tiger.jpg" alt="" /> */}
          </div>
          <div>
            <SingleClickableImg src="Srimangal2.jpg" />
          </div>
          <div>
            <SingleClickableImg src="Srimangal3.jpg" />
          </div>
        </div>
      </p>
      <div className="place_imgWrapper" style={{ marginTop: "25px" }}>
        <SingleClickableImg src="Tea-Estate-Bangladesh.jpg" />
      </div>
      <h2>Khulna</h2>
      <p>
        Khulna is the gateway to the Sundarbans and is rich in cultural
        heritage. The city offers a blend of modernity and tradition, with
        bustling markets and serene riverfronts. Visitors can take boat trips to
        explore the nearby mangrove forests or enjoy local cuisine at riverside
        eateries. Khulna is also home to the historic Shilaidaha, where the
        famous poet Rabindranath Tagore once lived, providing a glimpse into
        Bangladesh’s literary heritage.
      </p>
      <div className="images">
        <div>
          <SingleClickableImg src="Khulna1.jpg" />
          {/* <img src="Sundarban-Tiger.jpg" alt="" /> */}
        </div>
        <div>
          <SingleClickableImg src="Khulna2.jpg" />
        </div>
        <div>
          <SingleClickableImg src="Khulna3.jpg" />
        </div>
      </div>
      <h2>Sundarbans</h2>
      <p>
        The Sundarbans, the largest mangrove forest in the world, is a UNESCO
        World Heritage Site and a breathtaking natural wonder. This vast
        ecosystem is home to the elusive Bengal tiger, along with a rich
        diversity of flora and fauna. Visitors can explore the winding rivers
        and lush landscapes by boat, experiencing the unique wildlife and the
        tranquil beauty of this iconic region. The Sundarbans also offer a
        glimpse into the traditional livelihoods of the local communities,
        making it a must-visit for nature enthusiasts.
        <div className="images">
          <div>
            <SingleClickableImg src="Sundarban-Tiger.jpg" />
            {/* <img src="Sundarban-Tiger.jpg" alt="" /> */}
          </div>
          <div>
            <SingleClickableImg src="Sundarbans1.jpg" />
          </div>
          <div>
            <SingleClickableImg src="Sundarbans3.jpg" />
          </div>
        </div>
      </p>
      <h2>Paharpur</h2>
      <p>
        The ancient ruins of Paharpur, a UNESCO World Heritage Site, showcase
        the architectural brilliance of the ancient Pala Empire. The site
        features the remnants of Somapura Mahavihara, one of the largest
        Buddhist monasteries in South Asia. Visitors can wander through the
        impressive ruins, admire the intricate terracotta carvings, and learn
        about the historical significance of this cultural gem. Paharpur offers
        a fascinating glimpse into the region’s rich heritage and is a
        must-visit for history enthusiasts. Feel free to modify any of the
        paragraphs to better fit the style and tone of your website!
      </p>
      <div className="images">
        <div>
          <SingleClickableImg src="Paharpur1.jpg" />
          {/* <img src="Sundarban-Tiger.jpg" alt="" /> */}
        </div>
        <div>
          <SingleClickableImg src="Paharpur2.jpg" />
        </div>
        <div>
          <SingleClickableImg src="Paharpur3.jpg" />
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

export default Places_to_visit;
