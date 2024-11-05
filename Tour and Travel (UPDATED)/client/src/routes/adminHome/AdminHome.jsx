import React, { useEffect, useState } from "react";
import "./adminHome.scss";
import { BACKEND_URL } from "../../../dynamicInfo";
import axios from "axios";
import FullScreenloading from "../../components/fullScreenloading/FullScreenloading";
import UserContactedPopup from "../../components/userContactedPopup/UserContactedPopup";

function AdminHome() {
  const [contact, setContact] = useState([]);
  const [loading, setLoading] = useState(true);
  const [contactedPopup, setContactedPopup] = useState(null);
  const [showingContactOptions, setShowingContactOptions] = useState(false);

  const handleSeeMore = (id) => {
    setContactedPopup(id);
  };

  const handleClose = (event) => {
    setContactedPopup(null);
    event.stopPropagation();
  };

  useEffect(() => {
    const url = `${BACKEND_URL}/api/v1/contacts`;
    axios
      .get(url)
      .then((response) => {
        setContact(response.data);
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
      {!loading && (
        <>
          <h1>Contacted Clients</h1>
          <div className="alluserContacted">
            {contact.map((item) => (
              <div className="UserContacted" key={item.id}>
                <img
                  className="profile"
                  src={
                    item.gender === "f" ? "avaterFemale.jpg" : "avaterMale.jpg"
                  }
                  alt=""
                />
                <span className="name">{item.name}</span>
                <div className="row">
                  <img className="icon" src="adminPhone.png" alt="" />
                  <span>{item.phoneNo}</span>
                </div>
                <div className="row">
                  <img className="icon" src="adminEmail.png" alt="" />
                  <span>{item.email}</span>
                </div>
                <div className="row">
                  <img className="icon" src="pinDrop.png" alt="" />
                  <span>{item.destination}</span>
                </div>
                <div className="three-dots-wrapper">
                  <img
                    onClick={() => setShowingContactOptions(true)}
                    onMouseUp={() => setShowingContactOptions(false)}
                    className="icon dots"
                    src="homePageDots.png"
                    alt="options"
                  />
                  {/* {showingContactOptions && (<div> <div/>)} */}
                </div>
                <div className="see-more">
                  <button
                    className="button info-btn"
                    onClick={() => handleSeeMore(item.id)}
                  >
                    See more . . .
                  </button>
                </div>
              </div>
            ))}
          </div>
          {contactedPopup && (
            <div
              onClick={() => setContactedPopup(null)} // Close on outer click
              className="WrapperUserContactedPopup"
            >
              <div
                className="UserContactedPopup"
                onClick={(e) => e.stopPropagation()} // Prevent outer click
              >
                <UserContactedPopup id={{ id: contactedPopup }} />
                <img
                  onClick={handleClose}
                  className="cross"
                  src="adminX.png"
                  alt="Close"
                />
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}

export default AdminHome;
