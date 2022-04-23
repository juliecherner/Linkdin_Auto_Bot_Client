import { AxiosError } from "axios";
import { I_Profile } from "../types/types";
import { printHTTPErrors } from "../utils/fetch.utils";
import ApiHeader from "./Api"



export const getProfiles = async (
  filter: object = {}, // by field: { isStared: true }
  sortBy: object = {}, // by field: { createdAt: -1 } (1 = ascending, -1 = descending)
): Promise<I_Profile[]> => {
  try {
    const { data } = await ApiHeader.post('api/profile/profiles', { filter, sortBy });
    return data;
  } catch (error: any | AxiosError) {
    printHTTPErrors(error);

    throw error;
  }
};


export const updateProfile = async (profileUpdate: I_Profile): Promise<I_Profile[]> => {
  try {
    return await ApiHeader.put("api/profile/profile", profileUpdated);
  } catch (error) {
    console.log(error);

    throw error;
  }
};


export const deleteItem = async (profileId: string): Promise<I_Profile[]> => {
  try {
    return await ApiHeader.delete(`api/profile/profile/${profileId}`);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

