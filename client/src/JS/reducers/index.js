import { combineReducers } from "redux";
import annonceReducer from "./annonceReducer";
import userReducer from "./userReducer";

export default combineReducers({
  annonceReducer,
  userReducer,
});
