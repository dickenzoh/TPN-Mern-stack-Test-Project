import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:3008" });

export const signIn = (formData) => API.post("users/signin", formData);
export const signUp = (formData) => API.post("users/signup", formData);

export const getUsers = () => API.get("/users");
export const updateUserRole = (id, updatedUser) =>
  API.patch(`/users/${id}`, updatedUser);
