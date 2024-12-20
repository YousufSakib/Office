import { Form, useLocation } from "react-router-dom";
import "./navbar.scss";
// import "./navbar.css";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Search from "../search/Search";
import { useImages } from "../ImageContext";
import { BACKEND_URL } from "../../../dynamicInfo";
import { useInfo } from "../CompanyInfoContext";
import FlippingText from "../FlippingText";
import axios from "axios";
function Navbar() {
  const location = useLocation();
  const [lastScrollY, setLastScrollY] = useState(0);
  const [burgermenu, setBurgermenu] = useState(false);
  const [navShow, setNavShow] = useState(true);
  const { id } = useParams();
  const isInSpecificPackagePage = location.pathname === `/packages/${id}`;
  const isInPackageBookPage = location.pathname === `/book-package/${id}`;
  console.log("$$$$$$$", "first on navbar");
  console.log("$$$$$$$", id);
  const [packageInfo, setPackageInfo] = useState({
    packageName: "",
    packageProfileImg: "",
    packageShortDescription: "",
  });
  console.log("$$$$$", packageInfo);
  console.log("$$$$$", location.pathname);
  console.log("$$$$$", location.pathname === "/packages");
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  useEffect(() => {
    const fetchPackage = async () => {
      const headers = {
        "Content-Type": "application/json",
      };
      const url = `${BACKEND_URL}/api/v1/packages/${id}`;

      try {
        const packagePromise = await axios.get(url, { headers });
        const packageName = packagePromise.data.name;
        const packageProfileImg = packagePromise.data.profileImg;
        const packageShortDescription = packagePromise.data.shortDescription;
        console.log("########", packageName);
        setPackageInfo({
          packageName,
          packageProfileImg,
          packageShortDescription,
        });
      } catch (err) {
        console.log(err);
      }
    };
    if (id) {
      fetchPackage();
    }
  }, [id]);

  const handleBurgerMenu = (e) => {
    setBurgermenu((prev) => !prev);
  };
  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setNavShow(false); // User is scrolling down
    } else {
      setNavShow(true); // User is scrolling up
    }
    setLastScrollY(window.scrollY);
  };
  const {
    logo,
    homeHeroImg,
    packageHeroImg,
    aboutHeroImg,
    placesToVistHeroImg,
    meetBangladeshHeroImg,
    contactUsHeroImg,
  } = useImages();

  const { companyName, companyPhoneNo } = useInfo();

  const getheroImg = () => {
    console.log(packageInfo);
    if (location.pathname === "/packages") return packageHeroImg;
    if (isInSpecificPackagePage) return packageInfo.packageProfileImg;
    else if (location.pathname === "/meet-bangladesh")
      return meetBangladeshHeroImg;
    else if (location.pathname === "/places-to-visit")
      return placesToVistHeroImg;
    else if (location.pathname === "/contact-us") return contactUsHeroImg;
    else if (location.pathname === "/about-us") return aboutHeroImg;
    else return homeHeroImg;
  };

  return (
    <>
      {console.log("navbar is rendering")}
      {console.log("$$$$$hero img: ", getheroImg())}
      {console.log("location: ", location)}

      <div className="heroBannerWrapper">
        <div className="heroBanner">
          <img
            src={`${BACKEND_URL}/uploads/${getheroImg() || "noImg.png"}`}
            className="heroBannerImg"
            alt=""
          />
        </div>
      </div>
      <nav className={navShow ? "show" : "hide"}>
        <div className="nav1stRow">
          <div className="">
            <img src="call-red.png" alt="tel" />
            <FlippingText text="Help line: " color="red" fontSize="22px" />
          </div>
          {companyPhoneNo}
        </div>
        <div className="logoAndMenues">
          <div className="logoWrapper">
            <div className="navIcon">
              <Link to="/">
                <img src={`${BACKEND_URL}/uploads/${logo || "noImg"}`} alt="" />
              </Link>
            </div>
            <div className="navCompanyName">
              <Link to="/">
                <span>{companyName}</span>
              </Link>
            </div>
          </div>

          <div className={burgermenu ? "menues open" : "menues"}>
            <Link to="/">HOME</Link>
            <Link to="/packages">Packages</Link>
            <Link to="/places-to-visit">Must-see destinations</Link>
            <Link to="/meet-bangladesh">Discover Bangladesh</Link>
            <Link to="/about-us">about us</Link>
            <Link to="/contact-us">Contact us</Link>
          </div>
          {/* Burger Button*/}
          <button className="burgerButton" onClick={handleBurgerMenu}>
            {burgermenu || <img src="burger-bar.png" alt="" />}
            {burgermenu && <img src="close.png" alt="" />}
          </button>
        </div>
      </nav>
      {location.pathname === "/contact-us" || isInPackageBookPage || (
        <div className="heroTextWrapper">
          {isInSpecificPackagePage || (
            <div className="HeroText">
              <h1>Welcome to Bangladesh</h1>
              <p>
                Home of history, culture & natural resources. Search every
                well-planned Bangladesh Itinerary
              </p>
              <Link to="/book-tour">
                <button className="glow-on-hover">Book Your Tour Now</button>
              </Link>
            </div>
          )}
          {isInSpecificPackagePage && (
            <div className="HeroText">
              <h1>{packageInfo.packageName}</h1>
              <p>{packageInfo.packageShortDescription}</p>
              <Link to={`/book-package/${id}`}>
                <button className="glow-on-hover">Book this package</button>
              </Link>
            </div>
          )}
        </div>
      )}
      {location.pathname === "/" && <Search />}
    </>
  );
}

export default Navbar;
