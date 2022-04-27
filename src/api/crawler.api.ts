import { AxiosError } from "axios";
import ApiHeader from "./Api";
import { authHeader } from "./auth.api";

export const scrapeProfiles = async (): Promise<void> => {
  try {
    const { data } = await ApiHeader.post("api/crawler", {}, authHeader());
    return data;
  } catch (error: any | AxiosError) {
    throw error;
  }
};
