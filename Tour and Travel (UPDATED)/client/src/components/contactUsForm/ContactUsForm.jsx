import React from "react";
import "./contactUsForm.scss";
import { Form } from "react-router-dom";
function ContactUsForm() {
  const destination = [
    "Sylhet",
    "Chittagong",
    "Rajshahi",
    "Jamalpur",
    "Bandarban",
    "Jaflong",
  ];

  return (
    <div id="contactus" className="contactUs">
      <div className="infos">
        <div className="info">
          <h4>Reception Office</h4>
          <p>2855 Nelsonville Rd, Boston, Massachusetts (MA), 40107</p>
        </div>
        <div className="info">
          <h4>Reception Hours</h4>
          <p>7:30 AM - 11:00 PM</p>
        </div>
        <div className="info">
          <h4>Contact</h4>
          <p>+1-123 456 7890</p>
          <p>contact@info.com</p>
        </div>
        <div className="info">
          <div className="socialLinks">
            <a href="#">
              <img src="face.png" alt="" />
            </a>
            <a href="#">
              <img src="insta.png" alt="" />
            </a>
            <a href="#">
              <img src="link.png" alt="" />
            </a>
            <a href="#">
              <img src="twitter.png" alt="" />
            </a>
          </div>
        </div>
      </div>
      <Form className="form">
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
            />
          </div>
          <div className="row">
            <label htmlFor="email">
              Email<span> *</span>
            </label>
            <input
              id="email"
              name="email"
              type="text"
              placeholder="Email"
              required
            />
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
            />
          </div>
          <div className="row">
            <label htmlFor="date">
              Number of Travellers<span> *</span>
            </label>
            <input
              id="date"
              name="date"
              type="date"
              min="2024-01-01"
              max="2050-12-31"
              required
            />
          </div>
          <div className="row">
            <label htmlFor="destination">Choose a destination</label>

            <select name="destination" id="destination">
              <option value="">--Please choose an option--</option>
              {destination.map((i) => (
                <option value={i}>{i}</option>
              ))}
            </select>
          </div>
          <div className="row">
            <label htmlFor="message">
              Message<span> *</span>
            </label>
            <textarea id="message" name="message" required />
          </div>
          <div className="row">
            <button>Submit</button>
          </div>
        </div>
      </Form>
    </div>
  );
}

export default ContactUsForm;
