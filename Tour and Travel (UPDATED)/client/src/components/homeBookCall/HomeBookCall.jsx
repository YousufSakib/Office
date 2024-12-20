import React from "react";
import "./homeBookCall.scss";
import { useInfo } from "../CompanyInfoContext";

function HomeBookCall() {
  const { companyPhoneNo } = useInfo();

  return (
    <div className="HomeBookCall">
      <div className="container">
        <img src="boatImg.jpg" alt="" />
      </div>
      <div className="innerText">
        <div className="up">
          <h2>Plan an Unforgettable Experience in Bangladesh Today!</h2>
          <p>
            We can help you fit your stay and experience within your allotted
            budget.
          </p>
        </div>
        <div className="down shake-left">
          <p>Book Your Tour Now</p>
          <div className="call">
            <img src="telephone.png" alt="" />
            <p>{`${companyPhoneNo}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeBookCall;
