import { Link } from "react-router-dom";
import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="createNew">
      <h2>Login</h2>
      <form>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          placeholder="Username"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button id="createButton" type="submit">
          Login
        </button>
      </form>
      <div className="register">
        <p>
          Don't have an account?
          <Link to="/register"> Sign Up!</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
