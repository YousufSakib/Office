import React from "react";
import "./homePage.scss";
import Experience from "../../components/experience/Experience";
import Amenities from "../../components/amenities/Amenities ";
import GuestsSay from "../../components/guests_say/GuestsSay";
import HomeBookCall from "../../components/homeBookCall/HomeBookCall";
function HomePage() {
  return (
    <div className="homeContent">
      <Experience />
      <Amenities />
      <GuestsSay />
      <HomeBookCall />
    </div>
  );
}

export default HomePage;
