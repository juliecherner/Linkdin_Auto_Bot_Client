import React, { useContext } from "react";
import { UserContext } from "../../../../context/user.context";
import { login } from "../../../../api/auth.api";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const LoginForm: React.FC = () => {
  const { userInputs, userDispatch } = useContext(UserContext);

  const setUserInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const action = { name: e.target.name, payload: e.target.value };
    userDispatch(action);
  };

  const loginUser = async (): Promise<void> => {
    const userAndToken = await login(userInputs);
    setToken(userAndToken.token);
  };

  const logoutUser = async (): Promise<void> => {
    setToken("");
    deleteUserInfo();
  };

  const deleteUserInfo = () => {
    userDispatch({ name: "name", payload: "" });
    userDispatch({ name: "password", payload: "" });
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
