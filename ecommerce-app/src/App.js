import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import Navigation from "./components/navigation/Navigation";
import NavigateAuth from "./routes/authentication/NavigateAuth";
import Home from "./routes/home/Home";
import Footer from "./components/footer/Footer";
import Authentication from "./routes/authentication/Authentication";

import SHOP_DATA from "./shop-data";

import { setCurrentUser } from "./store/user/user-actions";
import {
  onAuthStateChangedListener,
  createUserDoc,
  addCollectionAndDocuments,
} from "./utils/firebase/firebase";

import "./App.css";

function App() {
  const dispatch = useDispatch();

  /* useEffect(() => {
    addCollectionAndDocuments("storeItems", SHOP_DATA);
  }, []); */

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
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
