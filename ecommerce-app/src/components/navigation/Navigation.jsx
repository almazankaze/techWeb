import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Fragment>
      <div>
        <Link to="/">Home</Link>
        <Link to="auth">Sign In</Link>
      </div>

      <Outlet />
    </Fragment>
  );
};

export default Navigation;
