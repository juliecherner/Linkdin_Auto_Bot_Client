import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../../context/user.context";
import { ProfileContext } from "../../../../context/profile.context";
import { login } from "../../../../api/auth.api";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { clearCookies } from "../../../../api/cookies";

const LoginForm: React.FC = () => {
  const { setProfiles } = useContext(ProfileContext);
  const { userInputs, userDispatch } = useContext(UserContext);
  const navigate = useNavigate();

  const setUserInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const action = { name: e.target.name, payload: e.target.value };
    userDispatch(action);
  };

  const clearUserInfo = () => {
    userDispatch({ name: "name", payload: "" });
    userDispatch({ name: "password", payload: "" });
  };

  const loginUser = async (): Promise<void> => {
    const userAndToken = await login(userInputs);
    if (userAndToken) {
      navigate("/");
    }
  };

  const logoutUser = (): void => {
    clearCookies();
    clearUserInfo();
    setProfiles([]); //causes re-render
    navigate("/");
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
      <Button variant="contained" color="success" onClick={loginUser}>
        Log in
      </Button>
      <Button variant="outlined" color="success" onClick={logoutUser}>
        Log out
      </Button>
    </div>
  );
};

export default LoginForm;
