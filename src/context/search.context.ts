import {createContext} from "react";
import { I_Checkbox } from "../types/types";

interface ActionSearchReducer {
    name: string;
    payload: boolean;
  }

type SearchContent = {
 checkboxInputs: I_Checkbox[] | []
 checkboxDispatch: (action: ActionSearchReducer) => void
}

export const SearchContext = createContext<SearchContent>({
    checkboxInputs: [],
    checkboxDispatch: (action: ActionSearchReducer) => {}
})