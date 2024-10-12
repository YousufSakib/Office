import React from "react";
import "./footer.scss";
import { usedata } from "../DataContext";

function Footer() {
  const { companyName, facebookLink, instagramLink, tweeterLink } = usedata();
  console.log("from Footer");
  console.log(companyName);
  return (
    <div className="footer">
      <div className="up">
        <div className="left">
          <div className="card">
            <h3>Travel & Tourism</h3>
            <p>
              Gravida maecenas mi iaculis non, posuere mattis urna, ac risus sit
              porta nunc nibh dictum proin leo dolor sed bibendum mi.
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
              Travel & Tourism, 2855 Nelsonville Rd, Boston, Massachusetts (MA),
              40107.
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
         Copyright © 2024 Travel & Tourism | Powered by
         ${companyName}
         `}
      </p>
    </div>
  );
}

export default Footer;
