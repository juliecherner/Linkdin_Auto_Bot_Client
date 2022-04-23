import ApiHeader from "./Api";
import { authHeader } from "./auth.api";
import { I_Search } from "../types/types";

export const getSearchWords = async (): Promise<I_Search[]> => {
  try {
    const { data } = await ApiHeader.get("api/search/all", authHeader());
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const addSearchWord = async (
  newSearchWord: I_Search
): Promise<I_Search> => {
  try {
    return await ApiHeader.post("api/search", newSearchWord, authHeader());
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deleteSearchWord = async (
  id: string | undefined
): Promise<I_Search> => {
  try {
    return await ApiHeader.delete(`api/search/${id}`, authHeader());
  } catch (error) {
    console.error(error);
    throw error;
  }
};
