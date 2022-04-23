import { useState } from "react";
import { SearchContext } from "../context/search.context";
import { I_Search } from "../types/types";

const SearchProvider: React.FC = ({ children }) => {
  const [searchWords, setSearchWords] = useState<I_Search[]>([]);
  const [newSearchWord, setNewSearchWord] = useState<I_Search>({
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
