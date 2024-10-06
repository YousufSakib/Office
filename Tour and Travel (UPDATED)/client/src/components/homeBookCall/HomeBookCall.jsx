import React from "react";
import "./homeBookCall.scss";

function HomeBookCall() {
  return (
    <div className="HomeBookCall">
      <div className="container">
        <img src="boatImg.jpg" alt="" />
      </div>
      <div className="innerText">
        <div className="up">
          <h2>Plan an Unforgettable Experience in Mykonos Today!</h2>
          <p>
            We can help you fit your stay and experience within your allotted
            budget.
          </p>
        </div>
        <div className="down">
          <p>Book Your Stay Now</p>
          <div className="call">
            <img src="telephone.png" alt="" />
            <p>+1-123 456 7890</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeBookCall;
