import React, { useState } from "react";
import Logo from "../../assets/Logo.png";
import { Menu, X } from "lucide-react";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4 md:px-0">
        <div className="flex items-center space-x-12">
          <img src={Logo} alt="Tirar Visto" className="h-10" />
        </div>

        {/* Navegação desktop */}
        <nav className="hidden md:flex space-x-8 font-medium">
          <NavLinks />
        </nav>

        {/* Hamburger pra Mobile */}
        <button
          className="md:hidden text-[#232323] focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menu mobile */}
      {isOpen && <MobileMenu />}
    </header>
  );
};

export default Header;
