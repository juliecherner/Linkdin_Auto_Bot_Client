import React, { useContext, useState } from "react";
import { I_Checkbox } from "../../../../types/types";
import { SearchContext } from "../../../../context/search.context";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

const StrategyOptions: React.FC = () => {
  const { checkboxInputs, checkboxDispatch } = useContext(SearchContext);

  const handleInput = (checkboxState: boolean, name: string) => {
    const action = { name: name, payload: checkboxState };
    checkboxDispatch(action);
  };
  return (
    <div className="flex flex-col gap-2 w-8/12 ">
      <div className="text-2xl">Search by</div>
      {checkboxInputs.map((checkbox: I_Checkbox) => (
        <div
          key={checkbox.searchFor}
          className="flex flex-row place-content-between"
        >
          <div>
            <input
              type="checkbox"
              checked={checkbox.checked}
              onChange={() => handleInput(checkbox.checked, checkbox.searchFor)}
            />
            <label className="ml-2">{checkbox.searchFor}</label>
          </div>
          <div>
            <IconButton aria-label="delete" size="small">
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
