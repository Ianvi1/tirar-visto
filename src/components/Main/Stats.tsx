import React from "react";

const stats = [
  { value: 509, label: "Vistos Tirados" },
  { value: 602, label: "Passaportes Tirados" },
  { value: 634, label: "Famílias Felizes" },
];

const Stats: React.FC = () => {
  return (
    <div className="relative flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8 mt-8 md:mt-[100px]">
      {stats.map(({ value, label }, idx) => (
        <React.Fragment key={label}>
          <div className="flex flex-col text-center md:text-left">
            <p className="text-[28px] md:text-[44px] font-medium text-[#232323]">
              {value}
            </p>
            <p className="text-sm text-[#8D8D8D]">{label}</p>
          </div>
          {/* Linha divisória só entre os elementos, exceto no último */}
          {idx < stats.length - 1 && (
            <div className="hidden md:block border-l border-[#DADADA] h-24"></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Stats;
