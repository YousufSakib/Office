import React, { useState } from "react";
import "./bookPackageEdit.scss";
import { BACKEND_URL } from "../../../../../dynamicInfo";
import axios from "axios";

const getStatusText = (status) => {
  if (status == 0) return "Canceled";
  else if (status == 1) return "Pending";
  else if (status == 2) return "Confirmed";
  else if (status == 3) return "Completed";
};

function BookPackageEdit({
  data,
  setPopupEditId,
  packageData,
  setDocumentUpdated,
}) {
  const [bookingEntry, setBookingEntry] = useState(data[0]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "status") {
      setBookingEntry((prev) => ({
        ...prev,
        [name]: Number(value),
      }));
    } else {
      setBookingEntry((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async () => {
    const url = `${BACKEND_URL}/api/v1/book-package/${bookingEntry.id}`;

    try {
      // Perform PUT request to update the booking entry
      const response = await axios.put(url, bookingEntry, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setDocumentUpdated((prev) => !prev);
      setPopupEditId(null);
      // If update is successful, show success alert
      if (response.status === 200) {
        alert("Booking entry updated successfully");
      }
    } catch (error) {
      console.log("Error updating booking entry", error);

      // Check if the error has a response from the server
      if (error.response) {
        // Handle server-side error (e.g., 400, 500)
        if (error.response.status === 400) {
          alert("Bad request. Please check the data and try again.");
        } else if (error.response.status === 500) {
          alert("Server error. Please try again later.");
        } else {
          alert("Failed to update package. Try again.");
        }
      } else if (error.request) {
        // Handle network error (e.g., no response from the server)
        alert("Network error. Please check your internet connection.");
      } else {
        // Handle any other errors
        alert("An unexpected error occurred. Try again.");
      }
    }
  };
  const handleClose = (event) => {
    event.stopPropagation();
    setPopupEditId(null);
  };

  const handlePopupClick = (event) => {
    // Stop the click event from propagating to the parent div
    event.stopPropagation();
  };

  return (
    <div onClick={handleClose} className="bookPackageEditWrapper">
      <div className="bookPackageEdit" onClick={handlePopupClick}>
        <div className="row">
          <span className="title">Name</span>
          <span>{bookingEntry.name}</span>
        </div>
        <div className="row">
          <span className="title">Phone Number</span>
          <span className="number">{bookingEntry.phoneNo}</span>
        </div>
        <div className="row">
          <span className="title">Email</span>
          <span>{bookingEntry.email}</span>
        </div>
        <div className="row">
          <span className="title">Number of Travellers</span>
          <input
            name="travellerNo"
            onChange={handleChange}
            type="number"
            value={bookingEntry.travellerNo}
          />
        </div>
        <div className="row">
          <span className="title">Customer's Message</span>
          <span>{bookingEntry.message}</span>
        </div>
        <div className="row ">
          <span className="title">Change Status</span>
          <label className="radio">
            <input
              onChange={handleChange}
              type="radio"
              name="status"
              value="1"
              checked={bookingEntry.status === 1}
            />
            <span>Pending</span>
          </label>
          <label className="radio">
            <input
              onChange={handleChange}
              type="radio"
              name="status"
              value="2"
              checked={bookingEntry.status === 2}
            />
            <span>Confirmed</span>
          </label>

          <label className="radio">
            <input
              onChange={handleChange}
              type="radio"
              name="status"
              value="3"
              checked={bookingEntry.status === 3}
            />
            <span>Completed</span>
          </label>
          <label className="radio">
            <input
              onChange={handleChange}
              type="radio"
              name="status"
              value="0"
              checked={bookingEntry.status === 0}
            />
            <span>Cancelled</span>
          </label>
        </div>
        <div className="row">
          <button onClick={handleSubmit} className="button">
            Save
          </button>
        </div>
        <span onClick={handleClose} className="cross">
          X
        </span>
      </div>
    </div>
  );
}

export default BookPackageEdit;
