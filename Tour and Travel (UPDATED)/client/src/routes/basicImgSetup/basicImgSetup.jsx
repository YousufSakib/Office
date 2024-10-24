import React, { useState, useEffect } from "react";
import axios from "axios";
import { BACKEND_URL } from "../../../dynamicInfo";

import "./basicImgSetup.scss";

function BasicImgSetup() {
  const [isImgDisabled, setIsImgDisabled] = useState(true);
  const [images, setImages] = useState({
    logo: null,
    homeHeroImg: null,
    packageHeroImg: null,
    aboutHeroImg: null,
    placesToVistHeroImg: null,
    meetBangladeshHeroImg: null,
    aboutUsHeroImg: null,
    contactUsHeroImg: null,
  });

  const handleImageChange = (event) => {
    const { name, files } = event.target;

    if (files.length > 0) {
      setImages((prevState) => ({
        ...prevState,
        [name]: files[0],
      }));
    } else {
      alert(`${name} was not selected.`);
    }
  };

  const handleImgSubmit = async (event) => {
    const formData = new FormData();
    console.log("from basic Img setup");
    for (const [key, value] of Object.entries(images)) {
      if (value) {
        formData.append(`${key}`, value);
        console.log(key, value);
      }
    }

    // Log the FormData entries
    console.log("from Basic img setup page: images");
    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }

    const url = `${BACKEND_URL}/api/v1/site-images`;

    try {
      console.log("Sending request to:", url);
      const response = await axios.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("From Basic imgSet", response.data);
      alert("Images uploaded successfully!");
      setIsImgDisabled(true);
    } catch (error) {
      console.error("Error uploading images:", error);
      alert("Failed to upload the images. Try again later.");
      setIsImgDisabled(true);
    }
  };

  const handleEditImg = (event) => {
    setIsImgDisabled(false);
  };

  return (
    <div className="ImgInfoWrapper">
      <div className="basicImgs">
        <h2>Images</h2>
        <div className="row">
          <label htmlFor="logo">Logo</label>
          <input
            type="file"
            accept="image/*"
            id="logo"
            name="logo"
            disabled={isImgDisabled}
            onChange={handleImageChange}
          />
        </div>
        <div className="row">
          <label htmlFor="homeHeroImg">Home page hero Image</label>
          <input
            type="file"
            accept="image/*"
            id="homeHeroImg"
            name="homeHeroImg"
            disabled={isImgDisabled}
            onChange={handleImageChange}
          />
        </div>
        <div className="row">
          <label htmlFor="aboutHeroImg">About us page hero Image</label>
          <input
            type="file"
            accept="image/*"
            id="aboutHeroImg"
            name="aboutHeroImg"
            disabled={isImgDisabled}
            onChange={handleImageChange}
          />
        </div>
        <div className="row">
          <label htmlFor="packageHeroImg">Package page hero Image </label>
          <input
            type="file"
            accept="image/*"
            id="packageHeroImg"
            name="packageHeroImg"
            disabled={isImgDisabled}
            onChange={handleImageChange}
          />
        </div>
        <div className="row">
          <label htmlFor="placesToVistHeroImg">
            Places to visit page hero Image{" "}
          </label>
          <input
            type="file"
            accept="image/*"
            id="placesToVistHeroImg"
            name="placesToVistHeroImg"
            disabled={isImgDisabled}
            onChange={handleImageChange}
          />
        </div>
        <div className="row">
          <label htmlFor="meetBangladeshHeroImg">
            Meet Bangladesh page hero Image{" "}
          </label>
          <input
            type="file"
            accept="image/*"
            id="meetBangladeshHeroImg"
            name="meetBangladeshHeroImg"
            disabled={isImgDisabled}
            onChange={handleImageChange}
          />
        </div>
        <div className="row">
          <label htmlFor="contactUsHeroImg">Contact Us page hero Image </label>
          <input
            type="file"
            accept="image/*"
            id="contactUsHeroImg"
            name="contactUsHeroImg"
            disabled={isImgDisabled}
            onChange={handleImageChange}
          />
        </div>
        <div
          className="row"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <button
            disabled={!isImgDisabled}
            onClick={handleEditImg}
            className="button edit"
          >
            Edit
          </button>

          <button
            disabled={isImgDisabled}
            onClick={handleImgSubmit}
            className="button"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default BasicImgSetup;
