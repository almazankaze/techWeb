import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import HardwareOutlinedIcon from "@mui/icons-material/HardwareOutlined";
import MouseOutlinedIcon from "@mui/icons-material/MouseOutlined";
import MonitorOutlinedIcon from "@mui/icons-material/MonitorOutlined";
import PrintOutlinedIcon from "@mui/icons-material/PrintOutlined";
import SmartphoneOutlinedIcon from "@mui/icons-material/SmartphoneOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import ComputerOutlinedIcon from "@mui/icons-material/ComputerOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";

import { selectIsMenuOpen } from "../../store/navbar/navbar-selector";
import { setIsMenuOpen } from "../../store/navbar/navbar-actions";
import { selectCurrentUser } from "../../store/user/user-selector";

import "./sidebar.css";

const SideBar = () => {
  const dispatch = useDispatch();
  const [showHardware, setShowHardware] = useState(false);
  const [showPeripherals, setShowPeripherals] = useState(false);
  const [showComputers, setShowComputers] = useState(false);
  const isMenuOpen = useSelector(selectIsMenuOpen);
  const currentUser = useSelector(selectCurrentUser);

  const toggleIsMenuOpen = () => dispatch(setIsMenuOpen(!isMenuOpen));

  return (
    <div className={isMenuOpen ? "sidebar show" : "sidebar"}>
      <div className="sidebar-logo-container">
        <h2>MeTech</h2>
      </div>
      <ul className="sidebar-menu">
        <li>
          <Link className="side-link sidebar-item" to="/">
            <HomeOutlinedIcon className="sidebar-icon" /> Home
          </Link>
        </li>
        {currentUser ? (
          <li>
            <Link className="side-link sidebar-item" to="/">
              <PermIdentityOutlinedIcon className="sidebar-icon" />{" "}
              {currentUser.displayName}
            </Link>
          </li>
        ) : (
          <li>
            <Link className="side-link sidebar-item" to="/">
              <PermIdentityOutlinedIcon className="sidebar-icon" /> Sign In
            </Link>
          </li>
        )}
        <li>
          <div className="align-items">
            <Link className="side-link sidebar-item" to="/">
              <FavoriteBorderOutlinedIcon className="sidebar-icon" /> Wishlist
            </Link>
            <div className="side-badge">9+</div>
          </div>
        </li>
        <li>
          <div className="align-items">
            <Link className="side-link sidebar-item" to="/">
              <ShoppingCartOutlinedIcon className="sidebar-icon" /> Shopping
              Cart
            </Link>
            <div className="side-badge">9+</div>
          </div>
        </li>
        <li
          className="side-dropdown"
          onClick={() => setShowHardware(!showHardware)}
        >
          <div className="align-items">
            <div className="side-link sidebar-item">
              <HardwareOutlinedIcon className="sidebar-icon" /> Hardware
            </div>
            <ArrowDropDownOutlinedIcon className="fill-main-color" />
          </div>
          <ul className={showHardware ? "side-submenu open" : "side-submenu"}>
            <li>Motherboards</li>
            <li>Processors</li>
            <li>Ram</li>
            <li>Video Cards</li>
            <li>Power Supplys</li>
            <li>Drives</li>
          </ul>
        </li>
        <li
          className="side-dropdown"
          onClick={() => setShowPeripherals(!showPeripherals)}
        >
          <div className="align-items">
            <div className="side-link sidebar-item">
              <MouseOutlinedIcon className="sidebar-icon" /> Peripherals
            </div>
            <ArrowDropDownOutlinedIcon className="fill-main-color" />
          </div>

          <ul
            className={showPeripherals ? "side-submenu open" : "side-submenu"}
          >
            <li>Mice</li>
            <li>Keyboards</li>
            <li>Mics</li>
            <li>Webcams</li>
          </ul>
        </li>
        <li
          className="side-dropdown"
          onClick={() => setShowComputers(!showComputers)}
        >
          <div className="align-items">
            <div className="side-link sidebar-item" to="/home">
              <ComputerOutlinedIcon className="sidebar-icon" /> Computers
            </div>
            <ArrowDropDownOutlinedIcon className="fill-main-color" />
          </div>

          <ul className={showComputers ? "side-submenu open" : "side-submenu"}>
            <li>Desktops</li>
            <li>Laptops</li>
          </ul>
        </li>

        <li>
          <Link className="side-link sidebar-item" to="/">
            <MonitorOutlinedIcon className="sidebar-icon" /> Monitors
          </Link>
        </li>
        <li>
          <Link className="side-link sidebar-item" to="/about">
            <PrintOutlinedIcon className="sidebar-icon" /> Printers
          </Link>
        </li>
        <li>
          <Link className="side-link sidebar-item" to="/">
            <SmartphoneOutlinedIcon className="sidebar-icon" /> Smartphones
          </Link>
        </li>
        <li>
          <Link className="side-link sidebar-item" to="/">
            <HelpOutlineOutlinedIcon className="sidebar-icon" /> FAQ's
          </Link>
        </li>
        <li>
          <Link className="side-link sidebar-item" to="/">
            <PhoneOutlinedIcon className="sidebar-icon" /> Contact Us
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
