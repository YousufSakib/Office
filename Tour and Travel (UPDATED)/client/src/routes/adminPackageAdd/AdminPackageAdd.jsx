import React, { useState } from "react";
import "./adminPackageAdd.scss";
import axios from "axios";
import randomChar from "../../lib/randomChar";
import { BACKEND_URL } from "../../../dynamicInfo";
import { useNavigate } from "react-router-dom";

function AdminPackageAdd() {
  const [formData, setFormData] = useState({
    profileImg: null,
    images: [],
    createdBy: "",
    destination: "",
    duration: "",
    category: "",
    name: "",
    description: "",
    attractions: "",
    tourHighLights: "",
    pricePerPerson: "",
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleProfileImgChange = (event) => {
    setFormData((prev) => ({
      ...prev,
      profileImg: event.target.files[0],
    }));
  };

  const handleImagesChange = (event) => {
    const fileSelected = Array.from(event.target.files);
    setFormData((prev) => ({
      ...prev,
      images: [...prev.images, ...fileSelected],
    }));
  };

  const handleFileRemove = (removeFile) =>
    setFormData((prev) => ({
      ...prev,
      images: prev.images.filter((file) => file !== removeFile),
    }));

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (formData.images.length < 2 || formData.images.length > 4) {
      alert("You must select between 2 to 4 images.");
      return;
    }

    if (!formData.profileImg) {
      alert("Please select a profile image.");
      return;
    }

    const data = new FormData();

    data.append("profileImg", formData.profileImg);
    formData.images.forEach((img) => {
      data.append("images", img);
    });

    // Append other form data
    Object.entries(formData).forEach(([key, value]) => {
      if (key !== "images" && key !== "profileImg") {
        if (key === "attractions") {
          data.append(key, JSON.stringify(funcFormatAttractions(value)));
        } else if (key === "pricePerPerson") {
          data.append(key, JSON.stringify(funcFormatPricePerPerson(value)));
        } else if (key === "tourHighLights") {
          data.append(key, JSON.stringify(funcFormatTourHighLights(value)));
        } else {
          data.append(key, value);
        }
      }
    });

    console.log("from Admin package add page");
    console.log("the following data is going to submitted to the server");

    for (const [key, value] of data.entries()) {
      console.log(`${key}:`, value);
      console.log(typeof value);
    }
    console.log("adminpackage sakib");
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/packages`,
        data,
        {
          "Content-Type": "multipart/form-data",
        },
      );
      alert("Package created successfully!");
      // navigate("/admin/packages");
    } catch (error) {
      console.error("Error creating packages:", error);
      if (error.response) {
        alert(
          `Failed to create package: ${
            error.response.data.message || error.message
          }`,
        );
      } else {
        alert("An unexpected error occurred.");
      }
    }
  };

  return (
    <div className="adminPackageAdd">
      <form onSubmit={handleSubmit}>
        <h2>Fill all the below fields to create a new package</h2>

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
          <div className="showSelectedImages">
            {Array.isArray(formData.images) &&
              formData.images.map((file) => (
                <div key={file.name} className="image">
                  <img src={URL.createObjectURL(file)} alt={file.name} />
                  <span onClick={() => handleFileRemove(file)}>x</span>
                </div>
              ))}
          </div>
          {formData.images.length < 2 || formData.images.length > 4 ? (
            <p style={{ color: "red", padding: "10px", margin: "0" }}>
              You must select between 2 to 4 images
            </p>
          ) : null}
          <p style={{ color: "yellow", padding: "10px", margin: "0" }}>
            {`${formData.images.length} images have been selected`}
          </p>
        </div>

        {[
          "createdBy",
          "destination",
          "duration",
          "category",
          "name",
          "description",
          "attractions",
          "tourHighLights",
          "pricePerPerson",
        ].map((field) => (
          <div className="row" key={field}>
            <label htmlFor={field}>
              {field.charAt(0).toUpperCase() + field.slice(1)}
            </label>
            {field === "description" ||
            field === "attractions" ||
            field === "tourHighLights" ||
            field === "pricePerPerson" ? (
              <textarea
                name={field}
                id={field}
                onChange={handleChange}
                value={formData[field]}
              />
            ) : (
              <input
                type={field === "duration" ? "number" : "text"}
                name={field}
                id={field}
                onChange={handleChange}
                value={formData[field]}
              />
            )}
          </div>
        ))}

        <button type="submit" className="button adminpaneladdButton">
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
      const attraction = line.trim();
      return {
        attraction,
        key: randomChar(10),
      };
    });
  return output;
};

const funcFormatPricePerPerson = (input) => {
  const output = input
    .split("\n")
    .filter((line) => line.trim())
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
    .split("\n")
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
