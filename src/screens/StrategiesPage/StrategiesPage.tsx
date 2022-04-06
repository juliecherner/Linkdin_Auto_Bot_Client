import React from "react";
import StrategyButtons from "./components/strategyButtons/StrategyButtons";
import StrategyDescription from "./components/strategyDescription/StrategyDescription";
import StrategyOptions from "./components/strategyOptions/StrategyOptions";

const StrategiesPage: React.FC = () => {
  return (
    <div className="w-11/12 flex flex-col gap-10 pt-16 pl-14">
      <StrategyOptions />
      <StrategyDescription />
      <StrategyButtons />
    </div>
  );
};
export default StrategiesPage;
