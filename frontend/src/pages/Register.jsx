import React from "react";
import styles from "./Design.module.css";
import { Link } from "react-router-dom";

// 37.30

function Register() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Formed");
  };

  const handleChange = (e) => {};

  return (
    <div className={styles.divForm}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className={styles.brand}>
          <img
            src="https://logos.textgiraffe.com/logos/logo-name/Lokesh-designstyle-candy-m.png"
            alt=""
          />

          <h1>ChatApp</h1>
        </div>
        <input
          type="text"
          placeholder="Enter Username"
          name="username"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="email"
          placeholder="Enter Email"
          name="email"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="password"
          placeholder="Enter password"
          name="password"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="password"
          placeholder="Enter Confirm Password"
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
