import { combineReducers } from "redux";

import postReducer from "./postsReducer";
import categoriesReducer from "./categoriesReducer";
import rootReducer from "./rootReducer";

export default combineReducers({
  rootReducer,
  postReducer,
  categoriesReducer,
});
