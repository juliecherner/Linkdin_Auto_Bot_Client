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
    <div className="strategy-page-description">
      {strategyDescription.map((strategy: I_StrategyDescription) => {
        return (
          <div className="strategy-page-description-block" key={strategy.name}>
            <div className="strategy-page-description-block-title">
              {strategy.name}
            </div>
            <div>{strategy.description}</div>
          </div>
        );
      })}
    </div>
  );
};

export default StrategyDescription;
