import React from "react";

interface SecondaryButtonLinkProps {
  href: string;
  children: React.ReactNode;
}

const SecondaryButtonLink: React.FC<SecondaryButtonLinkProps> = ({
  href,
  children,
}) => {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center mt-5 border bg-[#232323] text-white text-[16px] px-6 py-3 rounded-full hover:bg-[#FFF] hover:text-[#232323] hover:border-[#232323] transition w-[160px]"
    >
      {children}
    </a>
  );
};

export default SecondaryButtonLink;
