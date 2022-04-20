import { useReducer } from "react";
import { UserContext } from "../context/user.context";
import { I_User } from "../types/types";

interface Action {
  name: string;
  payload: string;
}

const initialState: I_User = {
  name: "",
  password: "",
};

const reducer = (state: I_User = initialState, action: Action) => {
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
