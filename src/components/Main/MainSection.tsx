import React from "react";
import MainImage from "../../assets/MainImage.png";
import Stats from "./Stats";
import VideoCard from "./VideoCard";
import SecondaryButtonLink from "../Elements/SecondaryButtonLink";
import Divider from "../Elements/Divider";

const MainSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative w-full py-12 md:py-24 bg-white overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto flex flex-col md:grid md:grid-cols-1 2xl:grid-cols-2 gap-8 items-center px-4 md:px-0">
        {/* Coluna Direita */}
        <div className="relative w-full mb-8 md:mb-0 order-1 2xl:order-2">
          <img
            src={MainImage}
            alt="Roda gigante"
            className="w-full h-[300px] md:h-[500px] lg:h-[700px] xl:h-[900px] object-cover rounded-3xl transition-all duration-500 ease-in-out"
          />
          <a
            href="#"
            className="absolute top-4 right-4 bg-[#FFC107] text-black text-[12px] font-medium px-4 py-2 rounded-full hover:bg-[#e0a800] transition"
          >
            Tirar meu visto agora!
          </a>
          <div className="absolute bottom-10 left-10 text-white space-y-2 max-w-sm">
            <h2 className="text-[20px] md:text-[44px] font-semibold leading-tight">
              Realize o seu sonho com a ajuda da Tirar Visto!
            </h2>
            <p className="text-[14px] md:text-[16px] font-normal leading-relaxed">
              Com um serviço profissional, você não terá dor de cabeça para todo
              o processo do visto e entrevistas no consulado.
            </p>
          </div>
        </div>

        {/* Coluna Esquerda */}
        <div className="relative w-full flex flex-col items-center xl:items-start text-center xl:text-left order-2 2xl:order-1">
          <h1 className="text-[28px] md:text-[36px] lg:text-[44px] xl:text-[54px] leading-snug xl:leading-tight font-medium text-[#232323]">
            Tire seu Visto conosco e não tenha nenhuma surpresa negativa!
          </h1>
          <Divider width="w-[538px]" />

          <div className="relative w-full flex flex-col items-center xl:items-start">
            <p className="text-[#8D8D8D] font-normal text-[14px] xl:text-[16px] leading-relaxed w-full xl:w-[340px]">
              Com uma equipe altamente treinada, nós temos todos os
              procedimentos para que seu processo seja o mais tranquilo e
              rápido. Uma consultoria completa para você e sua família não ter
              nenhuma preocupação na sua viagem.
            </p>

            <VideoCard />

            <SecondaryButtonLink href="#conheca">
              Saiba mais
              <span className="ml-2">→</span>
            </SecondaryButtonLink>
          </div>

          <Stats />
        </div>
      </div>
    </section>
  );
};

export default MainSection;
