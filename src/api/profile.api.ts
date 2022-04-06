import { AxiosError } from "axios";
import { I_Profile } from "../types/types";
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
}

export const updateProfile = async (profileUpdate: I_Profile): Promise<I_Profile[]> => {
  try {
    return await ApiHeader.put('api/profile/profile', {
      profileUpdate
    });
  } catch (error: any | AxiosError) {
    printHTTPErrors(error);
    throw error;
  }
}

export const deleteItem = async (profileId: string): Promise<I_Profile[]> => {
  try {
    return await ApiHeader.delete('api/profile/profile', { params: { profileId } });
  } catch (error: any | AxiosError) {
    printHTTPErrors(error);
    throw error;
  }
}




function printHTTPErrors(err: Error | AxiosError) {
  const error = err as AxiosError
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
  } else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    console.log(error.request);
  } else {
    // Something happened in setting up the request that triggered an Error
    console.log('Error', error.message);
  }
  console.log(error.config);
};


