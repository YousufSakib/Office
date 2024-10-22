import React, { useEffect, useState } from "react";
import FullScreenloading from "../fullScreenloading/FullScreenloading";
import { BACKEND_URL } from "../../../dynamicInfo";
import axios from "axios";
import "./userContactedPopup.scss";

function UserContactedPopup({ id }) {
  const [contact, setContact] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = `${BACKEND_URL}/api/v1/contacts/${id.id}`;
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
      {console.log("User contacted-popup rendering")}
      {console.log(id)}
      {loading && <FullScreenloading />}
      {loading || (
          <div className="UserContacted">
            <div className="row">
              <span>Name</span>
              <span>{contact.name}</span>
            </div>
            <div className="row">
              <span>Phone No</span>
              <span>{contact.phoneNo}</span>
            </div>
            <div className="row">
              <span>Email</span>
              <span>{contact.email}</span>
            </div>
            <div className="row">
              <span>Message</span>
              <span>{contact.message}</span>
            </div>
            <div className="row">
              <span>Tour Date</span>
              <span>{contact.date?.split("T")[0]}</span>
            </div>
            <div className="row">
              <span>Tour Destination</span>
              <span>{contact.destination}</span>
            </div>
            <div className="row">
              <span>Tour Duration</span>
              <span>{contact.tourDuration} days</span>
            </div>
            <div className="row">
              <span>Number of Person</span>
              <span>{contact.travellerNo} persons</span>
            </div>
          </div>
      )}
    </>
  );
}

export default UserContactedPopup;
