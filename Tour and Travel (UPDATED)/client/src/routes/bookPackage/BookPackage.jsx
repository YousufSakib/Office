import React, { useEffect, useState } from "react";
import "./bookPackage.scss";
import { Form, useParams } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../../../dynamicInfo";
import {
  isNotValidatedEmail,
  isNotValidatedPhone,
} from "../../lib/validateRegex";

function BookPackage() {
  const [isSubmitClicked, setIsSubmitClicked] = useState(false);
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");
  const { id } = useParams();
  const [formData, setFormData] = useState({
    packageId: id || "",
    name: "",
    phoneNo: "",
    email: "",
    travellerNo: "",
    message: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name === "email") value = value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    if (isSubmitClicked) {
      if (name === "email") {
        setEmailError(isNotValidatedEmail(value));
      } else if (name === "phoneNo") {
        setPhoneError(isNotValidatedPhone(value));
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitClicked(true);
    if (
      isNotValidatedEmail(formData.email) ||
      isNotValidatedPhone(formData.phoneNo)
    ) {
      setEmailError(isNotValidatedEmail(formData.email));
      setPhoneError(isNotValidatedPhone(formData.phoneNo));
      return;
    }
    console.log("((((", formData);
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/book-package`,
        formData
      );
      alert("Response submitted successfully!");
      console.log("frome contact page");
      console.log(response);

      setFormData({
        packageId: "",
        name: "",
        phoneNo: "",
        email: "",
        travellerNo: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting response:", error);
      alert("Failed to submit response. Please try again.");
    }
  };

  return (
    <div className="contactUsWrapper">
      <h2>Fill the fields and click send</h2>

      <div id="contactus" className="contactUs">
        <div className="rows">
          <div className="row">
            <label htmlFor="name">
              Name<span> *</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Name"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="row">
            <label htmlFor="phoneNo">
              Phone No<span> *</span>
            </label>
            <input
              id="phoneNo"
              name="phoneNo"
              type="text"
              placeholder="Phone No"
              required
              value={formData.phoneNo}
              onChange={handleChange}
            />
            {phoneError && (
              <span
                style={{
                  margin: "10px 0 10px 0",
                  display: "block",
                  color: "red",
                }}
              >
                {phoneError}
              </span>
            )}
          </div>
          <div className="row">
            <label htmlFor="email">
              Email<span> *</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={handleChange}
            />
            {emailError && (
              <span
                style={{
                  margin: "10px 0 10px 0",
                  display: "block",
                  color: "red",
                }}
              >
                {emailError}
              </span>
            )}
          </div>

          <div className="row">
            <label htmlFor="travellerNo">
              Number of Traveller<span> *</span>
            </label>
            <input
              id="travellerNo"
              name="travellerNo"
              type="number"
              placeholder="4"
              min="1"
              max="200"
              required
              value={formData.travellerNo}
              onChange={handleChange}
            />
          </div>

          <div className="row">
            <label htmlFor="message">
              Message<span> *</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <div className="row">
            <button onClick={handleSubmit} className="button">
              Submit
            </button>
            <button className="button delete-btn">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookPackage;
