import React from "react";
import "./aboutUs.scss";
import { usedata } from "../../components/DataContext";

function AboutUs() {
  const { aboutUs } = usedata();

  return (
    <div className="aboutContainer">
      <h1>About us</h1>
      <p>{aboutUs}</p>
    </div>
  );
}

export default AboutUs;
