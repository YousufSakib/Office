import "./layout.scss";
import Navbar from "../../components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import HomeBookCall from "../../components/homeBookCall/HomeBookCall";
function Layout({}) {
  // const navHome = {
  //   title: "The Perfect Hotel in Mykonos",
  //   des: "If you are looking for a perfect holiday experience with memories to cherish you are at the right place. Let’s plan a reasonable stay for you.",
  //   isButton: true,
  // };
  // const navContact = {
  //   title: "Contact Us",
  //   des: "Do you want to enquire about our pricing, current offers and arrangements we can help you with? Give us a call or send in your concerns through the form below.",
  //   isButton: false,
  // };
  // const navAmenities = {
  //   title: "Amenities & Facilities",
  //   des: "We do not give you just rooms to stay. We give you an environment so you can experience the best while on a holiday with us. Walk into our hotel and enjoy a refreshing, rejuvenating, day-off with us.",
  //   isButton: false,
  // };
  return (
    <div className="layout">
      <div className="show-responsive">
        <div className="md">Mid</div>
        <div className="lg">large</div>
        <div className="sm">small</div>
      </div>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <Outlet />
      </div>
      <HomeBookCall />
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
