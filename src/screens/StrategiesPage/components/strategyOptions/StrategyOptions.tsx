import React, { useContext, useEffect } from "react";
import { I_Search } from "../../../../types/types";
import { SearchContext } from "../../../../context/search.context";
import {
  getSearchWords,
  addSearchWord,
  deleteSearchWord,
} from "../../../../api/search.api";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";

const StrategyOptions: React.FC = () => {
  const { searchWords, setSearchWords } = useContext(SearchContext);

  const getAllSearchWords = async () => {
    const allWords = await getSearchWords();
    setSearchWords(allWords);
  };

  useEffect(() => {
    getAllSearchWords();
  }, []);

  const deleteById = async (id: string | undefined) => {
    console.log("id", id);
    //const deletedWord = await deleteSearchWord(id);
    //getAllSearchWords();

    // console.log("deletedWord", deletedWord);
  };
  //   const deleteById = async (id: string) => {
  //     console.log("id of deleted strategy", id);
  //   };

  //   const addWord = async () => {
  //     console.log("added new word");
  //   };

  return (
    <div className="flex flex-col gap-2 w-8/12 ">
      <div className="text-2xl">Search by</div>
      {searchWords.map((searchWord: I_Search) => (
        <div
          key={searchWord._id}
          className="flex flex-row place-content-between"
        >
          <div>
            <CheckBoxOutlinedIcon />
            {searchWord.searchWord}
          </div>
          <div>
            <IconButton
              aria-label="delete"
              size="small"
              onClick={() => deleteById(searchWord._id)}
            >
              <ClearIcon fontSize="inherit" />
            </IconButton>
          </div>
        </div>
      ))}
      <div className="flex flex-row gap-1">
        <div>
          <AddCircleOutlineOutlinedIcon color="primary" />
        </div>
        <input placeholder="Add new search word" />
      </div>
    </div>
  );
};

export default StrategyOptions;
