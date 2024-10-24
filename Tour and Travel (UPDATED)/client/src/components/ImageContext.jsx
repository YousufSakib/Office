// ImageContext.js
import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { BACKEND_URL } from "../../dynamicInfo";

const ImageContext = createContext();

const ImageProvider = ({ children }) => {
  const [images, setImages] = useState({});

  const fetchImages = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/v1/site-images`);
      setImages(response.data); // Adjust based on your response structure
      console.log("from image context");
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <ImageContext.Provider value={{ ...images }}>
      {children}
    </ImageContext.Provider>
  );
};

const useImages = () => {
  return useContext(ImageContext);
};

export {useImages, ImageProvider};