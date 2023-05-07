import { AUTH, FETCH_USERS, LOGOUT } from "../constants/actionTypes";

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
    default:
      return state;
  }
};

export default authReducer;
