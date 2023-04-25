import { CATEGORIES_FETCH_ALL_SUCCESS } from "../actions/actionTypes";

const initialState = {
  categories: []
}

function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    case CATEGORIES_FETCH_ALL_SUCCESS:
      return { ...state, post: action.payload };
    default:
      return state;
  }
}

export default categoriesReducer