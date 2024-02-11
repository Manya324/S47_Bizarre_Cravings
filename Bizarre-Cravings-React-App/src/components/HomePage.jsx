import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="main">
      <div className="h1">
        <h1>Welcome to Bizarre Cravings!</h1>
      </div>
      <div className="info">
        <p>
          Have you ever wondered what the strangest things people actually eat
          around the world? <br /> You're not alone! Bizarre Cravings is your
          one-stop for exploring the wacky, <br /> wonderful, and downright
          bizarre things humans have chosen to put on their plates.
        </p>
      </div>
      <div className="start">
        <Link to={"/login"}>
          <button className="btn">Let's Go 🚀</button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
