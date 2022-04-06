import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "./components/loginForm/LoginForm";

const LoginPage: React.FC = () => {
  return (
    <div>
      <LoginForm />
      <div className="flex flex-col items-center mt-20 gap-2">
        <div>For Unassigned Users</div>
        <div className="font-semibold underline decoration-solid ">
          <Link to="/about">Contact us</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
