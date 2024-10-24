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
    tourHighLights: [],
    pricePerPerson: [],
  });
  const [existingImages, setExistingImages] = useState([]);
  const [existingProfileImg, setExistingProfileImg] = useState(null);

  console.log("formData");
  console.log(formData);
  console.log("Existing images");
  console.log(existingImages);
  console.log("Existing profile image");
  console.log(existingProfileImg);
  useEffect(() => {
    const fetchPackageData = async () => {
      try {
        const response = await axios.get(
          `${BACKEND_URL}/api/v1/packages/${id}`
        );
        const packageData = response.data;

        console.log("from admin package update");
        console.log("after fetching package data from server in the useEffect");
        console.log(packageData);

        setFormData({
          ...packageData,
          tourHighLights: JSON.parse(JSON.parse(packageData.tourHighLights)),
          pricePerPerson: JSON.parse(JSON.parse(packageData.pricePerPerson)),
          images: [], // Start with empty new images
          profileImg: [],
        });
        console.log("after parsing and formatting data looks like");
        console.log(formData);
        console.log("test parsing. images");
        console.log(packageData.images);
        console.log(JSON.parse(packageData.images));

        const images = JSON.parse(packageData.images).map((obj) => ({
          ...obj,
        }));

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
  const handleCancel = (event) => {
    event.preventDefault();
    const confirmation = confirm(
      "Are you sure you want to cancel update package?"
    );
    if (confirmation) {
      navigate(-1);
    }
  };
  /* handlding TourHighLight related data */
  const handleTourHightLightChange = (event, changedIndex, attribute) => {
    setFormData((prev) => ({
      ...prev,
      tourHighLights: formData.tourHighLights.map((item, index) => {
        if (index === changedIndex) {
          item[attribute] = event.target.value;
        }
        return item;
      }),
    }));
  };

  const handleTourHightLightAdd = (event) => {
    event.preventDefault();
    setFormData((prev) => ({
      ...prev,
      tourHighLights: [
        ...prev.tourHighLights,
        {
          key: randomChar(5),
          highlight: "Day x",
          description: "Explore the Sylhet city...",
        },
      ],
    }));
  };

  const handleTourHightLightDelete = (event, deletingIndex) => {
    event.preventDefault();
    setFormData((prev) => ({
      ...prev,
      tourHighLights: prev.tourHighLights.filter(
        (_, index) =>
          prev.tourHighLights.length === 1 || index !== deletingIndex
      ),
    }));
  };

  /*Handling Price related data */
  const handlePriceChange = (event, changedIndex, attribute) => {
    setFormData((prev) => ({
      ...prev,
      pricePerPerson: formData.pricePerPerson.map((item, index) => {
        if (index === changedIndex) {
          item[attribute] = event.target.value;
        }
        return item;
      }),
    }));
  };

  const handlePriceAdd = (event) => {
    event.preventDefault();
    setFormData((prev) => ({
      ...prev,
      pricePerPerson: [
        ...prev.pricePerPerson,
        {
          key: randomChar(5),
          priceType: "Price Type",
          priceTaka: "Price Taka",
        },
      ],
    }));
  };

  const handlePriceDelete = (event, deletingIndex) => {
    event.preventDefault();
    setFormData((prev) => ({
      ...prev,
      pricePerPerson: prev.pricePerPerson.filter(
        (_, index) =>
          prev.pricePerPerson.length === 1 || index !== deletingIndex
      ),
    }));
  };

  /*handle submit */

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (
      formData.images.length + existingImages.length < 2 ||
      formData.images.length + existingImages.length > 4
    ) {
      alert("You must select between 2 to 4 Gallery Images.");
      return;
    }

    const data = new FormData();

    // Append profile image if selected
    if (formData.profileImg.length > 0) {
      data.append("profileImg", formData.profileImg[0]);
    } else if (existingProfileImg.length > 0) {
      data.append("existingProfileImg", existingProfileImg);
    } else {
      alert("You must select at least one profile image.");
      return;
    }

    // Append new gallery images
    formData.images.forEach((img) => {
      data.append("images", img);
    });

    // Append existing gallery images
    existingImages.forEach((img) => {
      data.append("existingImages", img.src);
    });

    // Append other form data
    Object.entries(formData).forEach(([key, value]) => {
      if (key !== "images" && key !== "profileImg") {
        if (key === "pricePerPerson") {
          data.append(key, JSON.stringify(value));
        } else if (key === "tourHighLights") {
          data.append(key, JSON.stringify(value));
        } else {
          data.append(key, value);
        }
      }
    });

    console.log("Your data is going to submitted in the server");
    data.forEach((value, key) => {
      if (value instanceof File) {
        console.log(
          `${key}: ${value.name}, Size: ${value.size}, Type: ${value.type}`
        );
      } else {
        console.log(`${key} : ${value}`);
      }
    });
    // return;
    try {
      const response = await axios.put(
        `${BACKEND_URL}/api/v1/packages/${id}`,
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert("Package updated successfully!");
      // navigate("/admin/packages");
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
              <label htmlFor="profileImg">Choose a profile image:</label>
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
                Choose multiple gallery images:
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
            ].map((field) => (
              <div className="row" key={field}>
                <label htmlFor={field}>
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                {field === "description" ? (
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

            <div className="row">
              <h3>Package HighLights</h3>
              {formData.tourHighLights.map((item, index) => {
                return (
                  <div className="line" key={item.key}>
                    <input
                      onChange={(event) =>
                        handleTourHightLightChange(event, index, "highlight")
                      }
                      value={item.highlight}
                      type="text"
                    />
                    {" : "}
                    <input
                      onChange={(event) =>
                        handleTourHightLightChange(event, index, "description")
                      }
                      value={item.description}
                      type="text"
                    />
                    <button
                      onClick={(event) =>
                        handleTourHightLightDelete(event, index)
                      }
                      className="delete"
                    >
                      -
                    </button>
                  </div>
                );
              })}
              <button
                onClick={handleTourHightLightAdd}
                className="button safe-btn"
              >
                +
              </button>
            </div>

            <div className="row">
              <h3>Package prices (Per person)</h3>
              {formData.pricePerPerson.map((item, index) => {
                return (
                  <div className="line" key={item.key}>
                    <input
                      onChange={(event) =>
                        handlePriceChange(event, index, "priceType")
                      }
                      value={item.priceType}
                      type="text"
                    />
                    {" : "}
                    <input
                      onChange={(event) =>
                        handlePriceChange(event, index, "priceTaka")
                      }
                      value={item.priceTaka}
                      type="text"
                    />
                    <button
                      onClick={(event) => handlePriceDelete(event, index)}
                      className="delete"
                    >
                      -
                    </button>
                  </div>
                );
              })}
              <button onClick={handlePriceAdd} className="button safe-btn">
                +
              </button>
            </div>

            <div className="buttonRow">
              <button type="submit" className="button safe-btn">
                Update
              </button>
              <button onClick={handleCancel} className="button warning-btn">
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default AdminUpdatePackage;
