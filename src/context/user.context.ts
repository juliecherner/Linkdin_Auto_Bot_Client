import { createContext } from "react";
import { I_User, Action } from "../types/types";

type UserContent = {
  userInputs: I_User;
  userDispatch: (action: Action) => void;
};

export const UserContext = createContext<UserContent>({
  userInputs: {
    password: "",
    email: "",
  },
  userDispatch: () => {},
});
