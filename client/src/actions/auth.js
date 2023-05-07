import { AUTH, FETCH_USERS } from "../constants/actionTypes";
import * as api from "../api/index.js";

export const signIn = (formData, navigate) => async (dispatch) => {
  console.log(formData);
  try {
    const { data } = await api.signIn(formData);
    dispatch({ type: AUTH, data });
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

export const signUp = (formData) => async (dispatch) => {
  console.log(formData);
  try {
    const { data } = await api.signUp(formData);
    console.log(data);

    dispatch({ type: AUTH, data });
  } catch (error) {
    console.log(error);
  }
};

export const getUsers = () => async (dispatch) => {
  try {
    const { data } = await api.getUsers();
    console.log("data");
    console.log(data);

    dispatch({ type: FETCH_USERS, payload: data });
  } catch (error) {
    console.log(error);
  }
};
