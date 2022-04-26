import ApiHeader from "./Api";
import { authHeader } from "./auth.api";
import { Search } from "../types/types";

export const getSearchWords = async (): Promise<Search[]> => {
  try {
    const { data } = await ApiHeader.get("api/search/all", authHeader());
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const addSearchWord = async (newSearchWord: Search): Promise<Search> => {
  try {
    return await ApiHeader.post("api/search", newSearchWord, authHeader());
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deleteSearchWord = async (
  id: string | undefined
): Promise<Search> => {
  try {
    return await ApiHeader.delete(`api/search/${id}`, authHeader());
  } catch (error) {
    console.error(error);
    throw error;
  }
};
