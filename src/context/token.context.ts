import { createContext } from "react";
import { I_Token } from "../types/types";

type TokenContent = {
  token: I_Token;
  setToken: (token: I_Token) => void;
};

export const TokenContext = createContext<TokenContent>({
  token: "",
  setToken: () => {},
});
