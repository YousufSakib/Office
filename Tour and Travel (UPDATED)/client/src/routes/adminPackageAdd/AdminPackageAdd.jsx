import React, { useState } from "react";
import "./adminPackageAdd.scss";
import axios from "axios";
import randomChar from "../../lib/randomChar";
import { BACKEND_URL } from "../../../dynamicInfo";
import { useNavigate } from "react-router-dom";

function AdminPackageAdd() {
  const [profileImg, setProfileImg] = useState(null);
  const [images, setImages] = useState([]);
  const [createdBy, setCreatedBy] = useState("");
  const [destination, setDestination] = useState("");
  const [duration, setDuration] = useState("");
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [attractions, setAttractions] = useState("");
  const [tourHighLights, setTourHighLights] = useState("");
  const [pricePerPerson, setPricePerPerson] = useState("");
  const navigate = useNavigate();

  const handlePricePerPersonChange = (event) => {
    setPricePerPerson(event.target.value);
  };

  const handleTourHighLightsChange = (event) => {
    setTourHighLights(event.target.value);
  };
  const handleAttractionsChange = (event) => {
    setAttractions(event.target.value);
  };
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };
  const handleDurationChange = (event) => {
    setDuration(event.target.value);
  };
  const handleDestinationChange = (event) => {
    setDestination(event.target.value);
  };
  const handlCreatedByChange = (event) => {
    setCreatedBy(event.target.value);
  };
  const handleProfileImgChange = (event) => {
    setProfileImg(event.target.files[0]);
  };

  const handleImagesChange = (event) => {
    console.log(event.target.files);
    console.log(typeof event.target.files);
    setImages(Array.from(event.target.files));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!profileImg || images.length === 0) {
      alert("Please select a profile image, multiple images.");
      return;
    }

    const formData = new FormData();
    formData.append("profileImg", profileImg);
    images.forEach((img) => {
      formData.append("images", img);
    });

    formData.append("createdBy", createdBy);
    formData.append("destination", destination);
    formData.append("duration", duration);
    formData.append("category", category);
    formData.append("name", name);
    formData.append("description", description);
    formData.append(
      "attractions",
      JSON.stringify(funcFormatAttractions(attractions)),
    );
    formData.append(
      "pricePerPerson",
      JSON.stringify(funcFormatPricePerPerson(pricePerPerson)),
    );
    formData.append(
      "tourHighLights",
      JSON.stringify(funcFormatTourHighLights(tourHighLights)),
    );

    console.log("from Admin package add page");
    for (const [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
      console.log(typeof value);
    }
    console.log("adminpackage sakib");
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/packages`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );
      alert("Package created successfully!");
      navigate(-1);
    } catch (error) {
      console.error("Error creating packages:", error);
      alert("Failed to creating package.");
    }
  };

  return (
    <div className="adminPackageAdd">
      <h2>Fill all the below field to create a new tour package</h2>
      <form onSubmit={handleSubmit}>
        <div className="row full">
          <label htmlFor="profileImg">Choose a feature image:</label>
          <input
            type="file"
            id="profileImg"
            accept="image/*"
            onChange={handleProfileImgChange}
            required
          />
        </div>
        <div className="row full">
          <label htmlFor="multiPleTourimages">Choose multiple images:</label>
          <input
            type="file"
            id="multiPleTourimages"
            accept="image/*"
            multiple
            onChange={handleImagesChange}
            required
          />
        </div>

        <div className="row">
          <label htmlFor="createdBy">CreatedBy</label>
          <input
            type="text"
            name="createdBy"
            id="createdBy"
            onChange={handlCreatedByChange}
            value={createdBy}
          />
        </div>

        <div className="row">
          <label htmlFor="destination">Destination</label>
          <input
            type="text"
            name="destination"
            id="destination"
            onChange={handleDestinationChange}
            value={destination}
          />
        </div>

        <div className="row">
          <label htmlFor="tourDuration">Tour Duration</label>
          <input
            type="number"
            name="duration"
            id="tourDuration"
            onChange={handleDurationChange}
            value={duration}
          />
        </div>

        <div className="row">
          <label htmlFor="tourCategory">Category</label>
          <input
            type="text"
            name="category"
            id="tourCategory"
            onChange={handleCategoryChange}
            value={category}
          />
        </div>

        <div className="row">
          <label htmlFor="tourHeader">Tour Header</label>
          <input
            type="text"
            name="name"
            id="tourHeader"
            onChange={handleNameChange}
            value={name}
          />
        </div>

        <div className="row">
          <label htmlFor="tourDescription">Tour Description</label>
          <textarea
            name="description"
            id="tourDescription"
            onChange={handleDescriptionChange}
            value={description}
          />
        </div>
        <div className="row">
          <label htmlFor="Tourattractions">Tour Attractions</label>
          <textarea
            name="attractions"
            id="Tourattractions"
            onChange={handleAttractionsChange}
            value={attractions}
          />
        </div>

        <div className="row">
          <label htmlFor="tourHighLights">Tour HighLights</label>
          <textarea
            name="tourHighLights"
            id="tourHighLights"
            onChange={handleTourHighLightsChange}
            value={tourHighLights}
          />
        </div>

        <div className="row">
          <label htmlFor="pricePerPerson">Prices</label>
          <textarea
            name="pricePerPerson"
            id="pricePerPerson"
            onChange={handlePricePerPersonChange}
            value={pricePerPerson}
          />
        </div>
        <button type="submit" className="adminpaneladdButton">
          Save
        </button>
      </form>
    </div>
  );
}

export default AdminPackageAdd;
const funcFormatAttractions = (input) => {
  const output = input
    .trim()
    .split("\n")
    .map((line) => {
      const attraction = line.replace(";", "").trim();
      return {
        attraction,
        key: randomChar(10),
      };
    });
  return output;
};

const funcFormatPricePerPerson = (input) => {
  const output = input
    .split(";") // Split by semicolon to get each entry
    .filter((line) => line.trim()) // Filter out any empty lines
    .map((line) => {
      const [priceType, priceTaka] = line.split(":").map((part) => part.trim());
      return {
        priceType: priceType,
        priceTaka: parseInt(priceTaka, 10) || 0, // Convert price to number
        key: randomChar(10),
      };
    });
  return output;
};

const funcFormatTourHighLights = (input) => {
  const output = input
    .split(";") // Split by semicolon to get each entry
    .filter((line) => line.trim()) // Filter out any empty lines
    .map((line) => {
      const [highlight, description] = line
        .split(":")
        .map((part) => part.trim());
      return {
        highlight: highlight,
        description: description,
        key: randomChar(10),
      };
    });
  return output;
};

/*
Trek to Nilgiri Hill for panoramic views;
Boat ride on the Sangu River;
Visit to Buddha Dhatu Jadi (Golden Temple);
*/

/*
Tribes : Interaction with indigenous tribes;
Campfire: Campfire evenings with local stories;
*/

/*
Price Per Person: $220
*/
