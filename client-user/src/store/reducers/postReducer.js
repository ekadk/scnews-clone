import {
  POST_FETCH_ALL_SUCCESS,
  POST_FETCH_ONE_SUCCESS,
} from "../actions/actionTypes";

const initialState = {
  posts: [],
  post: {
    id: "",
    title: "",
    imgUrl: "",
    slug: "",
    content: "",
    createdAt: "",
    updatedAt: "",
    Category: "",
    User: "",
    Tags: "",
    categoryId: "",
  },
};

function postReducer(state = initialState, action) {
  switch (action.type) {
    case POST_FETCH_ALL_SUCCESS:
      return { ...state, posts: action.payload };
    case POST_FETCH_ONE_SUCCESS:
      return { ...state, post: action.payload };
    default:
      return state;
  }
}

export default postReducer;
