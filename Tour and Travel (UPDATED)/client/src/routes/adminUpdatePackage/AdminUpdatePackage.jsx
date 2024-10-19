import React, { useEffect, useState } from "react";
import "./adminUpdatePackage.scss";
import { BACKEND_URL } from "../../../dynamicInfo";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import FullScreenloading from "../../components/fullScreenloading/FullScreenloading";
import ComponentLoader from "../../components/componentLoader/ComponentLoader";
import randomChar from "../../lib/randomChar";

function AdminUpdatePackage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const [formData, setFormData] = useState({
    profileImg: [],
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
  const [existingImages, setExistingImages] = useState([]);
  const [existingProfileImg, setExistingProfileImg] = useState(null);

  console.log("formData");
  console.log(formData);
  useEffect(() => {
    const fetchPackageData = async () => {
      try {
        const response = await axios.get(
          `${BACKEND_URL}/api/v1/packages/${id}`,
        );
        const packageData = response.data;

        console.log("from admin package update");
        console.log("after fetching package data from server in the useEffect");
        console.log(packageData);

        setFormData({
          ...packageData,
          attractions: JSON.parse(JSON.parse(packageData.attractions))
            .map((obj) => `${obj.attraction}`)
            .join("\n"),
          tourHighLights: JSON.parse(JSON.parse(packageData.tourHighLights))
            .map((obj) => `${obj.highlight} : ${obj.description}`)
            .join("\n"),
          pricePerPerson: JSON.parse(JSON.parse(packageData.pricePerPerson))
            .map((obj) => `${obj.priceType} : ${obj.priceTaka}`)
            .join("\n"),
          images: [], // Start with empty new images
          profileImg: [],
        });
        console.log("after parsing and formatting data looks like");
        console.log(formData);
        console.log("test parsing. images");
        console.log(packageData.images);
        console.log(JSON.parse(packageData.images));
        // console.log(JSON.parse(JSON.parse(packageData.images)));

        // Construct the full URLs for existing images
        const images = JSON.parse(packageData.images).map((obj) => ({
          ...obj,
        }));
        console.log("all images");
        console.log(images);
        setExistingImages(images);
        setExistingProfileImg(packageData.profileImg);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching package data:", error);
        setLoading(false);
      }
    };

    fetchPackageData();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleProfileImgChange = (event) => {
    setFormData((prev) => ({
      ...prev,
      profileImg: Array.from(event.target.files),
    }));
  };
  console.log("form data");
  console.log(formData);
  const handleImagesChange = (event) => {
    const fileSelected = Array.from(event.target.files);
    setFormData((prev) => ({
      ...prev,
      images: [...prev.images, ...fileSelected],
    }));
  };

  const handleFileRemove = (removeFile) => {
    setFormData((prev) => ({
      ...prev,
      images: prev.images.filter((file) => file !== removeFile),
    }));
  };
  const handleExistingImgRemove = (removeUrl) => {
    setExistingImages(existingImages.filter((url) => url !== removeUrl));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (
      formData.images.length + existingImages.length < 2 ||
      formData.images.length + existingImages.length > 4
    ) {
      alert("You must select between 2 to 4 new images.");
      return;
    }

    if (!formData.profileImg) {
      alert("Please select a profile image.");
      return;
    }

    const data = new FormData();

    // Append profile image if selected
    if (formData.profileImg) {
      data.append("profileImg", formData.profileImg);
    }

    // Append new images
    formData.images.forEach((img) => {
      data.append("images", img);
    });

    // Append existing images (only their basenames)
    existingImages.forEach((img) => {
      const basename = img.src;
      data.append("existingImages", basename);
    });

    // Append other form data
    Object.entries(formData).forEach(([key, value]) => {
      if (key !== "images" && key !== "profileImg") {
        if (key === "attractions") {
          data.append(key, funcFormatAttractions(value));
        } else if (key === "pricePerPerson") {
          data.append(key, funcFormatPricePerPerson(value));
        } else if (key === "tourHighLights") {
          data.append(key, funcFormatTourHighLights(value));
        } else {
          data.append(key, value);
        }
      }
    });

    try {
      const response = await axios.put(
        `${BACKEND_URL}/api/v1/packages/${id}`,
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );
      alert("Package updated successfully!");
      navigate("/admin/packages");
    } catch (error) {
      console.error("Error updating packages:", error);
      if (error.response) {
        alert("Failed to update package, Try Again.");
      } else {
        alert("An unexpected error occurred. Try Again.");
      }
    }
  };

  return (
    <>
      {loading && <FullScreenloading />}
      {loading || (
        <div className="adminPackageAdd">
          <form onSubmit={handleSubmit}>
            <h2>Update the tour package</h2>

            <div className="row full">
              <label htmlFor="profileImg">Choose a feature image:</label>
              <input
                type="file"
                id="profileImg"
                accept="image/*"
                onChange={handleProfileImgChange}
              />
            </div>
            <div className="row">
              {formData.profileImg.length > 0 && (
                <div className="showSelectedImages">
                  <div className="image">
                    <img
                      src={URL.createObjectURL(formData.profileImg[0])}
                      alt="new profile"
                    />
                    <span
                      onClick={() =>
                        setFormData((prev) => ({ ...prev, profileImg: [] }))
                      }
                    >
                      x
                    </span>
                  </div>
                </div>
              )}
              {!existingProfileImg || formData.profileImg.length > 0 || (
                <div className="showSelectedImages">
                  <div className="image">
                    <img
                      src={`${BACKEND_URL}/uploads/${existingProfileImg}`}
                      alt="Existing profile"
                    />
                    <span onClick={() => setExistingProfileImg("")}>x</span>
                  </div>
                </div>
              )}
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
              />
            </div>

            <div className="row">
              <div className="showSelectedImages">
                {existingImages.map((img) => (
                  <div key={img.key} className="image">
                    <img
                      src={`${BACKEND_URL}/uploads/${img.src}`}
                      alt="Existing"
                    />
                    <span onClick={() => handleExistingImgRemove(img)}>x</span>
                  </div>
                ))}
                {formData.images.map((file) => (
                  <div key={file.name} className="image">
                    {console.log("file: ", file)}
                    <img src={URL.createObjectURL(file)} alt={file.name} />
                    <span onClick={() => handleFileRemove(file)}>x</span>
                  </div>
                ))}
              </div>
              {formData.images.length + existingImages.length < 2 ||
              formData.images.length + existingImages.length > 4 ? (
                <p style={{ color: "red", padding: "10px", margin: "0" }}>
                  You must select between 2 to 4 images.
                </p>
              ) : null}
              <p style={{ color: "yellow", padding: "10px", margin: "0" }}>
                {`${
                  formData.images.length + existingImages.length
                } new images have been selected`}
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
              Update
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
