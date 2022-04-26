import React from "react";

interface StrategyDescriptionInterface {
  name: string;
  description: string;
}

const strategyDescription: StrategyDescriptionInterface[] = [
  { name: "Search frequency", description: "1 time per 2 weeks" },
  { name: "Country", description: "Israel" },
];

const StrategyDescription: React.FC = () => {
  return (
    <div className="strategy-page-description">
      {strategyDescription.map((strategy: StrategyDescriptionInterface) => {
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
