import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectIsMenuOpen } from "./store/navbar/navbar-selector";
import Navigation from "./components/navigation/Navigation";
import NavigateAuth from "./routes/authentication/NavigateAuth";
import Home from "./routes/home/Home";
import Footer from "./components/footer/Footer";
import Authentication from "./routes/authentication/Authentication";
import NotFound from "./routes/errors/NotFound";
import Cart from "./routes/cart/Cart";
import Account from "./routes/settings/Account";
import Product from "./routes/product/Product";
import ScrollToTop from "./components/scroll/ScrollToTop";

import { setCurrentUser } from "./store/user/user-actions";
import {
  onAuthStateChangedListener,
  createUserDoc,
} from "./utils/firebase/firebase";

import "./App.css";

function App() {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector(selectIsMenuOpen);

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDoc(user);
      }

      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <div>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Home />} />
            <Route
              path="auth"
              element={
                <NavigateAuth>
                  <Authentication />
                </NavigateAuth>
              }
            />
            <Route path="cart" element={<Cart />} />
            <Route path="account" element={<Account />} />
            <Route path="product/:id" element={<Product />} />
            <Route path="*" element={<Navigate to="/notfound" />} />
            <Route path="notfound" element={<NotFound />} />
          </Route>
        </Routes>
      </ScrollToTop>
      <div className={isMenuOpen ? "nav-open-background" : ""}></div>
      <Footer />
    </div>
  );
}

export default App;
