import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Navigation from "./components/navigation/Navigation";
import NavigateAuth from "./routes/authentication/NavigateAuth";
import Home from "./routes/home/Home";
import Footer from "./components/footer/Footer";
import Authentication from "./routes/authentication/Authentication";
import NotFound from "./routes/errors/NotFound";
import Cart from "./routes/cart/Cart";
import Account from "./routes/settings/Account";
import Product from "./routes/product/Product";

import { setCurrentUser } from "./store/user/user-actions";
import {
  onAuthStateChangedListener,
  createUserDoc,
} from "./utils/firebase/firebase";

import "./App.css";

function App() {
  const dispatch = useDispatch();

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
      <Footer />
    </div>
  );
}

export default App;
