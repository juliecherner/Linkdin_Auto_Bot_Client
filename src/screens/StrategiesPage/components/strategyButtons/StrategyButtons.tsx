import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

const StrategyButtons: React.FC = () => {
  return (
    <div>
      <ButtonGroup variant="outlined" aria-label="outlined button group">
        <Button variant="contained" color="success">
          Save changes
        </Button>
        <Button variant="outlined" color="error">
          Scrape now
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default StrategyButtons;
