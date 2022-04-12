import { createContext } from "react";
import { I_Search } from "../types/types";

type SearchContent = {
  searchWords: I_Search[] | [];
  setSearchWords: (searchWords: I_Search[]) => void;
  newSearchWord: I_Search;
  setNewSearchWord: (newSearchWord: I_Search) => void;
};

export const SearchContext = createContext<SearchContent>({
  searchWords: [],
  setSearchWords: (searchWords: I_Search[]) => {},
  newSearchWord: { searchWord: "" },
  setNewSearchWord: (newSearchWord: I_Search) => {},
});
