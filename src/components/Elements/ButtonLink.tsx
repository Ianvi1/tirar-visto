import React from "react";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

const ButtonLink: React.FC<ButtonLinkProps> = ({
  href,
  children,
  className = "",
}) => {
  return (
    <a
      href={href}
      className={`bg-[#FFC107] text-black text-[12px] font-medium px-4 py-2 rounded-full hover:bg-[#e0a800] transition ${className}`}
    >
      {children}
    </a>
  );
};

export default ButtonLink;
