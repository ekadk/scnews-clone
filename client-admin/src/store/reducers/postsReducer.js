import {
  POST_DELETE_SUCCESS,
  POST_FETCH_ALL_SUCCESS,
  POST_FETCH_ONE_SUCCESS,
  POST_POST_SUCCESS,
  POST_PUT_SUCCESS,
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
    case POST_POST_SUCCESS:
      return { ...state, posts: action.payload };
    case POST_PUT_SUCCESS:
      return { ...state, posts: action.payload };
    case POST_DELETE_SUCCESS:
      return { ...state, posts: action.payload };
    default:
      return state;
  }
}

export default postReducer;
