import React from "react";
import "./adminPackageSetup.scss";
function AdminPackageSetup() {
  const places = {
    Bangladesh: {
      "Dhaka Division": [
        {
          name: "Dhaka City",
          attractions: [
            "Lalbagh Fort",
            "Ahsan Manzil",
            "Liberation War Museum",
            "National Parliament House",
            "Dhakeshwari Temple",
          ],
        },
        {
          name: "Sonargaon",
          attractions: [
            "Panam City",
            "Folk Art and Craft Museum",
            "Goaldi Mosque",
          ],
        },
        {
          name: "Narayanganj",
          attractions: ["Sadarghat River Port", "Old Bazar Area"],
        },
      ],
      "Chittagong Division": [
        {
          name: "Cox’s Bazar",
          attractions: [
            "Longest Sea Beach",
            "Himchari Waterfall",
            "Inani Beach",
            "Ramu Buddhist Village",
          ],
        },
        {
          name: "Saint Martin’s Island",
          attractions: ["Coral Island", "Coconut Trees", "Chera Dwip"],
        },
        {
          name: "Bandarban",
          attractions: [
            "Nilgiri Hills",
            "Boga Lake",
            "Chimbuk Hill",
            "Thanchi",
            "Nafa-khum Waterfall",
          ],
        },
        {
          name: "Rangamati",
          attractions: [
            "Kaptai Lake",
            "Shuvolong Waterfalls",
            "Hanging Bridge",
          ],
        },
        {
          name: "Khagrachari",
          attractions: [
            "Alutila Cave",
            "Risang Waterfall",
            "Dighinala Maniker Dighi",
          ],
        },
      ],
      "Sylhet Division": [
        {
          name: "Sylhet City",
          attractions: [
            "Hazrat Shah Jalal Mazar Sharif",
            "Ali Amjad Clock",
            "Ratargul Swamp Forest",
          ],
        },
        {
          name: "Jaflong",
          attractions: ["Stone Collection Spot", "Dauki River", "Tea Gardens"],
        },
        {
          name: "Srimangal",
          attractions: [
            "Tea Gardens",
            "Lawachara National Park",
            "Madhabkunda Waterfall",
            "Baikka Beel Wetland Sanctuary",
          ],
        },
        {
          name: "Bichnakandi",
          attractions: ["Rocky Riverbank", "Mountain View", "Streams"],
        },
        {
          name: "Ratargul",
          attractions: ["Swamp Forest", "Wildlife Watching", "Boat Rides"],
        },
      ],
      "Khulna Division": [
        {
          name: "Sundarbans",
          attractions: [
            "Mangrove Forest",
            "Royal Bengal Tigers",
            "Wildlife Safari",
          ],
        },
        {
          name: "Bagerhat",
          attractions: [
            "Sixty Dome Mosque",
            "Khan Jahan Ali's Shrine",
            "Sundar Mahal",
          ],
        },
        {
          name: "Kuakata",
          attractions: ["Sea Beach", "Sunrise and Sunset View", "Jhau Forest"],
        },
      ],
      "Barisal Division": [
        {
          name: "Kuakata",
          attractions: ["Sea Beach", "Fatrar Char", "Lebur Char Island"],
        },
        {
          name: "Durga Sagar",
          attractions: ["Largest Pond in Southern Bangladesh"],
        },
        {
          name: "Guthia Mosque",
          attractions: ["Guthia Mosque Complex", "Lush Gardens"],
        },
      ],
      "Rajshahi Division": [
        { name: "Paharpur", attractions: ["Somapura Mahavihara"] },
        {
          name: "Rajshahi City",
          attractions: ["Varendra Research Museum", "Padma River"],
        },
        {
          name: "Mahasthangarh",
          attractions: ["Ancient Archaeological Site", "Govinda Bhita Temple"],
        },
      ],
      "Rangpur Division": [
        { name: "Dinajpur", attractions: ["Kantajew Temple", "Ramsagar Lake"] },
        {
          name: "Rangpur City",
          attractions: ["Tajhat Palace", "Begum Rokeya Memorial"],
        },
        { name: "Mithapukur", attractions: ["Mithapukur Mosque"] },
      ],
      "Mymensingh Division": [
        {
          name: "Mymensingh City",
          attractions: [
            "Shoshi Lodge",
            "Jainul Abedin Museum",
            "Brahmaputra River",
          ],
        },
        { name: "Madhutila Eco Park", attractions: ["Eco Park", "Wildlife"] },
        { name: "Birishiri", attractions: ["China Clay Hills", "Blue Lake"] },
      ],
    },
  };
  return (
    <div className="adminPackageSetup">
      <h3>
        Select all the location/spot/destination on which you are offering
        packages
      </h3>
      <label for="standard-select">Default Select Menu </label>
      <div className="select">
        <select id="standard-select">
          <option value="Option 1">Twitter </option>
          <option value="Option ">Facebook</option>
          <option value="Option 3">Reddit </option>
          <option value="Option 4">Youtube </option>
        </select>
        <span class="focus"></span>
      </div>
    </div>
  );
}

export default AdminPackageSetup;
