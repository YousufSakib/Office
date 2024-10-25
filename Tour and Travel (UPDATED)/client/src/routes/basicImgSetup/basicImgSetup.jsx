import React, { useState, useEffect } from "react";
import axios from "axios";
import { BACKEND_URL } from "../../../dynamicInfo";

import "./basicImgSetup.scss";

function BasicImgSetup() {
  const [isLoading, setIsLoading] = useState(false);

  const [images, setImages] = useState({
    logo: null,
    homeHeroImg: null,
    packageHeroImg: null,
    aboutHeroImg: null,
    placesToVistHeroImg: null,
    meetBangladeshHeroImg: null,
    contactUsHeroImg: null,
  });
  const [existingImages, setExistingImages] = useState({
    logo: null,
    homeHeroImg: null,
    packageHeroImg: null,
    aboutHeroImg: null,
    placesToVistHeroImg: null,
    meetBangladeshHeroImg: null,
    contactUsHeroImg: null,
  });

  const fetchImages = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${BACKEND_URL}/api/v1/site-images`);
      setExistingImages(response.data); // Adjust based on your response structure
      console.log("from admin basic images");
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching images:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

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

  const handleImgSubmit = async () => {
    const formData = new FormData();
    for (const [key, value] of Object.entries(images)) {
      if (value) formData.append(key, value);
      else if (existingImages[key]) {
        formData.append(key, existingImages[key]);
      }
    }

    const url = `${BACKEND_URL}/api/v1/site-images`;

    try {
      const response = await axios.put(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Images uploaded successfully!");
    } catch (error) {
      console.error("Error uploading images:", error);
      alert("Failed to upload the images. Try again later.");
    }
  };

  return (
    <div className="ImgInfoWrapper">
      <div className="basicImgs">
        <h2>Images</h2>
        {[
          "logo",
          "homeHeroImg",
          "packageHeroImg",
          "aboutHeroImg",
          "placesToVistHeroImg",
          "meetBangladeshHeroImg",
          "contactUsHeroImg",
        ].map((item) => (
          <div key={item} className="row">
            <label htmlFor={item}>{item}</label>
            <input
              type="file"
              accept="image/*"
              id={item}
              name={item}
              onChange={handleImageChange}
            />

            <div className="row">
              {images[item] && typeof images[item] === "object" && (
                <div className="showSelectedImages">
                  <div className="image">
                    <img
                      src={URL.createObjectURL(images[item])}
                      alt="New upload preview"
                    />
                    <span
                      onClick={() =>
                        setImages((prev) => ({ ...prev, [item]: null }))
                      }
                    >
                      x
                    </span>
                  </div>
                </div>
              )}
              {existingImages[item] && !images[item] && (
                <div className="showSelectedImages">
                  <div className="image">
                    <img
                      src={`${BACKEND_URL}/uploads/${existingImages[item]}`}
                      alt="Existing image"
                    />
                    <span
                      onClick={() =>
                        setExistingImages((prev) => ({ ...prev, [item]: "" }))
                      }
                    >
                      x
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}

        <div
          className="row"
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          <button onClick={handleImgSubmit} className="button">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default BasicImgSetup;
