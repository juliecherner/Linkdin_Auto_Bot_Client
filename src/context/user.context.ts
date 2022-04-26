import { createContext } from "react";
import { User, DispatchUserAction } from "../types/types";

type UserContent = {
  userInputs: User;
  userDispatch: (action: DispatchUserAction) => void;
};

export const UserContext = createContext<UserContent>({
  userInputs: {
    password: "",
    name: "",
    logged: "",
  },
  userDispatch: () => {},
});
