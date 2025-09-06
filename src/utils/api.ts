import axios from "axios";

// Create an axios instance
const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000",
});

// Define the request payload type
export interface RegisterPayload {
  username: string;
  email: string;
  password: string;
}

// Export API methods
export const registerUser = (data: RegisterPayload) => API.post("/auth/register", data);

export default API; // <-- important: so you can import API elsewhere if needed
