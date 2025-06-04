import React from "react";

interface PlayButtonProps {
  onClick?: () => void;
  className?: string;
  ariaLabel?: string;
  children?: React.ReactNode;
}

const PlayButton: React.FC<PlayButtonProps> = ({
  onClick,
  className = "",
  ariaLabel = "play",
  children = "→",
}) => {
  return (
    <button
      type="button"
      className={`mt-2 xl:mt-0 w-8 h-8 xl:w-10 xl:h-10 flex items-center justify-center rounded-full border bg-[#232323] border-[#FFF] text-[#FFF] hover:bg-[#FFF] hover:border-[#232323] hover:text-[#232323] transition ${className}`}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default PlayButton;
