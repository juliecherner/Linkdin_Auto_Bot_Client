import React from "react";

interface I_StrategyDescription {
  name: string;
  description: string;
}

const strategyDescription: I_StrategyDescription[] = [
  { name: "Search frequency", description: "1 time per 2 weeks" },
  { name: "Country", description: "Israel" },
];

const StrategyDescription: React.FC = () => {
  return (
    <div className="flex flex-col gap-10">
      {strategyDescription.map((strategy: I_StrategyDescription) => {
        return (
          <div className="flex flex-col gap-2" key={strategy.name}>
            <div className="font-bold">{strategy.name}</div>
            <div>{strategy.description}</div>
          </div>
        );
      })}
    </div>
  );
};

export default StrategyDescription;
