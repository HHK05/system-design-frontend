import axios from "axios";

const API = axios.create({
  baseURL: "https://system-design-backend-13is.onrender.com/"
});

export const getQuestions = () => API.get("/questions");
