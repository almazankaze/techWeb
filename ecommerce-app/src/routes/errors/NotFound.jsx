import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";

import "./error.css";

function NotFound() {
  const navigate = useNavigate();

  const goToHomeHandler = () => {
    navigate("/");
  };

  return (
    <div className="error-container">
      <div className="error-text-container">
        <h1 className="error-title">404</h1>
        <h2 className="error-message">OOPS! PAGE NOT FOUND</h2>
        <h4 className="error-desc">
          Sorry, the page you're looking for does not exist. If you think
          something is broken, report a problem.
        </h4>
      </div>
      <div className="error-btns">
        <Button type="button" className="m-medium" onClick={goToHomeHandler}>
          Return Home
        </Button>
        <Button type="button" className="m-medium" onClick={goToHomeHandler}>
          Report Problem
        </Button>
      </div>
    </div>
  );
}

export default NotFound;
