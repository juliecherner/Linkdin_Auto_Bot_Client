import axios from "axios";
import { I_Profile } from "../types/types";

const uri = process.env.ENV === "production"
  ? "https://linkdin-auto-bot-back.herokuapp.com/api"
  : "http://localhost:8080/api";
const ApiHeader = axios.create({ baseURL: uri, });

export const getProfiles = async (
  filter: object = {},
  sortBy: object = {}
): Promise<I_Profile[]> => {
  try {
    const { data } = await ApiHeader.get('/profile/profiles', {
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
    return await ApiHeader.put('/profile/profile', {
      profileUpdate
    });
  } catch (error) {
    console.error(error);
    throw error
  }
}

export const deleteItem = async (profileId: string): Promise<I_Profile[]> => {
  try {
    return await ApiHeader.delete('/profile/profile', { params: { profileId } });
  } catch (error) {
    console.error(error);
    throw error
  }
}
