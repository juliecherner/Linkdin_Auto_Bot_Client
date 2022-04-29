import { createContext } from "react";
import { Search } from "../types/types";

type SearchContent = {
  searchWords: Search[] | [];
  setSearchWords: (searchWords: Search[]) => void;
  newSearchWord: Search;
  setNewSearchWord: (newSearchWord: Search) => void;
};

export const SearchContext = createContext<SearchContent>({
  searchWords: [],
  setSearchWords: () => null,
  newSearchWord: { searchWord: "" },
  setNewSearchWord: () => null,
});
