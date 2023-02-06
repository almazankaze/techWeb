import USER_ACTIONS from "./user-types";
import { createAction } from "../../utils/reducer/reducer";

export const setCurrentUser = (user) =>
  createAction(USER_ACTIONS.SET_CURRENT_USER, user);
