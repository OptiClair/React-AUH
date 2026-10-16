import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

function Register() {
  const [email, setEmail] = useState("");
  const { register } = useAuth();
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    if (!email.trim()) {
      alert("Please enter your email");
      return;
    }

    register(email.trim());
    navigate("/dashboard");
  }

  return (
    <div className="container">
      <h2>Register</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
        <input
          type="tel"
          placeholder="Enter Mobile Number"
          value={mobile}
          onChange={(event) => setMobile(event.target.value)}
          required
        />
        <input
          type="Password"
          placeholder="Enter Confirm Password"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
          required
        />
        <input
          type="Password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
          required
        />
        <input
          type="Password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
          required
        />

        <button type="submit">Create Account</button>
      </form>

      <p>
        Already registered? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

export default Register;