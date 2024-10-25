import React, { useState } from "react";
import "./companyInfoSetUp.scss";
import axios from "axios";
import { BACKEND_URL } from "../../../dynamicInfo";
import FullScreenloading from "../../components/fullScreenloading/FullScreenloading";
import { useInfo } from "../../components/CompanyInfoContext";

function CompanyInfoSetUp() {
  const {
    companyName,
    companyEmail,
    companyPhoneNo,
    receptionOffice,
    receptionHours,
    latitude,
    longitude,
    facebookLink,
    instagramLink,
    tweeterLink,
    aboutUs,
  } = useInfo();

  const [isInfoDisabled, setIsInfoDisabled] = useState(true);
  const [loading, setLoading] = useState(false);

  const [obj, setObj] = useState({
    companyName: companyName || "",
    companyEmail: companyEmail || "",
    companyPhoneNo: companyPhoneNo || "",
    receptionOffice: receptionOffice || "",
    receptionHours: receptionHours || "",
    latitude: latitude || "",
    longitude: longitude || "",
    facebookLink: facebookLink || "",
    instagramLink: instagramLink || "",
    tweeterLink: tweeterLink || "",
    aboutUs: aboutUs || "",
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

  const handleBasicInfoSubmit = async (event) => {
    try {
      const response = await axios.put(
        `${BACKEND_URL}/api/v1/companyInfo`,
        obj,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      // Axios automatically resolves the promise for successful responses
      console.log("Company Info created/updated:", response.data);
      setIsInfoDisabled(true);
      alert("Information saved successfully!");
    } catch (error) {
      //Handle error response
      if (error.response) {
        console.error("Error creating company: ", error.response.data);
        alert("Failed to save the information. Try again");
      } else {
        console.error("Error:", error);
        alert("An error occurred while creating the company.");
      }
    }
  };

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
                value={obj.companyName}
                disabled={isInfoDisabled}
                required
              />
            </div>
            <div className="row">
              <label htmlFor="companyEmail">Company Email</label>
              <input
                type="email"
                name="companyEmail"
                id="companyEmail"
                onChange={handleChange}
                value={obj.companyEmail}
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
                value={obj.companyPhoneNo}
                disabled={isInfoDisabled}
                required
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
                value={obj.receptionOffice}
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
                value={obj.receptionHours}
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
                value={obj.latitude}
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
                value={obj.longitude}
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
                value={obj.facebookLink}
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
                value={obj.instagramLink}
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
                value={obj.tweeterLink}
                disabled={isInfoDisabled}
              />
            </div>
            <div className="row">
              <label htmlFor="aboutUs">About Us</label>
              <textarea
                name="aboutUs"
                id="aboutUs"
                onChange={handleChange}
                value={obj.aboutUs}
                disabled={isInfoDisabled}
                required
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

export default CompanyInfoSetUp;
