import { Token } from "../types/types";

export const setCookies = (token: Token): void => {
  document.cookie = "token=" + token;
};

export const getTokenFromCookies = (): Token => {
  return document.cookie.slice(6);
};

export const clearCookies = (): void => {
  document.cookie = "token=";
};
