import { AxiosError } from "axios";
import { I_Profile } from "../types/types";
import { printHTTPErrors } from "../utils/fetch.utils";
import ApiHeader from "./Api";
import { authHeader } from "./auth.api";

export const getProfiles = async (
  filter: object = {}, // by field: { isStared: true }
  sortBy: object = {} // by field: { createdAt: -1 } (1 = ascending, -1 = descending)
): Promise<I_Profile[]> => {
  try {
    const { data } = await ApiHeader.post(
      "api/profile/profiles",
      {
        filter,
        sortBy,
      },
      authHeader()
    );
    return data;
  } catch (error: any | AxiosError) {
    printHTTPErrors(error);

    throw error;
  }
};

export const updateProfile = async (
  profileUpdated: I_Profile
): Promise<I_Profile[]> => {
  try {
    return await ApiHeader.put(
      "api/profile/profile",
      profileUpdated,
      authHeader()
    );
  } catch (error) {
    console.log(error);

    throw error;
  }
};

export const deleteItem = async (profileId: string): Promise<I_Profile[]> => {
  try {
    return await ApiHeader.delete(
      `api/profile/profile/${profileId}`,
      authHeader()
    );
  } catch (error) {
    console.error(error);
    throw error;
  }
};
