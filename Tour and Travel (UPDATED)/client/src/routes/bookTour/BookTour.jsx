import React from "react";
import "./bookTour.scss";
import { Form } from "react-router-dom";
function BookTour() {
  const destination = [
    "Sylhet",
    "Chittagong",
    "Rajshahi",
    "Jamalpur",
    "Bandarban",
    "Jaflong",
  ];

  return (
    <div id="bookTour" className="bookTour">
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

export default BookTour;
