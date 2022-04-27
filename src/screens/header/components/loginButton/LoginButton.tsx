import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../../context/user.context";

const LoginButton: React.FC = () => {
  const { userInputs } = useContext(UserContext);
  return (
    <div className="header--login-button">
      <Link to="/login">
        {userInputs.logged ? `${userInputs.name}` : "Login"}
      </Link>
    </div>
  );
};

export default LoginButton;
