import ApiHeader from "./Api";
import { authHeader } from "./auth.api";

export const scrapeProfiles = async (): Promise<void> => {
  try {
    await ApiHeader.post("api/crawler", {}, authHeader());
  } catch (error) {
    console.log(error);
  }
};
