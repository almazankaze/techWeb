import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";
import HeadsetMicOutlinedIcon from "@mui/icons-material/HeadsetMicOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";

import "./perks.css";

const Perks = () => {
  return (
    <div className="perks-container">
      <div className="perk-card">
        <div className="perk-icon">
          <LocalShippingOutlinedIcon />
        </div>
        <div className="perk-info">
          <h4>Free Shipping</h4>
          <p className="desc-text">Orders over $100</p>
        </div>
      </div>
      <div className="perk-card">
        <div className="perk-icon">
          <AccountBalanceWalletOutlinedIcon />
        </div>
        <div className="perk-info">
          <h4>Get Money Back</h4>
          <p className="desc-text">With a 30 day</p>
        </div>
      </div>
      <div className="perk-card">
        <div className="perk-icon">
          <GppGoodOutlinedIcon />
        </div>
        <div className="perk-info">
          <h4>Secure Payment</h4>
          <p className="desc-text">Secured payment</p>
        </div>
      </div>
      <div className="perk-card">
        <div className="perk-icon">
          <HeadsetMicOutlinedIcon />
        </div>
        <div className="perk-info">
          <h4>Online Support</h4>
          <p className="desc-text">Support 24/7</p>
        </div>
      </div>
    </div>
  );
};

export default Perks;
