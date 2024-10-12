import React, { useState, useEffect } from "react";
import "./basicSetUp.scss";
import axios from "axios";
import { BACKEND_URL } from "../../../dynamicInfo";
import FullScreenloading from "../../components/fullScreenloading/FullScreenloading";

function BasicSetUp() {
  const [isInfoDisabled, setIsInfoDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  // const [companyName, setCompanyName] = useState(null);
  // const [companyEmail, setCompanyEmail] = useState(null);
  // const [companyPhoneNo, setCompanyPhoneNo] = useState(null);
  // const [receptionOffice, setReceptionOffice] = useState(null);
  // const [receptionHours, setReceptionHours] = useState(null);
  // const [latitude, setLatitude] = useState(null);
  // const [longitude, setLongitude] = useState(null);
  // const [facebookLink, setFacebookLink] = useState(null);
  // const [instagramLink, setInstagramLink] = useState(null);
  // const [tweeterLink, setTweeterLink] = useState(null);
  // const [aboutUs, setAboutUs] = useState(null);
  const [obj, setObj] = useState({
    companyName: "",
    companyEmail: "",
    companyPhoneNo: "",
    receptionOffice: "",
    receptionHours: "",
    latitude: "",
    longitude: "",
    facebookLink: "",
    instagramLink: "",
    tweeterLink: "",
    aboutUs: "",
  });

  const [images, setImages] = useState({
    packageHeroImg: null,
    aboutHeroImg: null,
    homeHeroImg: null,
    logo: null,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setObj((prevObj) => ({
      ...prevObj,
      [name]: value,
    }));
  };

  const handleBasicInfoEdit = (event) => {
    setIsInfoDisabled(false);
  };

  // console.log("from basicSetup page");
  // console.log(obj);
  // console.log(JSON.stringify(obj));
  const handleBasicInfoSubmit = async (event) => {
    try {
      const response = await fetch(`${BACKEND_URL}/api/v1/companyInfo/1`, {
        method: "put",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Company created:", result);
        setIsInfoDisabled(true);
        alert("Information saved  successfully!");
      } else {
        const errorData = await response.json();
        console.error("Error creating company:", errorData);
        alert("Failed to save the information.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while creating the company.");
    }
  };
  useEffect(() => {
    const url = `${BACKEND_URL}/api/v1/companyInfo/1`;
    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        setObj(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading && <FullScreenloading />}
      {loading || (
        <div className="basicSetup">
          <div className="basicInfo">
            <h2>Informations</h2>
            <div className="row">
              <label htmlFor="companyName">Company Name</label>
              <input
                type="text"
                name="companyName"
                id="companyName"
                onChange={handleChange}
                value={obj.companyName || ""}
                required
                disabled={isInfoDisabled}
              />
            </div>
            <div className="row">
              <label htmlFor="companyEmail">Company Email</label>
              <input
                type="email"
                name="companyEmail"
                id="companyEmail"
                onChange={handleChange}
                value={obj.companyEmail || ""}
                required
                disabled={isInfoDisabled}
              />
            </div>
            <div className="row">
              <label htmlFor="companyPhoneNo">Company PhoneNo</label>
              <input
                type="text"
                name="companyPhoneNo"
                id="companyPhoneNo"
                onChange={handleChange}
                value={obj.companyPhoneNo || ""}
                required
                disabled={isInfoDisabled}
              />
            </div>
            <div className="row">
              <label htmlFor="receptionOffice">Reception Office</label>
              <input
                type="text"
                name="receptionOffice"
                id="receptionOffice"
                placeholder=""
                onChange={handleChange}
                value={obj.receptionOffice || ""}
                required
                disabled={isInfoDisabled}
              />
            </div>
            <div className="row">
              <label htmlFor="receptionHours">Reception Hours</label>
              <input
                type="text"
                name="receptionHours"
                id="receptionHours"
                onChange={handleChange}
                value={obj.receptionHours || ""}
                required
                disabled={isInfoDisabled}
              />
            </div>
            <div className="row">
              <label htmlFor="latitude">Latitude</label>
              <input
                type="text"
                name="latitude"
                id="latitude"
                placeholder=""
                onChange={handleChange}
                value={obj.latitude || ""}
                required
                disabled={isInfoDisabled}
              />
            </div>
            <div className="row">
              <label htmlFor="longitude">Longitude</label>
              <input
                type="text"
                name="longitude"
                id="longitude"
                placeholder=""
                onChange={handleChange}
                value={obj.longitude || ""}
                required
                disabled={isInfoDisabled}
              />
            </div>
            <div className="row">
              <label htmlFor="facebookLink">Facebook Link</label>
              <input
                type="text"
                name="facebookLink"
                id="facebookLink"
                onChange={handleChange}
                value={obj.facebookLink || ""}
                required
                disabled={isInfoDisabled}
              />
            </div>
            <div className="row">
              <label htmlFor="instagramLink">Instagram Link</label>
              <input
                type="text"
                name="instagramLink"
                id="instagramLink"
                onChange={handleChange}
                value={obj.instagramLink || ""}
                required
                disabled={isInfoDisabled}
              />
            </div>
            <div className="row">
              <label htmlFor="tweeterLink">Tweeter Link</label>
              <input
                type="text"
                name="tweeterLink"
                id="tweeterLink"
                onChange={handleChange}
                value={obj.tweeterLink || ""}
                required
                disabled={isInfoDisabled}
              />
            </div>
            <div className="row">
              <label htmlFor="aboutUs">About Us</label>
              <textarea
                name="aboutUs"
                id="aboutUs"
                onChange={handleChange}
                value={obj.aboutUs || ""}
                required
                disabled={isInfoDisabled}
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
                disabled={!isInfoDisabled}
                onClick={handleBasicInfoEdit}
                className="button edit"
              >
                Edit
              </button>
              <button
                disabled={isInfoDisabled}
                onClick={handleBasicInfoSubmit}
                className="button"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default BasicSetUp;
