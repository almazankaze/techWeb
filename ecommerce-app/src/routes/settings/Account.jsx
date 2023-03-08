import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user-selector";
import MyAccount from "../../components/settings/MyAccount";
import SettingsMenu from "../../components/settings/SettingsMenu";
import Spinner from "../../components/spinner/Spinner";

import "./account.css";

const Account = () => {
  const currentUser = useSelector(selectCurrentUser);

  return (
    <div className="container settings">
      {!currentUser ? (
        <Spinner />
      ) : (
        <div className="settings-grid">
          <SettingsMenu />
          <MyAccount />
        </div>
      )}
    </div>
  );
};

export default Account;
