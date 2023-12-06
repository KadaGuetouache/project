import React from "react";
import AuthLayout from "../components/AuthLayout";
import { Link } from "react-router-dom";
import "../styles/login.scss";
import "../styles/components.scss";

const LogIn = () => {
  return (
    <AuthLayout>
      <div className="login-container">
        <div className="content">
          <h2>Log In</h2>
          <form>
            <div className="field-container">
              <label htmlFor="userName">User Name</label>
              <input type="text" name="userName" placeholder="Username" />
            </div>
            <div className="field-container">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="Password" />
            </div>
            <button type="submit">Login</button>
            <a href="#">Do not remember your password</a>
            <Link to="/register">Create an Account</Link>
          </form>
        </div>
      </div>
    </AuthLayout>
  );
};

export default LogIn;
