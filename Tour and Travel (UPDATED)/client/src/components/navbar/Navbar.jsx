import { Form, useLocation } from "react-router-dom";
import "./navbar.scss";
// import "./navbar.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Search from "../search/Search";
import { useImages } from "../ImageContext";
import { BACKEND_URL } from "../../../dynamicInfo";
import { useInfo } from "../CompanyInfoContext";

function Navbar() {
  const location = useLocation();
  const [lastScrollY, setLastScrollY] = useState(0);
  const [burgermenu, setBurgermenu] = useState(false);
  const [navShow, setNavShow] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

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

  const { companyName } = useInfo();

  const getheroImg = () => {
    if (location.pathname === "/packages") return packageHeroImg;
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
      {console.log("hero img: ", getheroImg())}
      {console.log("location: ", location)}
      <div className="heroBanner">
        <img
          src={`${BACKEND_URL}/uploads/${getheroImg() || "noImg"}`}
          className="heroBannerImg"
          alt=""
        />
      </div>
      <nav className={navShow ? "show" : "hide"}>
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
      <div className="heroTextWrapper">
        <div className="HeroText">
          <h1>Welcome to Bangladesh</h1>
          <p>
            Home of history, culture & natural resourcesSearch every
            well-planned Bangladesh Itinerary
          </p>
          <Link to="/book-tour">
            <button className="button">Book Your Tour Now</button>
          </Link>
        </div>

        <div className="search">
          <Search />
        </div>
      </div>
    </>
  );
}

export default Navbar;
