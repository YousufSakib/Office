import React, { useEffect, useState } from "react";
import "./adminUpdatePackage.scss";
import { BACKEND_URL } from "../../../dynamicInfo";
import axios from "axios";
import { useParams } from "react-router-dom";
import FullScreenloading from "../../components/fullScreenloading/FullScreenloading";
import ComponentLoader from "../../components/componentLoader/ComponentLoader";
import randomChar from "../../lib/randomChar";

function AdminUpdatePackage() {
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

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
    // console.log(event.target.files);
    // console.log(typeof event.target.files);
    setImages(Array.from(event.target.files));
  };

  useEffect(() => {
    const url = `${BACKEND_URL}/api/v1/packages/${id}`;
    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        setData(response.data);
        setLoading(false);
        setProfileImg(response.data.profileImg);
        setImages(response.data.images);
        setCreatedBy(response.data.createdBy);
        setDestination(response.data.destination);
        setDuration(response.data.duration);
        setCategory(response.data.category);
        setName(response.data.name);
        setDescription(response.data.description);

        let modifiedText = JSON.parse(response.data.attractions)
          .map((item) => `${item.attraction};`)
          .join("\n");
        setAttractions(modifiedText);

        modifiedText = JSON.parse(response.data.tourHighLights)
          .map((item) => `${item.highlight} : ${item.description};`)
          .join("\n");
        setTourHighLights(modifiedText);
        modifiedText = JSON.parse(response.data.pricePerPerson)
          .map((item) => `${item.priceType} : ${item.priceTaka};`)
          .join("\n");
        setPricePerPerson(modifiedText);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!profileImg || images.length === 0) {
      alert("Please select a feature image, some package location images.");
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

    formData.append("attractions", funcFormatAttractions(attractions));
    formData.append("pricePerPerson", funcFormatPricePerPerson(pricePerPerson));
    formData.append("tourHighLights", funcFormatTourHighLights(tourHighLights));

    for (const [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    }
    try {
      const response = await axios.put(
        `${BACKEND_URL}/api/v1/packages/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );
      alert("The packageackage updated successfully!");
    } catch (error) {
      console.error("Error packageackage", error);
      alert("Failed to update");
    }
  };

  return (
    <>
      {loading && <FullScreenloading />}
      {loading || (
        <div className="adminPackageUpdate">
          <h2>Update and Save</h2>
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
              <label htmlFor="multiPleTourimages">
                Choose multiple images:
              </label>
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
            <button type="submit" className="button">
              Save
            </button>
          </form>
        </div>
      )}
    </>
  );
}

export default AdminUpdatePackage;

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
        priceTaka: parseInt(priceTaka, 10), // Convert price to number
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
