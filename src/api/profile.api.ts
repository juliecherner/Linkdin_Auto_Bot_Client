import { I_Profile } from "../types/types";
import ApiHeader from "./Api"

export const getProfiles = async (
  filter: string | undefined = undefined,//by field
  sortBy: string | undefined = undefined //stared
): Promise<I_Profile[]> => {
  try {
    const { data } = await ApiHeader.get('api/profile/profiles', {
      params: { filter, sortBy }
    });
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export const updateProfile = async (profileUpdate: I_Profile): Promise<I_Profile[]> => {
  try {
    return await ApiHeader.put('api/profile/profile', {
      profileUpdate
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export const deleteItem = async (profileId: string): Promise<I_Profile[]> => {
  try {
    return await ApiHeader.delete('api/profile/profile', { params: { profileId } });
  } catch (error) {
    console.error(error);
    throw error;
  }
}
