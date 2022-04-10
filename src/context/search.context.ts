import {createContext} from "react";
import { I_Search } from "../types/types";

// interface ActionSearchReducer {
//     name: string;
//     payload: boolean;
//   }

type SearchContent = {
 searchWords: I_Search[] | []
 setSearchWords: (searchWords: I_Search[]) => void
}

export const SearchContext = createContext<SearchContent>({
  searchWords: [],
  setSearchWords: (searchWords: I_Search[]) => {}
})