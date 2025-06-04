import React from "react";

const socialNetworks = [
  { name: "Instagram", width: 116 },
  { name: "X", width: 52 },
  { name: "Facebook", width: 116 },
  { name: "Youtube", width: 105 },
];

const SocialLinks: React.FC = () => (
  <div className="flex space-x-4">
    {socialNetworks.map(({ name, width }) => (
      <a
        key={name}
        href="#"
        className="inline-flex items-center justify-center mt-5 border bg-white text-[#232323] font-semibold text-base px-6 py-3 rounded-full hover:bg-[#232323] hover:text-white hover:border-white transition"
        style={{ width, height: 40 }}
      >
        {name}
      </a>
    ))}
  </div>
);

export default SocialLinks;
