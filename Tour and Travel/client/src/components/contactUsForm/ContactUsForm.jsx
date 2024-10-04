import React from "react";
import "./contactUsForm.scss";
function ContactUsForm() {
  return (
    <div className="contactUs">
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
      <div className="form">
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
            <label htmlFor="subject">
              Subject<span> *</span>
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="Name"
              required
            />
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
      </div>
    </div>
  );
}

export default ContactUsForm;
