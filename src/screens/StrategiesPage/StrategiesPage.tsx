import React from "react";
import StrategyButtons from "./components/strategyButtons/StrategyButtons";
import StrategyDescription from "./components/strategyDescription/StrategyDescription";
import StrategyOptions from "./components/strategyOptions/StrategyOptions";
import "./strategy-page.css";

const StrategiesPage: React.FC = () => {
  return (
    <div className="strategy-page">
      <StrategyOptions />
      <StrategyDescription />
      <StrategyButtons />
    </div>
  );
};
export default StrategiesPage;
