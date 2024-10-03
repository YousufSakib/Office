import "./navbar.scss";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
function Navbar() {
  const [searchOpen, setSearchClose] = useState(true);
  const handleSearchOpen = (e) => {
    setSearchClose((prev) => !prev);
  };
  return (
    <nav>
      <div className="navLeft">
        <div className="navLeftTop"></div>
        <div className="navLeftBottom">
          <div className="logo">
            <img className="aroplane" src="aroplane.png" alt="" />
            <img className="logoImg" src="logo.png" alt="logo" />
          </div>
          <div className="menues">
            <div className="dropdown">
              <button className="dropbtn">Tour</button>
              <div className="dropdown-content">
                <a href="#">Tour left sidebar</a>
                <a href="#">Archieve tour</a>
                <a href="#">Tour package</a>
                <a href="#">Tour Single</a>
              </div>
            </div>
            <div className="dropdown">
              <button className="dropbtn">Destination</button>
              <div className="dropdown-content">
                <a href="#">Destin ation V1</a>
                <a href="#">Destin ation V2</a>
                <a href="#">Destin ation V3</a>
                <a href="#">Destin ation V4</a>
              </div>
            </div>
            <div className="dropdown">
              <button className="dropbtn">Blog</button>
              <div className="dropdown-content">
                <a href="#">Blog</a>
                <a href="#">Blog Detail</a>
              </div>
            </div>
            <div className="dropdown">
              <button className="dropbtn">Pages</button>
              <div className="dropdown-content">
                <a href="#">About Us</a>
                <a href="#">Gallery</a>
                <a href="#">Team member</a>
                <a href="#">Terms & Condition</a>
                <a href="#">Help center</a>
              </div>
            </div>
            <div className="dropdown">
              <button className="dropbtn">Dashboard</button>
              <div className="dropdown-content">
                <a href="#">Dashboard</a>
                <a href="#">My booking</a>
                <a href="#">My Listing</a>
                <a href="#">Add Tour</a>
                <a href="#">My Favorite</a>
                <a href="#">My Profile</a>
              </div>
            </div>
          </div>
          <div className="profile">
            <div className="profileItem">
              <select name="language" id="language">
                <option value="english">English</option>
                <option value="vietnam">Vietnam</option>
                <option value="german">German</option>
                <option value="russian">Russian</option>
                <option value="canada">Canada</option>
              </select>
            </div>
            <div className="profileItem">
              <select name="currency" id="currency">
                <option value="used">USD</option>
                <option value="vnd">VND</option>
                <option value="ero">ERO</option>
              </select>
            </div>
            <div className="profileItem">
              {searchOpen || <FaSearch onClick={handleSearchOpen} />}
              {searchOpen && <IoCloseSharp onClick={handleSearchOpen} />}
            </div>
            <img className="profilePic" src="avata.jpg" alt="profile pic" />
          </div>
          {searchOpen && (
            <div className="floatSearch">
              <input type="text" placeholder="Search here" />
              <FaSearch />
            </div>
          )}
        </div>
      </div>
      <div className="navRight">
        <img className="9dot" src="./9dot.svg" alt="" />
      </div>
    </nav>
  );
}

export default Navbar;
