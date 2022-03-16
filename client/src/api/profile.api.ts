import axios from "axios";
import { I_Owner } from "../types/types";

// const uri = process.env.ENV === "production"
//   ? "https://<NAME OF APP>.herokuapp.com/api"
//   : "http://localhost:8080/api";
const uri = "http://localhost:8080/api";
const ApiHeader = axios.create({ baseURL: uri, });

export const getProfiles = async (
  filter: string | undefined = undefined,
  sortBy: string | undefined = undefined
): Promise<I_Owner[]> => {
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

export const updateProfile = async (profileUpdate: I_Owner): Promise<I_Owner[]> => {
  try {
    return await ApiHeader.put('/profile/profile', {
      profileUpdate
    });
  } catch (error) {
    console.error(error);
    throw error
  }
}

export const deleteItem = async (profileId: string): Promise<I_Owner[]> => {
  try {
    return await ApiHeader.delete('/profile/profile', { params: { profileId } });
  } catch (error) {
    console.error(error);
    throw error
  }
}
