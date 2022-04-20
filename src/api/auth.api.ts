import { I_User, I_Token, I_AuthHeader } from "../types/types";
import ApiHeader from "./Api";
import { setCookies, getTokenFromCookies } from "./cookies";

export const authHeader = (): I_AuthHeader => {
  const token = getTokenFromCookies();
  return {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
};

export const login = async (user: I_User) => {
  try {
    const { data } = await ApiHeader.post("api/user/login", user);
    const token: I_Token = data.token;
    setCookies(token);
    return data;
  } catch (error) {
    console.log(error);
  }
};
