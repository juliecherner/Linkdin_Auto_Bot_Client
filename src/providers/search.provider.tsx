import { useState } from "react";
import { SearchContext } from "../context/search.context";
import { Search } from "../types/types";

const SearchProvider: React.FC = ({ children }) => {
  const [searchWords, setSearchWords] = useState<Search[]>([]);
  const [newSearchWord, setNewSearchWord] = useState<Search>({
    searchWord: "",
  });

  return (
    <SearchContext.Provider
      value={{ searchWords, setSearchWords, newSearchWord, setNewSearchWord }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
