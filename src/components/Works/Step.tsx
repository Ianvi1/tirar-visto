import React from "react";
import type { StepProps } from "../../types/steps";

const Step: React.FC<StepProps> = ({ title, description, linkText }) => (
  <div>
    <h2 className="font-medium text-2xl sm:text-3xl md:text-[36px] text-gray-900 mb-2">
      {title}
    </h2>

    {description && (
      <p className="text-[#8D8D8D] font-normal text-base">{description}</p>
    )}

    {linkText && (
      <a href="#" className="text-[#232323] font-medium hover:underline">
        {linkText}
      </a>
    )}

    <hr className="w-full mt-5 border border-[#DADADA]" />
  </div>
);

export default Step;
