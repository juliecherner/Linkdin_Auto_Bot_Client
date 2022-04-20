import { I_User, I_Token, I_AuthHeader } from "../types/types";
import ApiHeader from "./Api";

export const authHeader = (token: I_Token): I_AuthHeader => {
  return {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
};

export const login = async (user: I_User) => {
  try {
    const { data } = await ApiHeader.post("api/user/login", user);
    console.log("result post token ", data.token);
    return data;
  } catch (error) {
    console.log(error);
  }
};
