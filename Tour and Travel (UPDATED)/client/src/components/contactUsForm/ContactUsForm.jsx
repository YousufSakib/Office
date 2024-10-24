import React, { useEffect, useState } from "react";
import "./contactUsForm.scss";
import { Form } from "react-router-dom";
import { useInfo } from "../CompanyInfoContext";

import axios from "axios";
import { BACKEND_URL } from "../../../dynamicInfo";
import slowScrollToTop from "../../lib/slowScrolltoTop";
import { isNotValidatedEmail } from "../../lib/validateRegex";
import { isNotValidatedPhone } from "../../lib/validateRegex";

function ContactUsForm() {
  const {
    tweeterLink,
    companyPhoneNo,
    receptionOffice,
    receptionHours,
    facebookLink,
    instagramLink,
    companyEmail,
  } = useInfo();

  const [isSubmitClicked, setIsSubmitClicked] = useState(false);
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phoneNo: "",
    email: "",
    tourDuration: "",
    travellerNo: "",
    date: "",
    destination: "",
    message: "",
  });

  const destination = [
    "Rajshahi",
    "Jaflong",
    "Dhaka",
    "Cox's Bazar",
    "Sylhet",
    "Srimangal",
    "Bandarban",
    "Sonargaon",
    "Chittagong Hill Tracts",
    "Khulna",
    "Rangamati",
    "Sundarbans",
    "Paharpur",
  ];
  useEffect(() => {
    const targetElement = document.getElementById("contactus");
    slowScrollToTop(targetElement, 70, 1000);
    // targetElement.scrollIntoView({ behavior: "smooth" });
  }, []);

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
    console.log("Following object is going to save into server", formData);
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/contacts`,
        formData,
      );
      alert("Response submitted successfully!");
      console.log("frome contact page");
      console.log(response);

      setFormData({
        name: "",
        phoneNo: "",
        email: "",
        tourDuration: "",
        travellerNo: "",
        date: "",
        destination: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting response:", error);
      alert("Failed to submit response. Please try again.");
    }
  };

  return (
    <div id="contactus" className="contactUs">
      <div className="infos">
        <div className="info">
          <h4>Reception Office</h4>
          <p>{receptionOffice}</p>
        </div>
        <div className="info">
          <h4>Reception Hours</h4>
          <p>{receptionHours}</p>
        </div>
        <div className="info">
          <h4>Contact</h4>
          <p>{companyPhoneNo}</p>
          <p>{companyEmail}</p>
        </div>
        <div className="info">
          <div className="socialLinks">
            <a href={facebookLink}>
              <img src="face.png" alt="" />
            </a>
            <a href={instagramLink}>
              <img src="insta.png" alt="" />
            </a>
            <a href="#">
              <img src="link.png" alt="" />
            </a>
            <a href={tweeterLink}>
              <img src="twitter.png" alt="" />
            </a>
          </div>
        </div>
      </div>
      <Form className="form" onSubmit={handleSubmit}>
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
            <label htmlFor="tourDuration">
              Duration of Tour<span> *</span>
            </label>
            <input
              id="tourDuration"
              name="tourDuration"
              type="number"
              placeholder="4"
              min="1"
              max="200"
              required
              value={formData.tourDuration}
              onChange={handleChange}
            />
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
            <label htmlFor="date">
              Date<span> *</span>
            </label>
            <input
              id="date"
              name="date"
              type="date"
              min="2024-01-01"
              max="2050-12-31"
              required
              value={formData.date}
              onChange={handleChange}
            />
          </div>
          <div className="row">
            <label htmlFor="destination">Choose a destination</label>
            <select
              name="destination"
              id="destination"
              value={formData.destination}
              onChange={handleChange}
              required
            >
              <option value="">--Please choose an option--</option>
              {destination.map((i) => (
                <option key={i} value={i}>
                  {i}
                </option>
              ))}
            </select>
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
            <button className="button">Submit</button>
          </div>
        </div>
      </Form>
    </div>
  );
}

export default ContactUsForm;
