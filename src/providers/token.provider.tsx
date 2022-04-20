import { useState } from "react";
import { TokenContext } from "../context/token.context";
import { I_Token } from "../types/types";

const initialState: I_Token = "";

const TokenProvider: React.FC = ({ children }) => {
  const [token, setToken] = useState<I_Token>(initialState);

  return (
    <TokenContext.Provider value={{ token, setToken }}>
      {children}
    </TokenContext.Provider>
  );
};

export default TokenProvider;
