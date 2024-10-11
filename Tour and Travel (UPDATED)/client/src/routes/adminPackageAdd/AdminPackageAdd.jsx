import React, { useState } from "react";
import "./adminPackageAdd.scss";
import axios from "axios";
import { BACKEND_URL } from "../../../dynamicInfo";

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
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/packages`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );
      alert("Packages created successfully!");
      console.log(response.data);
    } catch (error) {
      console.error("Error uploading files:", error);
      alert("Failed to create the package. Try again later.");
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
        <button type="submit" className="button">
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

// {
//   "createdBy": "Yousuf",
//   "destination": "sylhet",
//   "duration": 9,
//   "category": "Hill view",
//   "name": "sylhet-jaflong",
//   "profileImg": "/pf/The-Sundarbans-350x230.gif",
//   "description": "Discover the enchanting Sundarbans and the historic mosque city of Bagerhat on a Bangladesh tour—2 UNESCO World Heritage Sites. Navigate waterways through lush mangrove forests, encountering Bengal tigers and diverse wildlife. Immerse in local culture, visit villages and witness the harmonious coexistence of nature and communities. A unique adventure awaits in this ecological wonderland. The Sundarbans mangrove forest is one of the most extensive single such forests in the world (140,000 ha). It lies on the delta of the Bay’s Ganges, Brahmaputra, and Meghna rivers of Bengal. It is adjacent to the border of India’s Sundarbans World Heritage Site inscribed in 1987. The site is intersected by a complex network of tidal waterways, mudflats, and small islands of salt-tolerant mangroves. It presents an excellent example of ongoing ecological processes. The area is known for its wide range of fauna, including 260 bird species, the man-eating Bengal tiger, and other threatened species such as the estuarine crocodile and the Indian python. Bagerhat, hosts the magnificent Sixty Dome Mosque, a UNESCO World Heritage Site. Built in the 15th century, it’s impressive architecture and intricate terracotta decorations reflect the region’s rich history.",
//   "images": [
//     {"src" : "/pf/Crocodile-of-Sundarban-768x576.jpg"},
//     {"src": "/pf/Jamtola-Sea-Beach-Sundarban-768x576.jpg"},
//     {"src": "/pf/Fishermen-Village-Sundarban-300x225.jpg"}
//   ],
//   "attractions": [
//     {"attraction": "Sixty Dome Mosque"},
//     {"attraction": "Shrine of Khan Jahan Ali"},
//     {"attraction": "Harbaria Eco-Tourism Center"}
//   ],
//   "tourHighLights":  [
//       {
//           "highlight": "UNESCO Heritages",
//           "description": "Visit two world heritages, Sundarbans and Sixty Dome Mosque in a single trip."
//       }
//   ],
//   "pricePerPerson": [
//       {
//           "priceType": "Starting Price",
//           "priceTaka": 4500
//       }
//   ]
// }

//Tour Description Tour Description Tour Description
//"Sixty Dome Mosque", "Sixty Dome Mosque2"
// "UNESCO Heritages": "Visit two world heritages, Sundarbans and Sixty Dome Mosque";
// "UNESCO Heritages 2": "Visit two world heritages, Sundarbans and Sixty Dome Mosque2"
//"Starting Price" : "4500";
