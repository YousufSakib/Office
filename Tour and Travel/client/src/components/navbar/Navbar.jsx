import "./navbar.scss";
// import "./navbar.css";
import { useState, useRef } from "react";

function Navbar() {
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
          <h1>The Perfect Hotel in Mykonos</h1>
          <p>
            If you are looking for a perfect holiday experience with memories to
            cherish you are at the right place. Let’s plan a reasonable stay for
            you.
          </p>
          <button>Book Your Stay Now</button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
