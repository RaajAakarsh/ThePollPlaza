import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== password2) {
      setErrorMessage("Passwords do not match");
      return;
    }

    const userData = {
      first_name: firstName,
      last_name: lastName,
      username: username,
      password: password,
      email: email,
    };
    setIsLoading(true);

    fetch("http://localhost:8000/api/createUser/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        if (response.status === 201) {
          console.log("User registered successfully");
          setIsLoading(false);
          history.push("/login");
        } else if (response.status === 400) {
          response.json().then((data) => {
            if (data.email) {
              setErrorMessage("An account already exists with this email");
            } else {
              const errorMessages = Object.values(data).flat().join(", ");
              setErrorMessage(errorMessages);
            }
            setIsLoading(false);
          });
        } else {
          throw new Error("Failed to register user");
        }
      })
      .catch((error) => {
        console.error("Error registering user:", error);
        setIsLoading(false);
      });
  };

  return (
    <div className="createNew">
      <h2>Register</h2>

      {!isLoading && (
        <form action="register" method="post" onSubmit={handleSubmit}>
          <label>First Name:</label>
          <input
            type="text"
            name="first_name"
            value={firstName}
            placeholder="First Name"
            required
            onChange={(e) => setFirstName(e.target.value)}
          />

          <label>Last Name:</label>
          <input
            type="text"
            name="last_name"
            value={lastName}
            placeholder="Last Name"
            required
            onChange={(e) => setLastName(e.target.value)}
          />

          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={username}
            placeholder="Username"
            required
            onChange={(e) => setUsername(e.target.value)}
          />

          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />

          <label>Confirm Password:</label>
          <input
            type="password"
            name="password2"
            value={password2}
            placeholder="Confirm Password"
            required
            onChange={(e) => setPassword2(e.target.value)}
          />

          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <button id="createButton" type="submit">
            Register
          </button>
        </form>
      )}

      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

      <div className="register">
        <p>
          Already have an account? <Link to="/login">Log in!</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
