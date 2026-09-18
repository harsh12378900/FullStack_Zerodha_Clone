import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Menu = () => {
  const [activeMenu, setActiveMenu] = useState(0);
  const [activeProfile, setActiveProfile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = (index) => {
    setActiveMenu(index);
    setMenuOpen(false);
  };

  const handleProfileClick = () => {
    setActiveProfile(!activeProfile);
  };

  const handleLogout = async (e) => {
    e.stopPropagation();

    try {
      const response = await fetch(
        "http://localhost:8080/logout",
        {
          method: "POST",
          credentials: "include"
        }
      );

      const data = await response.json();

      console.log(data);

      if (response.ok) {
        window.location.href = "http://localhost:5174/login";
      }
    } catch (error) {
      console.log("Logout Error:", error);
    }
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">

      {/* Hamburger Button */}
      <div
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Menu */}
      <div className={`menus ${menuOpen ? "show-menu" : ""}`}>
        <ul>

          <Link to="/" onClick={() => handleMenuClick(0)}>
            <li>
              <p className={activeMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </li>
          </Link>

          <Link to="/orders" onClick={() => handleMenuClick(1)}>
            <li>
              <p className={activeMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </li>
          </Link>

          <Link to="/holdings" onClick={() => handleMenuClick(2)}>
            <li>
              <p className={activeMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </li>
          </Link>

          <Link to="/positions" onClick={() => handleMenuClick(3)}>
            <li>
              <p className={activeMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </li>
          </Link>

          <Link to="/funds" onClick={() => handleMenuClick(4)}>
            <li>
              <p className={activeMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </li>
          </Link>

          <Link to="/apps" onClick={() => handleMenuClick(5)}>
            <li>
              <p className={activeMenu === 5 ? activeMenuClass : menuClass}>
                Apps
              </p>
            </li>
          </Link>

        </ul>
      </div>

      {/* Profile */}
      <div
        className="profile"
        onClick={handleProfileClick}
      >
        <div className="avatar">ZU</div>

        <p className="username">USERID</p>
      </div>

      {activeProfile && (
        <div className="profile-dropdown">

          <p>My Profile</p>

          <p onClick={handleLogout}>
            Logout
          </p>

        </div>
      )}

    </div>
  );
};

export default Menu;