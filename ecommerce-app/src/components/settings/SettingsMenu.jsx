import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

import { signOutUser } from "../../utils/firebase/firebase";
import { useNavigate } from "react-router-dom";

import "./settings.css";

const SettingsMenu = () => {
  const navigate = useNavigate();

  const signMeOut = async () => {
    await signOutUser();
    navigate("/auth");
  };
  return (
    <div className="settings-menu">
      <div className="settings-user-info">
        <h3>John Almazan</h3>
      </div>
      <ul className="settings-menu-buttons">
        <li className="menu-button active">
          <PersonOutlineOutlinedIcon className="settings-menu-icon" /> My
          Account
        </li>
        <li className="menu-button">
          <HomeOutlinedIcon className="settings-menu-icon" /> My Address
        </li>
        <li className="menu-button">
          <ReceiptLongOutlinedIcon className="settings-menu-icon" /> My Orders
        </li>
        <li className="menu-button">
          <CreditCardOutlinedIcon className="settings-menu-icon" /> Payment
          Methods
        </li>
        <li className="menu-button">
          <SupportAgentOutlinedIcon className="settings-menu-icon" /> Support
          Tickets
        </li>
        <li className="menu-button" onClick={signMeOut}>
          <LogoutOutlinedIcon className="settings-menu-icon" /> Log out
        </li>
      </ul>
    </div>
  );
};

export default SettingsMenu;
