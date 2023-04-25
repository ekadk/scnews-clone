import {
  CATEGORIES_DELETE_SUCCESS,
  CATEGORIES_FETCH_ALL_SUCCESS,
  CATEGORIES_FETCH_ONE_SUCCESS,
  CATEGORIES_POST_SUCCESS,
} from "../actions/actionTypes";

const initialState = {
  categories: [],
  category: { name: ""},
};

function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    case CATEGORIES_FETCH_ALL_SUCCESS:
      return { ...state, categories: action.payload };

    case CATEGORIES_FETCH_ONE_SUCCESS:
      return { ...state, category: action.payload };

    case CATEGORIES_POST_SUCCESS:
      return { ...state, categories: action.payload };

    case CATEGORIES_DELETE_SUCCESS:
      return { ...state, category: action.payload };
    default:
      return state;
  }
}

export default categoriesReducer;
