import { Form } from "react-router-dom";
import "./navbar.scss";
// import "./navbar.css";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Search from "../search/Search";
import { useImages } from "../ImageContext";
import { BACKEND_URL } from "../../../dynamicInfo";

function Navbar({ heroSrc, logoSrc }) {
  const [burgermenu, setBurgermenu] = useState(false);
  const handleBurgerMenu = (e) => {
    setBurgermenu((prev) => !prev);
  };
  const { logo, homeHeroImg } = useImages();
  console.log("from nav");
  console.log(logo, homeHeroImg);
  return (
    <>
      <div className="heroBanner">
        <img
          src={`${BACKEND_URL}/uploads/${homeHeroImg}`}
          className="heroBannerImg"
          alt=""
        />
      </div>
      <nav>
        <div className="logoAndMenues">
          <div className="navIcon">
            <a href="#">
              <img src={`${BACKEND_URL}/uploads/${logo}`} alt="" />
            </a>
          </div>
          <div className={burgermenu ? "menues open" : "menues"}>
            <Link to="/">HOME</Link>
            <Link to="/packages">packages</Link>
            <Link to="/places-to-visit">places to visit</Link>
            <Link to="/meet-bangladesh">meet bangladesh</Link>
            <Link to="/about-us">about us</Link>
            <Link to="/contact-us">Contact us</Link>
          </div>
        </div>

        {/* Burger Button*/}
        <button className="burgerButton" onClick={handleBurgerMenu}>
          {burgermenu || <img src="burger-bar.png" alt="" />}
          {burgermenu && <img src="close.png" alt="" />}
        </button>
      </nav>
      <div className="heroTextWrapper">
        <div className="HeroText">
          <h1>Welcome to Bangladesh</h1>
          <p>
            Home of history, culture & natural resourcesSearch every
            well-planned Bangladesh Itinerary
          </p>
          <Link to="/book-tour">
            <button>Book Your Tour Now</button>
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
