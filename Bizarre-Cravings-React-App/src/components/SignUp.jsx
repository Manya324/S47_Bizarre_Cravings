import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SignUp() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/loginUser", {
        username,
        password,
      });
      if (res.data && res.data.token) {
        document.cookie = `${username}=${res.data.token};path=/;`;
        navigate("/data");
      } else {
        console.log("No token returned from server");
        alert("Invalid Username or Password");
      }
    } catch (error) {
      alert("Invalid Username or Password");
    }
  };

  return (
    <div className="login-form">
      <form className="login" onSubmit={handleSubmit}>
        <h1 className="login">Login</h1>
        <br />
        <div className="main-box">
          <div className="label">
            <label htmlFor="password">Username:</label>
            <label htmlFor="password">Password:</label>
          </div>
          <div className="input">
            <input
              className="inp"
              id="username"
              type="text"
              value={username}
              placeholder="Enter your username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              className="inp"
              value={password}
              id="password"
              type="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <button
          style={{
            width: "30%",
            height: "40px",
            borderRadius: " 5px 15px",
            marginLeft: "35%",
            marginTop: "10px",
          }}
        >
          Login
        </button>

      </form>
    </div>
  );
}

export default SignUp;
