import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user-selector";

const NavigateAuth = ({ children }) => {
  const currentUser = useSelector(selectCurrentUser);

  return currentUser ? <Navigate to="/" /> : children;
};

export default NavigateAuth;
