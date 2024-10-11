import React, { useState, useEffect } from "react";
import "./setImage.scss";
import { BACKEND_URL } from "../../../dynamicInfo";

function SetImage() {
  const [images, setImages] = useState({
    packageHeroImg: null,
    aboutHeroImg: null,
    homeHeroImg: null,
    logo: null,
  });

  const [existingImages, setExistingImages] = useState({}); // Store paths of existing images
  const [isUpdate, setIsUpdate] = useState(false); // To differentiate between create and update

  useEffect(() => {
    // Fetch existing images if you're updating
    const fetchImages = async () => {
      const response = await fetch(`${BACKEND_URL}/api/v1/site-image`);
      const data = await response.json();
      if (data) {
        setExistingImages(data);
        setIsUpdate(true);
      }
    };

    fetchImages();
  }, []);

  const handleImageChange = (event) => {
    const { name, files } = event.target;
    setImages((prevState) => ({
      ...prevState,
      [name]: files[0], // Only store the first file (in case multiple were uploaded)
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("packageHeroImg", images.packageHeroImg);
    formData.append("aboutHeroImg", images.aboutHeroImg);
    formData.append("homeHeroImg", images.homeHeroImg);
    formData.append("logo", images.logo);

    const url = isUpdate
      ? `${BACKEND_URL}/api/v1/site-image`
      : `${BACKEND_URL}/api/v1/site-image`;

    try {
      const response = await fetch(url, {
        method: isUpdate ? "PUT" : "POST",
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        alert(
          isUpdate
            ? "Images updated successfully!"
            : "Images uploaded successfully!",
        );
        console.log("Result:", result);
      } else {
        alert("Error uploading/updating images.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <div>
        <label>Package Hero Image:</label>
        <input type="file" name="packageHeroImg" onChange={handleImageChange} />
        {existingImages.packageHeroImg && (
          <img
            src={`http://localhost:5000/${existingImages.packageHeroImg}`}
            alt="Package Hero"
            width="100"
          />
        )}
      </div>
      <div>
        <label>About Hero Image:</label>
        <input type="file" name="aboutHeroImg" onChange={handleImageChange} />
        {existingImages.aboutHeroImg && (
          <img
            src={`http://localhost:5000/${existingImages.aboutHeroImg}`}
            alt="About Hero"
            width="100"
          />
        )}
      </div>
      <div>
        <label>Home Hero Image:</label>
        <input type="file" name="homeHeroImg" onChange={handleImageChange} />
        {existingImages.homeHeroImg && (
          <img
            src={`http://localhost:5000/${existingImages.homeHeroImg}`}
            alt="Home Hero"
            width="100"
          />
        )}
      </div>
      <div>
        <label>Logo:</label>
        <input type="file" name="logo" onChange={handleImageChange} />
        {existingImages.logo && (
          <img
            src={`http://localhost:5000/${existingImages.logo}`}
            alt="Logo"
            width="100"
          />
        )}
      </div>
      <button type="submit">
        {isUpdate ? "Update Images" : "Upload Images"}
      </button>
    </form>
  );
}

export default SetImage;
