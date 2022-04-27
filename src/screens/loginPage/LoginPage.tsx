import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "./components/loginForm/LoginForm";
import "./login-page.css";

const LoginPage: React.FC = () => {
  return (
    <div className="login-page">
      <LoginForm />
      <div className="login-page-unassigned">
        <div>For Unassigned Users</div>
        <div className="login-page-unassigned--link">
          <Link to="/about">Contact us</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
