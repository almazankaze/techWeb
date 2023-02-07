import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Spinner from "../spinner/Spinner";

import {
  signInWithGooglePopup,
  signInAuthUser,
  createAuthUser,
  createUserDoc,
} from "../../utils/firebase/firebase";

import { getEmailFragments } from "../../utils/functions/getEmailFragments";
import { isEmail } from "../../utils/functions/isEmail";

import "./auth-form.css";

const defaultFormFields = {
  email: "",
  password: "",
  confirmPassword: "",
};

const AuthForm = () => {
  const [isSignup, setIsSignUp] = useState(false);
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password, confirmPassword } = formFields;
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSignup) {
      if (!isEmail(email)) {
        alert("not a valid email");
        return;
      }
      if (password !== confirmPassword) {
        alert("passwords do not match");
        return;
      }

      setLoading(true);

      try {
        const { user } = await createAuthUser(email, password);

        const [displayName, domain] = getEmailFragments(email);

        await createUserDoc(user, { displayName });

        resetFormFields();
        navigate(0);
        setLoading(false);
      } catch (err) {
        if (err.code === "auth/email-already-in-use") {
          alert("Email already in use");
        } else {
          console.log(err);
        }

        setLoading(false);
      }
    } else {
      setLoading(true);
      try {
        await signInAuthUser(email, password);

        resetFormFields();
        setLoading(false);
      } catch (err) {
        switch (err.code) {
          case "auth/wrong-password":
            alert("incorrect password for email");
            break;
          case "auth/user-not-found":
            alert("no user associated with this email");
            break;
          default:
            console.log(err);
        }
        setLoading(false);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const switchMode = () => {
    setIsSignUp((prevIsSignUp) => !prevIsSignUp);
  };
  return loading ? (
    <Spinner />
  ) : (
    <div className="form-container">
      <form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <div className="form-input">
          <input
            type="text"
            name="email"
            onChange={handleChange}
            value={email}
            required
          />
          <span></span>
          <label>Email</label>
        </div>
        <div className="form-input">
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={password}
            required
          />
          <span></span>
          <label>Password</label>
        </div>

        {isSignup && (
          <div className="form-input">
            <input
              type="password"
              name="confirmPassword"
              onChange={handleChange}
              value={confirmPassword}
              required
            />
            <span></span>
            <label>Confirm Password</label>
          </div>
        )}

        {!isSignup && (
          <div className="form-options">
            <div className="remember-check">
              <input type="checkbox" id="form-checkbox" />
              <label htmlFor="form-checkbox">Remember me</label>
            </div>

            <Link to="/" className="forgot-password">
              Forgot Password?
            </Link>
          </div>
        )}

        <button type="submit" className="form-btn">
          {isSignup ? "Sign Up" : "Sign In"}
        </button>
        <hr className="form-divider" />
        <p className="or">OR</p>
        <button
          type="button"
          className="form-btn google-btn"
          onClick={signInWithGoogle}
        >
          Login with Google
        </button>
        <p className="form-question">
          {isSignup ? "Already have an account? " : "Don't have an account? "}

          <button type="button" onClick={switchMode} className="form-link">
            {isSignup ? "Sign In" : "Sign Up"}
          </button>
        </p>
      </form>
    </div>
  );
};

export default AuthForm;
