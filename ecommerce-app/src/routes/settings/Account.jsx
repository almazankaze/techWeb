import MyAccount from "../../components/settings/MyAccount";
import SettingsMenu from "../../components/settings/SettingsMenu";
import "./account.css";

const Account = () => {
  return (
    <div className="container settings">
      <div className="settings-grid">
        <SettingsMenu />
        <MyAccount />
      </div>
    </div>
  );
};

export default Account;
