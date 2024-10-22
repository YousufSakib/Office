import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

function Layout({}) {
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        {/* <Outlet /> */}
        The content goes here
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
