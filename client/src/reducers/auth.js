import {
  AUTH,
  FETCH_USERS,
  LOGOUT,
  UPDATE_USER,
  UPDATE_USER_DETAILS,
} from "../constants/actionTypes";

const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case AUTH:
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));

      return { ...state, authData: action?.data };
    case LOGOUT:
      localStorage.clear();

      return { ...state, authData: null };
    case FETCH_USERS:
      return { ...state, users: action.payload };
    case UPDATE_USER:
      return {
        ...state,
        auth:
          state.auth &&
          state.auth.map((user) =>
            user._id === action.payload._id ? action.payload : user
          ),
      };
    case UPDATE_USER_DETAILS:
      return {
        ...state,
        auth:
          state.auth &&
          state.auth.map((user) =>
            user._id === action.payload._id ? action.payload : user
          ),
      };
    default:
      return state;
  }
};

export default authReducer;
