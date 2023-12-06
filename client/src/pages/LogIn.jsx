import React from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import "../styles/login.scss";

const LogIn = () => {
  return (
    <Layout>
      <div className="login-container">
        <div className="content">
          <h2>Log In</h2>
          <form>
            <input type="text" name="username" placeholder="Username" />
            <input type="password" name="password" placeholder="Password" />
            <button type="submit">Login</button>
            <a href="#">Do not remember your password</a>
            <Link to="/register">Create an Account</Link>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default LogIn;
