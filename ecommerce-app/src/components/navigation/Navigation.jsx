import { Fragment } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { selectCurrentUser } from "../../store/user/user-selector";
import { signOutUser } from "../../utils/firebase/firebase";
import {
  selectIsMenuOpen,
  selectIsSearchOpen,
} from "../../store/navbar/navbar-selector";
import {
  setIsMenuOpen,
  setIsSearchOpen,
} from "../../store/navbar/navbar-actions";
import { selectCartCount } from "../../store/cart/cart-selector";

import SearchForm from "../search-form/SearchForm";
import NavCategories from "./NavCategories";
import DevicesIcon from "@mui/icons-material/Devices";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

import "./navigation.css";
import SideBar from "./SideBar";

const Navigation = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector(selectIsMenuOpen);
  const isSearchOpen = useSelector(selectIsSearchOpen);
  const currentUser = useSelector(selectCurrentUser);
  const cartCount = useSelector(selectCartCount);

  const navigate = useNavigate();

  const goToCartHandler = () => {
    navigate("/cart");
  };

  const toggleIsMenuOpen = () => {
    dispatch(setIsSearchOpen(false));
    dispatch(setIsMenuOpen(!isMenuOpen));
  };
  const toggleIsSearchOpen = () => {
    dispatch(setIsMenuOpen(false));
    dispatch(setIsSearchOpen(!isSearchOpen));
  };

  return (
    <Fragment>
      <div className="navbar">
        <div className="top-nav-container">
          <div className="navbar-top-left">
            <Link to="/" className="navbar-logo-container">
              <DevicesIcon className="navbar-logo" />
              <h1>MeTech</h1>
            </Link>
          </div>

          <div className="navbar-top-middle">
            <SearchForm />
          </div>

          <div className="navbar-top-right">
            <div className="icon-container">
              <FavoriteBorderIcon className="navbar-icon" />
              <span className="badge"> 9 </span>
            </div>

            <div className="icon-container" onClick={goToCartHandler}>
              <ShoppingCartOutlinedIcon className="navbar-icon" />
              <span className="badge">
                {" "}
                {cartCount >= 9 ? "9+" : cartCount}{" "}
              </span>
            </div>
            {currentUser ? (
              <div className="nav-profile-link nav-link" onClick={signOutUser}>
                {currentUser.displayName}
              </div>
            ) : (
              <div className="nav-profile-link">
                <Link className="nav-link" to="/auth">
                  Sign In
                </Link>
              </div>
            )}
          </div>
          <div className="mobile-nav-top-right">
            <SearchIcon className="navbar-icon" onClick={toggleIsSearchOpen} />
            <MenuIcon className="navbar-icon" onClick={toggleIsMenuOpen} />
          </div>
        </div>
        <div
          className={
            isSearchOpen ? "mobile-navsearch-show" : "mobile-navsearch"
          }
        >
          <SearchForm />
        </div>
        <NavCategories />
      </div>

      <SideBar />

      <Outlet />
    </Fragment>
  );
};

export default Navigation;
