import "./layout.scss";
import Navbar from "../../components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../../components/footer/Footer";

function Layout() {
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
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
