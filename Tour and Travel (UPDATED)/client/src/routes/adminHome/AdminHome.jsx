import React, { useEffect, useState } from "react";
import "./adminHome.scss";
import { BACKEND_URL } from "../../../dynamicInfo";
import axios from "axios";
import FullScreenloading from "../../components/fullScreenloading/FullScreenloading";

function AdminHome() {
  const [contact, setContact] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = `${BACKEND_URL}/api/v1/contacts`;
    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        setContact(response.data);
        console.log("from Admin home");
        console.log("contact", contact);
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
      {loading || (
        <div className="alluserContacted">
          <h1>Cutomers Contacted</h1>
          {contact.map((item) => (
            <div className="UserContacted">
              <div className="row">
                <span>Name</span>
                <span>{item.name}</span>
              </div>
              <div className="row">
                <span>Phone No</span>
                <span>{item.phoneNo}</span>
              </div>
              <div className="row">
                <span>Email</span>
                <span>{item.email}</span>
              </div>
              <div className="row">
                <span>Message</span>
                <span>{item.message}</span>
              </div>
              <div className="row">
                <span>Tour Date</span>
                <span>{item.date.split("T")[0]}</span>
              </div>
              <div className="row">
                <span>Tour Destination</span>
                <span>{item.destination}</span>
              </div>
              <div className="row">
                <span>Tour Duration</span>
                <span>{item.tourDuration} days</span>
              </div>
              <div className="row">
                <span>Number of Person</span>
                <span>{item.travellerNo} persons</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default AdminHome;
