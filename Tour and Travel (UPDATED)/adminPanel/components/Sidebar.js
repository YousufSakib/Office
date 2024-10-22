import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Collapse } from "react-bootstrap";

const Sidebar = () => {
  const location = useLocation();
  const [menuStates, setMenuStates] = useState({});

  const toggleMenuState = (menuState) => {
    setMenuStates((prevState) => {
      const newState = { ...prevState };
      if (newState[menuState]) {
        newState[menuState] = false;
      } else {
        Object.keys(newState).forEach((key) => {
          newState[key] = false;
        });
        newState[menuState] = true;
      }
      return newState;
    });
  };

  useEffect(() => {
    onRouteChanged();
  }, [location]);

  const onRouteChanged = () => {
    document.querySelector("#sidebar").classList.remove("active");
    setMenuStates({});

    const dropdownPaths = [
      { path: "/apps", state: "appsMenuOpen" },
      { path: "/basic-ui", state: "basicUiMenuOpen" },
      { path: "/advanced-ui", state: "advancedUiMenuOpen" },
      { path: "/form-elements", state: "formElementsMenuOpen" },
      { path: "/tables", state: "tablesMenuOpen" },
      { path: "/maps", state: "mapsMenuOpen" },
      { path: "/icons", state: "iconsMenuOpen" },
      { path: "/charts", state: "chartsMenuOpen" },
      { path: "/user-pages", state: "userPagesMenuOpen" },
      { path: "/error-pages", state: "errorPagesMenuOpen" },
      { path: "/general-pages", state: "generalPagesMenuOpen" },
      { path: "/ecommerce", state: "ecommercePagesMenuOpen" },
    ];

    dropdownPaths.forEach((obj) => {
      if (isPathActive(obj.path)) {
        setMenuStates((prevState) => ({ ...prevState, [obj.state]: true }));
      }
    });
  };

  const isPathActive = (path) => location.pathname.startsWith(path);

  useEffect(() => {
    const body = document.querySelector("body");
    const sidebarItems = document.querySelectorAll(".sidebar .nav-item");

    sidebarItems.forEach((el) => {
      el.addEventListener("mouseover", () => {
        if (body.classList.contains("sidebar-icon-only")) {
          el.classList.add("hover-open");
        }
      });
      el.addEventListener("mouseout", () => {
        if (body.classList.contains("sidebar-icon-only")) {
          el.classList.remove("hover-open");
        }
      });
    });

    return () => {
      sidebarItems.forEach((el) => {
        el.removeEventListener("mouseover", () => {});
        el.removeEventListener("mouseout", () => {});
      });
    };
  }, []);

  return (
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
      <ul className="nav">
        <li className="nav-item nav-profile">
          <a
            href="!#"
            className="nav-link"
            onClick={(evt) => evt.preventDefault()}
          >
            <div className="nav-profile-image">
              <img
                src={require("../../assets/images/faces/face1.jpg")}
                alt="profile"
              />
              <span className="login-status online"></span>
            </div>
            <div className="nav-profile-text">
              <span className="font-weight-bold mb-2">David Grey. H</span>
              <span className="text-secondary text-small">Project Manager</span>
            </div>
            <i className="mdi mdi-bookmark-check text-success nav-profile-badge"></i>
          </a>
        </li>
        <li
          className={
            isPathActive("/dashboard") ? "nav-item active" : "nav-item"
          }
        >
          <Link className="nav-link" to="/dashboard">
            <span className="menu-title">Dashboard</span>
            <i className="mdi mdi-home menu-icon"></i>
          </Link>
        </li>
        <li
          className={isPathActive("/basic-ui") ? "nav-item active" : "nav-item"}
        >
          <div
            className={
              menuStates.basicUiMenuOpen ? "nav-link menu-expanded" : "nav-link"
            }
            onClick={() => toggleMenuState("basicUiMenuOpen")}
            data-toggle="collapse"
          >
            <span className="menu-title">Basic UI Elements</span>
            <i className="menu-arrow"></i>
            <i className="mdi mdi-crosshairs-gps menu-icon"></i>
          </div>
          <Collapse in={menuStates.basicUiMenuOpen}>
            <ul className="nav flex-column sub-menu">
              <li className="nav-item">
                <Link
                  className={
                    isPathActive("/basic-ui/buttons")
                      ? "nav-link active"
                      : "nav-link"
                  }
                  to="/basic-ui/buttons"
                >
                  Buttons
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={
                    isPathActive("/basic-ui/dropdowns")
                      ? "nav-link active"
                      : "nav-link"
                  }
                  to="/basic-ui/dropdowns"
                >
                  Dropdowns
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={
                    isPathActive("/basic-ui/typography")
                      ? "nav-link active"
                      : "nav-link"
                  }
                  to="/basic-ui/typography"
                >
                  Typography
                </Link>
              </li>
            </ul>
          </Collapse>
        </li>
        {/* Repeat similar structure for other menu items */}
      </ul>
    </nav>
  );
};

export default Sidebar;
