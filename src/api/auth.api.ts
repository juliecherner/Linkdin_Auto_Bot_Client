import { User, Token, AuthHeader } from "../types/types";
import ApiHeader from "./Api";
import { setCookies, getTokenFromCookies } from "./cookies";

export const authHeader = (): AuthHeader => {
  const token = getTokenFromCookies();
  return {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
};

export const login = async (user: User) => {
  try {
    const { data } = await ApiHeader.post("api/user/login", user);
    const token: Token = data.token;
    setCookies(token);
    return data;
  } catch (error) {
    console.log(error);
  }
};
