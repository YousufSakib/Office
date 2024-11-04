import React from "react";
import "./footer.scss";
import { useInfo } from "../CompanyInfoContext";
import { Link } from "react-router-dom";

function Footer() {
  const { companyName, facebookLink, instagramLink, tweeterLink } = useInfo();
  console.log("from Footer");
  console.log(companyName);
  return (
    <div className="footer">
      <div className="footerWrapper">
        <div className="up">
          <div className="line1">
            <div className="footerCard">
              <h2>About IGL Group</h2>
              <Link to="" className="footerItem">
                <img src="arrowRightFooter.png" alt="" />
                <span> About IGL Web Ltd</span>
              </Link>
              <Link to="" className="footerItem">
                <img src="arrowRightFooter.png" alt="" />
                <span> Mission, Vision & Goal</span>
              </Link>
              <Link to="" className="footerItem">
                <img src="arrowRightFooter.png" alt="" />
                <span> Board of Director</span>
              </Link>
              <Link to="" className="footerItem">
                <img src="arrowRightFooter.png" alt="" />
                <span> Board of Adviser</span>
              </Link>
              <Link to="" className="footerItem">
                <img src="arrowRightFooter.png" alt="" />
                <span> Board of Officer/Staff</span>
              </Link>
              <Link to="" className="footerItem">
                <img src="arrowRightFooter.png" alt="" />
                <span> Career With IGL Group</span>
              </Link>
            </div>
          </div>
          <div className="line2">
            <div className="footerCard">
              <h2>Our Partners</h2>
              <Link to="https://iglgroup.org/" className="footerItem">
                <img src="arrowRightFooter.png" alt="" />
                <span>IGL Group</span>
              </Link>
              <Link to="https://iglnet.com/" className="footerItem">
                <img src="arrowRightFooter.png" alt="" />
                <span>
                  IGL Network<sup>TM</sup> Ltd.
                </span>
              </Link>
              <Link to="https://iglweb.com/web/" className="footerItem">
                <img src="arrowRightFooter.png" alt="" />
                <span>
                  {" "}
                  IGL Host<sup>TM</sup> LLc.
                </span>
              </Link>
              <Link to="https://unicodeconverter.info/" className="footerItem">
                <img src="arrowRightFooter.png" alt="" />
                <span>Unicode Converter</span>
              </Link>
              <Link to="https://rambd.com/" className="footerItem">
                <img src="arrowRightFooter.png" alt="" />
                <span>RamBD Ltd.</span>
              </Link>
              <Link to="https://studentvisabd.com/" className="footerItem">
                <img src="arrowRightFooter.png" alt="" />
                <span>Student Visa BD</span>
              </Link>
              <Link to="https://felnadma.com" className="footerItem">
                <img src="arrowRightFooter.png" alt="" />
                <span>Felna DMA</span>
              </Link>
              <Link to="https://felnatech.com/" className="footerItem">
                <img src="arrowRightFooter.png" alt="" />
                <span>Felna Tech</span>
              </Link>
            </div>
          </div>
          <div className="line3">
            <div className="footerCard">
              <h2>Our Service</h2>
              <Link
                to="https://client.iglweb.com/cart.php?a=add&domain=register&query="
                className="footerItem"
              >
                <img src="arrowRightFooter.png" alt="" />
                <span>Domain Registration</span>
              </Link>
              <Link
                to="https://iglweb.com/web/software-pos.php"
                className="footerItem"
              >
                <img src="arrowRightFooter.png" alt="" />
                <span>ERP Software Solution</span>
              </Link>
              <Link
                to="https://iglweb.com/web/hosting-corporate-shared.php"
                className="footerItem"
              >
                <img src="arrowRightFooter.png" alt="" />
                <span>Corporate Web Hosting</span>
              </Link>
              <Link
                to="https://iglweb.com/web/web-desing.php"
                className="footerItem"
              >
                <img src="arrowRightFooter.png" alt="" />
                <span> Web Design & Development</span>
              </Link>
              <Link
                to="https://iglweb.com/web/career-affiliate-program.php"
                className="footerItem"
              >
                <img src="arrowRightFooter.png" alt="" />
                <span>Affiliates</span>
              </Link>
              <Link
                to="https://iglweb.com/web/sms-services.php"
                className="footerItem"
              >
                <img src="arrowRightFooter.png" alt="" />
                <span>Brand SMS Solution</span>
              </Link>
              <Link to="https://sms.felnasms.com/" className="footerItem">
                <img src="arrowRightFooter.png" alt="" />
                <span>SMS cPanel</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="down">
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
          <p className="copyright">
            {`
         Copyright © ${new Date().getFullYear()} Travel & Tourism | Powered by
         ${companyName}
         `}
            <Link to="/admin">Admin</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
