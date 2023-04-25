import { combineReducers } from "redux";
import categoriesReducer from "./categoryReducer";
import postReducer from "./postReducer";

export default combineReducers({
  postReducer,
  categoriesReducer
});
