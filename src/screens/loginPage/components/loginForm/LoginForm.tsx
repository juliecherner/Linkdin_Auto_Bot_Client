import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginError from "../loginError/LoginError";
import { UserContext } from "../../../../context/user.context";
import { ProfileContext } from "../../../../context/profile.context";
import { login } from "../../../../api/auth.api";
import { clearCookies } from "../../../../api/cookies";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const LoginForm: React.FC = () => {
  const { setProfiles } = useContext(ProfileContext);
  const { userInputs, userDispatch } = useContext(UserContext);
  const navigate = useNavigate();
  const [showError, setShowError] = useState(false);

  const setUserInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const action = { name: e.target.name, payload: e.target.value };
    userDispatch(action);
  };

  const clearUserInfo = () => {
    userDispatch({ name: "name", payload: "" });
    userDispatch({ name: "password", payload: "" });
    userDispatch({ name: "logged", payload: "" });
  };

  const markUserAsLogged = () => {
    userDispatch({ name: "logged", payload: "logged" });
  };

  const changeLoginError = (): void => {
    setShowError(true);
  };

  const loginUser = async (): Promise<void> => {
    if (userInputs.name === "" || userInputs.password === "") return;

    const userAndToken = await login(userInputs);
    if (userAndToken) {
      markUserAsLogged();
      navigate("/");
    } else {
      changeLoginError();
    }
    //get peciliar response from server
  };

  const logoutUser = (): void => {
    clearCookies();
    clearUserInfo();
    setProfiles([]); //causes re-render
    navigate("/");
  };

  const loginOrLogout = (): void => {
    userInputs.logged === "logged" ? logoutUser() : loginUser();
  };

  return (
    <div className="login-page-form">
      <TextField
        placeholder="name"
        name="name"
        onChange={setUserInfo}
        value={userInputs.name}
      />
      <TextField
        placeholder="password"
        name="password"
        onChange={setUserInfo}
        value={userInputs.password}
      />
      <Button variant="contained" color="success" onClick={loginOrLogout}>
        {userInputs.logged === "logged" ? "Logout" : "Login"}
      </Button>
      {showError && <LoginError />}
    </div>
  );
};

export default LoginForm;
