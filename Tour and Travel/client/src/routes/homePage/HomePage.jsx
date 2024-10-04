import React from "react";
import "./homePage.scss";
import Experience from "../../components/experience/Experience";
import Amenities from "../../components/amenities/Amenities ";
import GuestsSay from "../../components/guests_say/GuestsSay";

function HomePage() {
  const obj = {
    Des: "If you are looking for a relaxing, refreshing and rejuvenating experience altogether, we offer all of that under one roof.",
    Len: 3,
    ButtonText: "View all",
    ButtonLink: "#",
  };
  return (
    <div className="homeContent">
      <Experience />
      <Amenities {...obj} />
      <GuestsSay />
    </div>
  );
}

export default HomePage;
