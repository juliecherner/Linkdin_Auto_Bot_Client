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
  const { searchWords, setSearchWords, newSearchWord, setNewSearchWord } =
    useContext(SearchContext);

  const getAllSearchWords = async () => {
    try {
      const allWords = await getSearchWords();
      setSearchWords(allWords);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllSearchWords();
  }, []);

  const deleteById = async (id: string | undefined) => {
    try {
      await deleteSearchWord(id);
      await getAllSearchWords();
    } catch (error) {
      console.log(error);
    }
  };

  const addWord = async () => {
    if (newSearchWord.searchWord.length > 0) {
      try {
        await addSearchWord(newSearchWord);
        await getAllSearchWords();
      } catch (error) {
        console.log(error);
      }
      setNewSearchWord({ searchWord: "" });
    }
  };

  const changeNewSearchWord = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNewSearchWord({ searchWord: event.target.value });
  };

  return (
    <div className="strategy-page-options">
      <div className="strategy-page-options-title">Search by</div>
      {searchWords.map((searchWord: I_Search) => (
        <div key={searchWord._id} className="strategy-page-options-option">
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
      <div className="strategy-page-options-new-option">
        <div>
          <AddCircleOutlineOutlinedIcon
            color="primary"
            onClick={() => addWord()}
          />
        </div>
        <input
          className="strategy-page-options-new-option--input"
          value={newSearchWord.searchWord}
          placeholder="Add new search word"
          onChange={(event) => changeNewSearchWord(event)}
        />
      </div>
    </div>
  );
};

export default StrategyOptions;
