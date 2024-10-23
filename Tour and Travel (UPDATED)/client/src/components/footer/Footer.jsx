import React from "react";
import "./footer.scss";
import { useInfo } from "../CompanyInfoContext";

function Footer() {
  const { companyName, facebookLink, instagramLink, tweeterLink } = useInfo();
  console.log("from Footer");
  console.log(companyName);
  return (
    <div className="footer">
      <div className="up">
        <div className="left">
          <div className="card">
            <h3>IGL Tourism</h3>
            <p>
              Welcome to IGL Tour, your premier travel partner in Bangladesh! We
              are dedicated to showcasing the beauty, culture, and rich heritage
            </p>
          </div>
          <div className="card links">
            <h3>Hotel</h3>
            <a href="#">About Us</a>
            <a href="#">Reviews</a>
            <a href="#">Get Direction</a>
            <a href="#">Nearby Visits</a>
            <a href="#">Contact Us</a>
          </div>
        </div>
        <div className="right">
          <div className="card links">
            <h3>Customer Help</h3>
            <a href="#">About Us</a>
            <a href="#">Reviews</a>
            <a href="#">Get Direction</a>
            <a href="#">Nearby Visits</a>
            <a href="#">Contact Us</a>
          </div>
          <div className="card">
            <h3>Contact</h3>
            <p>
              House # 33A(4th Floor), Road # 4, Dhanmondi, Dhaka-1205,
              Bangladesh
            </p>
            <div className="socialLinks">
              <a href={facebookLink}>
                <img src="face.png" alt="" />
              </a>
              <a href={instagramLink}>
                <img src="insta.png" alt="" />
              </a>
              <a href="#">
                <img src="link.png" alt="" />
              </a>
              <a href={tweeterLink}>
                <img src="twitter.png" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <p className="copyright">
        {`
         Copyright © ${new Date().getFullYear()} Travel & Tourism | Powered by
         ${companyName}
         `}
      </p>
    </div>
  );
}

export default Footer;
