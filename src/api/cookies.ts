import { I_Token } from "../types/types";

export const setCookies = (token: I_Token): void => {
  document.cookie = "token=" + token;
};

export const getTokenFromCookies = (): I_Token => {
  return document.cookie.slice(6);
};

export const clearCookies = (): void => {
  document.cookie = "token=";
};
