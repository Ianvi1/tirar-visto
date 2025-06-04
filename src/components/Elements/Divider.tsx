import React from "react";

interface DividerProps {
  width?: string;
  marginTop?: string;
  marginBottom?: string;
  className?: string;
}

const Divider: React.FC<DividerProps> = ({
  width = "w-3/4",
  marginTop = "mt-4",
  marginBottom = "mb-6",
  className = "",
}) => {
  return (
    <hr
      className={`${width} ${marginTop} ${marginBottom} border border-[#DADADA] ${className}`}
    />
  );
};

export default Divider;
