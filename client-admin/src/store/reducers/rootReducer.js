import {
  ADMIN_LOGIN_SUCCESS,
  ADMIN_LOGOUT_SUCCESS,
  LOADING_START,
  LOADING_STOP,
} from "../actions/actionTypes";

const initialState = {
  isLogin: false,
  isLoading: true,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADMIN_LOGIN_SUCCESS:
      return { ...state, isLogin: action.payload };
    case ADMIN_LOGOUT_SUCCESS:
      return { ...state, isLogin: action.payload };
    case LOADING_START:
      return { ...state, isLoading: true };
    case LOADING_STOP:
      return { ...state, isLoading: false };
    default:
      return state;
  }
}

export default rootReducer;
