import React, { useEffect, useState } from "react";
import "./adminPackageAdd.scss";
import axios from "axios";
import randomChar from "../../lib/randomChar";
import { BACKEND_URL } from "../../../dynamicInfo";
import { useNavigate } from "react-router-dom";
import FullScreenloading from "../../components/fullScreenloading/FullScreenloading";

function AdminPackageAdd() {
  const [formData, setFormData] = useState({
    profileImg: null,
    images: [],
    createdBy: "",
    destination: [],
    duration: "",
    category: [],
    name: "",
    description: "",
    tourHighLights: [
      {
        key: randomChar(5),
        highlight: "Day X",
        description: "Explore the Sylhet city...",
      },
    ],
    pricePerPerson: [
      {
        key: randomChar(5),
        priceType: "Price Type",
        priceTaka: "Price Taka",
      },
    ],
  });
  const [isLoading, setIsLoading] = useState(false);
  const [allPlaces, setAllPlaces] = useState([]);
  const [allCategories, setAllCategories] = useState([]);
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

  const handleCancel = (event) => {
    event.preventDefault();
    const confirmation = confirm(
      "Are you sure you want to cancel creating new package?",
    );
    if (confirmation) {
      navigate(-1);
    }
  };

  const handleFileRemove = (removeFile) =>
    setFormData((prev) => ({
      ...prev,
      images: prev.images.filter((file) => file !== removeFile),
    }));

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
          prev.tourHighLights.length === 1 || index !== deletingIndex,
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
          prev.pricePerPerson.length === 1 || index !== deletingIndex,
      ),
    }));
  };

  /*All Places and Categories for dropdown items*/
  useEffect(() => {
    const fetchPlacesAndCategory = async () => {
      setIsLoading(true);
      const headers = {
        "Content-Type": "application/json",
      };
      try {
        let url = `${BACKEND_URL}/api/v1/packagePlaces`;
        const { data: placesData } = await axios.get(url, { headers });

        url = `${BACKEND_URL}/api/v1/package-tour-category`;
        const { data: categoriesData } = await axios.get(url, { headers });

        const sortedPlaces = placesData.sort((a, b) =>
          a.placeName.localeCompare(b.placeName),
        );
        setAllPlaces(sortedPlaces);
        console.log("sorted places:", sortedPlaces);
        //sort and update state for category
        let unsortedCategories = [];
        try {
          unsortedCategories = JSON.parse(categoriesData.categories);
        } catch (error) {
          console.error("Error parsing categories data", error);
        }

        const sortedCategories = unsortedCategories.sort((a, b) =>
          a.category.localeCompare(b.category),
        );
        setAllCategories(sortedCategories);
        console.log("Sorted categories:", sortedCategories);

        //setting the first item of allplaces as selected place
        setFormData({
          ...formData,
          destination:
            sortedPlaces.length > 0
              ? [{ place: sortedPlaces[0].placeName, key: randomChar(5) }]
              : [],

          //setting the first item of allCategory as selected category
          category:
            sortedCategories.length > 0
              ? [{ category: sortedCategories[0].category, key: randomChar(5) }]
              : [],
        });
      } catch (error) {
        console.error("Error fetching package places", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPlacesAndCategory();
  }, []);
  console.log("form data jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj");
  console.log(formData);
  //Places
  const handlePlaceRemove = (removingIndex) => {
    setFormData({
      ...formData,
      destination: formData.destination.filter(
        (places, i) => formData.destination.length === 1 || i !== removingIndex,
      ),
    });
  };
  const handlePlaceAdd = (event, index) => {
    const isAlreadyExisted = formData.destination.some(
      (obj) => obj.place === event.target.value,
    );
    if (isAlreadyExisted) return;
    setFormData({
      ...formData,
      destination: [
        ...formData.destination,
        { key: randomChar(5), place: event.target.value },
      ],
    });
  };

  //Categories
  const handleCategoryRemove = (removingIndex) => {
    setFormData({
      ...formData,
      category: formData.category.filter(
        (category, i) => formData.category.length === 1 || i !== removingIndex,
      ),
    });
  };
  const handleCategoryAdd = (event, index) => {
    const isAlreadyExisted = formData.category.some(
      (obj) => obj.category === event.target.value,
    );
    if (isAlreadyExisted) return;
    setFormData({
      ...formData,
      category: [
        ...formData.category,
        { key: randomChar(5), category: event.target.value },
      ],
    });
  };

  /*Handle form submit funtion */

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
        if (key === "pricePerPerson") {
          data.append(key, JSON.stringify(value));
        } else if (key === "tourHighLights") {
          data.append(key, JSON.stringify(value));
        } else if (key === "destination") {
          data.append(key, JSON.stringify(value));
        } else if (key === "category") {
          data.append(key, JSON.stringify(value));
        } else {
          data.append(key, value);
        }
      }
    });

    console.log("from Admin package-add page");
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
    <>
      {isLoading && <FullScreenloading />}
      {isLoading || (
        <div className="adminPackageAdd">
          <form onSubmit={handleSubmit}>
            <h2>Fill all the below fields to create a new package</h2>
            <div className="row full">
              <label htmlFor="profileImg">Choose a profile image:</label>
              <input
                type="file"
                id="profileImg"
                accept="image/*"
                onChange={handleProfileImgChange}
                required
              />
            </div>
            <div className="row full">
              <label htmlFor="multiPleTourimages">Choose gallery images:</label>
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
            {["name", "createdBy", "duration", "description"].map((field) => (
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
              <div className="placesContainer">
                {formData.destination.map((obj, index) => (
                  <p key={obj.key}>
                    {obj.place}
                    <span onClick={(event) => handlePlaceRemove(index)}>X</span>
                  </p>
                ))}
              </div>
              <label htmlFor="adminPackageAddPlace">Select tour places</label>
              <div className="select">
                <select id="adminPackageAddPlace" onChange={handlePlaceAdd}>
                  {allPlaces.map((place) => (
                    <option
                      key={`${place.placeName}`}
                      value={`${place.placeName}`}
                    >
                      {`${place.placeName}, ${place.district}`}
                    </option>
                  ))}
                </select>
                <span className="focus"></span>
              </div>
            </div>
            <div className="row">
              <div className="placesContainer">
                {formData.category.map((obj, index) => (
                  <p key={obj.key}>
                    {obj.category}
                    <span onClick={(event) => handleCategoryRemove(index)}>
                      X
                    </span>
                  </p>
                ))}
              </div>
              <label htmlFor="adminPackageAddTourCategory">
                Select tour categories
              </label>
              <div className="select">
                <select
                  id="adminPackageAddTourCategory"
                  onChange={handleCategoryAdd}
                >
                  {allCategories.map((obj) => (
                    <option key={`${obj.key}`} value={`${obj.category}`}>
                      {`${obj.category}`}
                    </option>
                  ))}
                </select>
                <span className="focus"></span>
              </div>
            </div>
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
              <button type="submit" className="button adminpaneladdButton">
                Save
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

export default AdminPackageAdd;
