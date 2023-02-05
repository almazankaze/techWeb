import { useState } from "react";
import { Link } from "react-router-dom";

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

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(email);

    resetFormFields();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const switchMode = () => {
    setIsSignUp((prevIsSignUp) => !prevIsSignUp);
  };
  return (
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
        <button type="button" className="form-btn google-btn">
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
