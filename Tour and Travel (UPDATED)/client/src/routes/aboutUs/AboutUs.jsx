import React, { useEffect } from "react";
import "./aboutUs.scss";
import { useInfo } from "../../components/CompanyInfoContext"
import slowScrollToTop from "../../lib/slowScrolltoTop";

function AboutUs() {
  useEffect(() => {
    const targetElement = document.getElementById("aboutUsContainer");
    slowScrollToTop(targetElement, 80, 1000);
    // targetElement.scrollIntoView({ behavior: "smooth" });
  }, []);
  const { aboutUs } = useInfo();

  return (
    <div className="aboutContainer" id="aboutUsContainer">
      <h1>About us</h1>
      <p>{aboutUs}</p>
    </div>
  );
}

export default AboutUs;
