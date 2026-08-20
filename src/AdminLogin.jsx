import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "./api";
import "./AdminLogin.css";

import Swal from "sweetalert2";

export default function AdminLogin() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const login = async (e) => {
    e.preventDefault();

    setError("");

    setLoading(true);

    try {
      const res = await api.post("/admin/login", null, {
        params: {
          username,
          password,
        },
      });

      localStorage.setItem("token", res.data.access_token);

      await Swal.fire({
        icon: "success",

        title: "Login Successful",

        timer: 1200,

        showConfirmButton: false,
      });

      navigate("/admin/dashboard");
    } catch (err) {
      setError(err.response?.data?.detail || "Invalid Username or Password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="circle one"></div>

      <div className="circle two"></div>

      <form className="login-card" onSubmit={login}>
        <div className="badge">🔒 Donation Admin Panel</div>

        <h1>Welcome Back</h1>

        <p>Login to manage donations.</p>

        {error && <div className="error-box">{error}</div>}

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <div className="password-box">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <span onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? "🙈" : "👁"}
          </span>
        </div>

        <button className="login-btn" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>

        <div className="footer">Powered by FastAPI & React</div>
      </form>
    </div>
  );
}
