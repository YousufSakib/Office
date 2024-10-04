import "./navbar.scss";
// import "./navbar.css";
import { useState, useRef } from "react";

function Navbar({ title, des }) {
  const [burgermenu, setBurgermenu] = useState(false);
  const handleBurgerMenu = (e) => {
    setBurgermenu((prev) => !prev);
  };
  return (
    <>
      <div className="heroBanner">
        <img src="hero-banner.jpg" className="heroBannerImg" alt="" />
      </div>
      <nav>
        <div className="logoAndMenues">
          <div className="navIcon">
            <a href="#">
              <img src="logo.png" alt="" />
            </a>
          </div>
          <div className={burgermenu ? "menues open" : "menues"}>
            <a href="#">HOME</a>
            <a href="#">Rooms</a>
            <a href="#">AMENITIES</a>
            <a href="#">Contact</a>
          </div>
        </div>
        <button className="navButton">Reservation</button>
        {/* Burger Button*/}
        <button className="burgerButton" onClick={handleBurgerMenu}>
          {burgermenu || <img src="burger-bar.png" alt="" />}
          {burgermenu && <img src="close.png" alt="" />}
        </button>
      </nav>
      <div className="heroTextWrapper">
        <div className="HeroText">
          <h1>{title}</h1>
          <p>{des}</p>
          <button>Book Your Stay Now</button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
