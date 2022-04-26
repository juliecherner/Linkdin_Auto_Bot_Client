import React from "react";
import Button from "@mui/material/Button";
import { scrapeProfiles } from "../../../../api/crawler.api";

const StrategyButtons: React.FC = () => {
  return (
    <Button variant="outlined" color="success" onClick={() => scrapeProfiles()}>
      Scrape now
    </Button>
  );
};

export default StrategyButtons;
