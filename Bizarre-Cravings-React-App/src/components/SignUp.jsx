import React from "react";
import { Link } from "react-router-dom";

function SignUp() {
  const cookieData = (name, value) => {
    document.cookie = `${name}=${value};path=/;`;
  };

  return (
    <div className="login-form">
      <form className="login" onSubmit={(e) => e.preventDefault()}>
        <h1 className="login">Login in</h1>
        <br />
        <label htmlFor="name">Name:</label>
        <input
        className="inp"
          id="name"
          type="text"
          placeholder="Enter your name"
          onChange={(e) => cookieData("name", e.target.value)}
        />
        <label htmlFor="email">Email:</label>
        <input
        className="inp"

          id="email"
          type="email"
          placeholder="Enter your email"
          onChange={(e) => cookieData("email", e.target.value)}
        />
        <label htmlFor="password">Username:</label>
        <input
        className="inp"

          id="username"
          type="text"
          placeholder="Enter your username"
          onChange={(e) => cookieData("username", e.target.value)}
        />
        <Link to="/data">
          <button className="update-btn">Login</button>
        </Link>
      </form>
    </div>
  );
}

export default SignUp;
