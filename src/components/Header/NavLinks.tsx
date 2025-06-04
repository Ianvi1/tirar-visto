import React from "react";

const navLinks = [
  { href: "#home", label: "Home", isBold: true },
  { href: "#quem-somos", label: "Quem somos" },
  { href: "#servicos", label: "Serviços" },
  { href: "#contato", label: "Contato" },
];

interface NavLinksProps {
  isMobile?: boolean;
}

const NavLinks: React.FC<NavLinksProps> = ({ isMobile = false }) => {
  return (
    <>
      {navLinks.map(({ href, label, isBold }) => (
        <a
          key={href}
          href={href}
          className={`text-[#232323] ${
            isBold ? "font-bold" : "hover:text-[#5c5c5c]"
          } ${isMobile ? "block" : "inline-block"} `}
        >
          {label}
        </a>
      ))}
    </>
  );
};

export default NavLinks;
