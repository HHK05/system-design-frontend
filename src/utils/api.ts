import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL
});

export const registerUser = (data: { username: string; email: string; password: string }) =>
  API.post("/auth/register", data);

export const loginUser = (data: { email: string; password: string }) =>
  API.post("/auth/login", data);
