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
          <h1>User messages</h1>
          {contact.map((item) => (
            <div className="UserContacted">
              <div className="row">
                <span>Name</span>
                <span>{item.name}</span>
              </div>
              <div className="row">
                <span>phoneNo</span>
                <span>{item.phoneNo}</span>
              </div>
              <div className="row">
                <span>email</span>
                <span>{item.email}</span>
              </div>
              <div className="row">
                <span>message</span>
                <span>{item.message}</span>
              </div>
              <div className="row">
                <span>date</span>
                <span>{item.date}</span>
              </div>
              <div className="row">
                <span>destination</span>
                <span>{item.destination}</span>
              </div>
              <div className="row">
                <span>tourDuration</span>
                <span>{item.tourDuration}</span>
              </div>
              <div className="row">
                <span>travellerNo</span>
                <span>{item.travellerNo}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default AdminHome;
