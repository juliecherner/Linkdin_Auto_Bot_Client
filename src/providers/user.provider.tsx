import { useReducer } from "react";
import { UserContext } from "../context/user.context";
import { I_User } from "../types/types";

interface I_UserReducerAction {
  name: string;
  payload: string;
}

const initialState: I_User = {
  _id: "",
  name: "",
  password: "",
  logged: "",
};

const reducer = (state: I_User = initialState, action: I_UserReducerAction) => {
  const { name, payload } = action;
  switch (name) {
    case "name":
      return {
        ...state,
        name: payload,
      };
    case "password":
      return {
        ...state,
        password: payload,
      };
    case "logged":
      return {
        ...state,
        logged: payload,
      };
    default:
      return state;
  }
};

const UserProvider: React.FC = ({ children }) => {
  const [userInputs, userDispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{ userInputs, userDispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
