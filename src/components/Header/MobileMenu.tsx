import React from "react";
import NavLinks from "./NavLinks";

const MobileMenu: React.FC = () => {
  return (
    <nav className="md:hidden flex flex-col space-y-4 px-4 pb-4">
      <NavLinks isMobile />
    </nav>
  );
};

export default MobileMenu;
