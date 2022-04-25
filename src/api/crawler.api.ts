import { AxiosError } from "axios";
import ApiHeader from "./Api";
import { printHTTPErrors } from "../utils/fetch.utils";

export const getProfiles = async (): Promise<void> => {
  try {
    const { data } = await ApiHeader.post("api/crawler/crawler");
    return data;
  } catch (error: any | AxiosError) {
    printHTTPErrors(error);
    throw error;
  }
};
