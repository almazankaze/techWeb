import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectCurrentUser } from "../../store/user/user-selector";
import { signOutUser } from "../../utils/firebase/firebase";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);

  return (
    <Fragment>
      <div>
        <Link to="/">Home</Link>

        {currentUser ? (
          <div onClick={signOutUser}>{currentUser.displayName}</div>
        ) : (
          <Link to="/auth">SIGN IN</Link>
        )}
      </div>

      <Outlet />
    </Fragment>
  );
};

export default Navigation;
