import { useState } from "react";
import { registerUser } from "../utils/api";

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // 🚀 prevent page reload
    setLoading(true);
    setMessage("");

    try {
      const res = await registerUser(formData);
      setMessage(`✅ Registered successfully: ${JSON.stringify(res.data)}`);
    } catch (error: any) {
      setMessage(
        `❌ Error: ${error.response?.data?.error || error.message}`
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>Create account</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Username"
        />
        <br />
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <br />
        <input
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <br />
        <button type="submit" disabled={loading}>
          {loading ? "Registering..." : "Register"}
        </button>
      </form>

      {message && <p style={{ marginTop: 20 }}>{message}</p>}
    </div>
  );
}

export default Register;
