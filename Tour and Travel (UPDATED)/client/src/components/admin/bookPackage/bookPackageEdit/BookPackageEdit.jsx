import React from "react";
import "./bookPackageEdit.scss";

const getStatusText = (status) => {
  if (status == 0) return "Canceled";
  else if (status == 1) return "Pending";
  else if (status == 2) return "Confirmed";
  else if (status == 3) return "Completed";
};

function BookPackageEdit({ data, setPopupEditId }) {
  const handleClose = (event) => {
    event.stopPropagation();
    setPopupViewId(null);
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
          <span>{data[0].name}</span>
        </div>
        <div className="row">
          <span className="title">Phone Number</span>
          <span className="number">{data[0].phoneNo}</span>
        </div>
        <div className="row">
          <span className="title">Email</span>
          <span>{data[0].email}</span>
        </div>
        <div className="row">
          <span className="title">Number of Travellers</span>
          <span className="number">{data[0].travellerNo}</span>
        </div>
        <div className="row">
          <span className="title">Customer's Message</span>
          <span>{data[0].message}</span>
        </div>
        <div className="row">
          <span className="title">Customer's Message</span>
          <span>{data[0].message}</span>
        </div>
        <div className="row">
          <span className="title">Status</span>
          <span className="highlight">{getStatusText(data[0].status)}</span>
        </div>
        <span onClick={handleClose} className="cross">
          X
        </span>
      </div>
    </div>
  );
}

export default BookPackageEdit;
