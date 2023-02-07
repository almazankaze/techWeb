import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import Navigation from "./components/navigation/Navigation";
import NavigateAuth from "./routes/authentication/NavigateAuth";
import Home from "./routes/home/Home";
import Authentication from "./routes/authentication/Authentication";

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
  );
}

export default App;
