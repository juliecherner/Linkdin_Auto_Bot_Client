import React, { useContext } from "react";
import { UserContext } from "../../../../context/user.context";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const LoginForm: React.FC = () => {
  const { userInputs, userDispatch } = useContext(UserContext);
  console.log("user inputs", userInputs);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const action = { name: e.target.name, payload: e.target.value };
    userDispatch(action);
  };

  return (
    <div className="w-4/5 mx-auto	mt-40 flex flex-col gap-4">
      <TextField placeholder="e-mail" name="email" onChange={handleChange} />
      <TextField
        placeholder="password"
        name="password"
        onChange={handleChange}
      />
      <Button variant="contained" color="success">
        Log in
      </Button>
    </div>
  );
};

export default LoginForm;
