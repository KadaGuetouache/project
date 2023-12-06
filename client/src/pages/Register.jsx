import React from "react";
import Layout from "../components/Layout";
import "../styles/register.scss";
import "../styles/components.scss";

const Register = () => {
  return (
    <Layout>
      <div className="register-container">
        <div className="content">
          <h2>Create an account</h2>
          <form>
            <div className="two-column">
              <div className="field-container">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="First Name"
                />
              </div>
              <div className="field-container">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="two-column">
              <div className="field-container">
                <label htmlFor="userName">User Name</label>
                <input
                  type="text"
                  name="userName"
                  id="userName"
                  placeholder="User Name"
                />
              </div>
              <div className="field-container">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="two-column">
              <div className="field-container">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                />
              </div>
              <div className="field-container">
                <label htmlFor="passwordConfirmation">
                  Password Confirmation
                </label>
                <input
                  type="password"
                  name="passwordConfirmation"
                  id="passwordConfirmation"
                  placeholder="Password Confirmation"
                />
              </div>
            </div>
            <div className="form-submit">
              <div className="form-agreement">
                <input type="checkbox" />
                <p>
                  by creating an account!, I consent to the proccessing of my
                  personal data in accordance with
                  <a href="/privacypolicy"> Privacy Policy</a>
                </p>
              </div>
              <button type="submit">Create</button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
