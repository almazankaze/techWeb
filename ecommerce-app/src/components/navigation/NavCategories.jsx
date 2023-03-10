import { Link } from "react-router-dom";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";

import processors from "../../img/components/processors.jpg";
import cases from "../../img/components/computer_case.jpg";
import hardDrives from "../../img/components/hard_drives.jpg";
import motherboards from "../../img/components/motherboards.jpg";
import power from "../../img/components/power_supplys.jpg";
import ram from "../../img/components/rams.jpg";
import ssd from "../../img/components/ssd_disk.jpg";
import videoCards from "../../img/components/video_cards.jpg";

import "./navcategories.css";

const NavCategories = () => {
  return (
    <div className="navbar-bottom">
      <ul className="container navbar-links">
        <li className="submenu">
          <div className="nav-link">Products</div>
          <ul className="dropdown-menu">
            <li className="sidemenu">
              <Link className="sub-link" to="/components">
                <div className="dot"></div>Pc components
              </Link>
              <PlayArrowIcon className="nav-arrow-icon" />

              <div className="menu-right">
                <h1>Pc Components</h1>
                <hr></hr>
                <div className="menu-grid">
                  <div className="menu-grid-item">
                    <img src={motherboards} alt="motherboards"></img>
                    <p>Motherboards</p>
                  </div>
                  <div className="menu-grid-item">
                    <img src={processors} alt="processors"></img>
                    <p>Processors</p>
                  </div>
                  <div className="menu-grid-item">
                    <img src={ram} alt="ram"></img>
                    <p>RAM</p>
                  </div>
                  <div className="menu-grid-item">
                    <img src={videoCards} alt="video cards"></img>
                    <p>Video Cards</p>
                  </div>
                  <div className="menu-grid-item">
                    <img src={power} alt="power supplys"></img>
                    <p>Power Supplys</p>
                  </div>
                  <div className="menu-grid-item">
                    <img src={hardDrives} alt="hard drives"></img>
                    <p>Hard Drives</p>
                  </div>
                  <div className="menu-grid-item">
                    <img src={ssd} alt="ssd"></img>
                    <p>SSD</p>
                  </div>
                  <div className="menu-grid-item">
                    <img src={cases} alt="cases"></img>
                    <p>Cases</p>
                  </div>
                </div>
              </div>
            </li>
            <li className="sidemenu">
              <Link className="sub-link" to="/about">
                <div className="dot"></div>Peripherals
              </Link>
              <PlayArrowIcon className="nav-arrow-icon" />
            </li>
            <li>
              <Link className="sub-link" to="/about">
                <div className="dot"></div>Monitors
              </Link>
            </li>
            <li>
              <Link className="sub-link" to="/about">
                <div className="dot"></div>Printers
              </Link>
            </li>
            <li className="sidemenu">
              <Link className="sub-link" to="/about">
                <div className="dot"></div>Gaming
              </Link>
              <PlayArrowIcon className="nav-arrow-icon" />
            </li>
            <li>
              <Link className="sub-link" to="/about">
                <div className="dot"></div>Tablets
              </Link>
            </li>

            <li className="sidemenu">
              <Link className="sub-link" to="/about">
                <div className="dot"></div>Software
              </Link>
              <PlayArrowIcon className="nav-arrow-icon" />
            </li>
          </ul>
        </li>
        <li>
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/desktops">
            Desktops
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/notebooks">
            Notebooks
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/smartphones">
            Smartphones
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/about">
            About Us
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/faq">
            FAQ'S
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/contact">
            Contact Us
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavCategories;
