import { useState } from "react";
import { SearchContext } from "../context/search.context";
import { I_Search } from "../types/types";

const SearchProvider: React.FC = ({ children }) => {
  // interface Action {
  //   name: string;
  //   payload: boolean;
  // }

  // //get initial state from mongo
  // const initialState = [
  //   { checked: true, searchFor: "ceo" },
  //   { checked: true, searchFor: "cto" },
  //   { checked: true, searchFor: "founder" },
  //   { checked: true, searchFor: "co-founder" },
  //   { checked: true, searchFor: "stealth" },
  // ];

  // const changeStateByClick = (
  //   defaultState: I_Checkbox[],
  //   searchWord: string,
  //   payload: boolean
  // ): I_Checkbox[] => {
  //   let updatedCheckboxes: I_Checkbox[] = [];
  //   defaultState.forEach((object: I_Checkbox) => {
  //     if (object.searchFor !== searchWord) {
  //       updatedCheckboxes.push(object);
  //     } else {
  //       object.checked = !payload;
  //       updatedCheckboxes.push(object);
  //     }
  //   });
  //   return updatedCheckboxes;
  // };

  // const reducer = (state: I_Checkbox[] = initialState, action: Action) => {
  //   const { name, payload } = action;
  //   switch (name) {
  //     case "ceo":
  //       const updatedState = changeStateByClick(state, name, payload);
  //       return updatedState;
  //     case "cto":
  //       const updatedState2 = changeStateByClick(state, name, payload);
  //       return updatedState2;
  //     case "founder":
  //       const updatedState3 = changeStateByClick(state, name, payload);
  //       return updatedState3;
  //     case "co-founder":
  //       const updatedState4 = changeStateByClick(state, name, payload);
  //       return updatedState4;
  //     default:
  //       return state;
  //   }
  // };

  // const [checkboxInputs, checkboxDispatch] = useReducer(reducer, initialState);

  const [searchWords, setSearchWords] = useState<I_Search[]>([]);

  return (
    <SearchContext.Provider value={{ searchWords, setSearchWords }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
