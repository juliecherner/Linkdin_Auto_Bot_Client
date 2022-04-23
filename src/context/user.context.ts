import { createContext } from "react";
import { I_User, I_DispatchUserAction } from "../types/types";

type UserContent = {
  userInputs: I_User;
  userDispatch: (action: I_DispatchUserAction) => void;
};

export const UserContext = createContext<UserContent>({
  userInputs: {
    password: "",
    name: ""
  },
  userDispatch: () => {},
});
