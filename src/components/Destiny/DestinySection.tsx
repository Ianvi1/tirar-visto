import React from "react";
import { images } from "../../data/imagesData";
import ButtonLink from "./../Elements/ButtonLink";
import SecondaryButtonLink from "../Elements/SecondaryButtonLink";

const DestinySection: React.FC = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      {/* Textos */}
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <ButtonLink href="">Top Destinos</ButtonLink>
          <h1 className="text-xl sm:text-[56px] font-medium text-[56px] text-[#232323] mb-4">
            Destinos mais procurados
          </h1>
          <div className="max-w-2xl mx-auto">
            <p className="text-gray-600 mb-6">
              Confira os destinos mais procurados por nossos clientes nos
              últimos meses, <br />
              qual seria o seu novo destino?
            </p>
            <SecondaryButtonLink href="#">Conheça mais</SecondaryButtonLink>
          </div>
        </div>

        {/* Grid das imagens 3x2 */}
        <div className="grid grid-cols-3 grid-rows-2 gap-4 justify-items-center">
          {images.map((img, index) => (
            <img
              key={index}
              src={img.src}
              alt={img.alt}
              className={`w-[280px] ${
                img.destaque ? "h-[280px]" : "h-[240px] self-start"
              } rounded-3xl object-cover transition-transform duration-300`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DestinySection;
