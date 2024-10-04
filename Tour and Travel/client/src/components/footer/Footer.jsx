import React from "react";
import "./footer.scss";

function Footer() {
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
              <a href="#">
                <img src="face.png" alt="" />
              </a>
              <a href="#">
                <img src="insta.png" alt="" />
              </a>
              <a href="#">
                <img src="link.png" alt="" />
              </a>
              <a href="#">
                <img src="twitter.png" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <p className="copyright">
        Copyright © {new Date().getFullYear} Travel & Tourism | Powered by
        Travel & Tourism
      </p>
    </div>
  );
}

export default Footer;
