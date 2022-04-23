import { I_Search } from "../types/types";
import ApiHeader from "./Api";

export const getSearchWords = async (): Promise<I_Search[]> => {
  try {
    const { data } = await ApiHeader.get("api/search/all");
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
    return await ApiHeader.post("api/search", newSearchWord);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deleteSearchWord = async (
  id: string | undefined
): Promise<I_Search> => {
  try {
    return await ApiHeader.delete(`api/search/${id}`);
  } catch (error) {
    console.error(error);
    throw error;
  }
};
