import React from "react";

import { Link } from "react-router-dom";

function Register() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Formed");
  };

  const handleChange = (e) => {};

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="brand">
          <img src="" alt="" />
          <h1>Lokesh ChatApp</h1>
        </div>
        <input
          type="text"
          placeholder="username"
          name="username"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="email"
          placeholder="email"
          name="email"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          name="ConfirmPassword"
          onChange={(e) => handleChange(e)}
        />
        <button type="submit">Create User</button>
        <span>
          Already have an account ? <Link to="/login">Login</Link>{" "}
        </span>
      </form>
    </div>
  );
}

export default Register;
