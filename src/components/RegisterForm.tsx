import { useState } from "react";
import { registerUser } from "../utils/api";

export default function RegisterForm() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await registerUser(form);
      setMessage(res.data.message);
    } catch (err: any) {
      setMessage(err.response?.data?.error || "Error registering");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-900 text-white p-6 rounded-lg w-96">
      <h2 className="text-xl mb-4">Create New Account</h2>

      <input
        type="text"
        name="username"
        placeholder="Username"
        value={form.username}
        onChange={handleChange}
        className="w-full p-2 mb-3 rounded bg-gray-800"
      />
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={form.email}
        onChange={handleChange}
        className="w-full p-2 mb-3 rounded bg-gray-800"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
        className="w-full p-2 mb-3 rounded bg-gray-800"
      />

      <button type="submit" className="w-full bg-blue-500 py-2 rounded mb-3">
        Create Account
      </button>
      <button type="button" className="w-full bg-purple-500 py-2 rounded">
        Back to Login
      </button>

      {message && <p className="mt-3 text-center">{message}</p>}
    </form>
  );
}
