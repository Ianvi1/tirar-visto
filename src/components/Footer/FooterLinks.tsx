import React from "react";

const footerSections = [
  {
    title: "Empresa",
    links: ["Home", "Quem somos", "Serviços", "Contato"],
  },
  {
    title: "Novidades",
    links: ["Passaporte", "Visto", "Entrevista", "Polícia Federal"],
  },
  {
    title: "Suporte",
    links: ["FAQ", "Contato", "Dúvidas", "Frequentes"],
  },
];

const FooterLinks: React.FC = () => (
  <div className="mt-20 grid grid-cols-3 gap-4 mb-6">
    {footerSections.map(({ title, links }) => (
      <div key={title}>
        <h4 className="font-medium text-[#232323] mb-6">{title}</h4>
        <ul className="space-y-2">
          {links.map((link) => (
            <li key={link}>
              <a
                href="#"
                className="text-[#8d8d8d] hover:text-yellow-500 transition duration-300"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

export default FooterLinks;
