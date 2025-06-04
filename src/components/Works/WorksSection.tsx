import React from "react";
import WorksImage from "../../assets/WorksImage.png";
import ButtonLink from "../Elements/ButtonLink";
import Step from "./Step";

const WorksSection: React.FC = () => {
  return (
    <section
      id="works"
      className="relative w-full py-12 md:py-24 mt-20 bg-white overflow-visible"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col items-start space-y-4 mb-16">
          <ButtonLink href="">Veja como funciona</ButtonLink>

          <div className="flex flex-col md:flex-row md:items-start md:space-x-8 w-full">
            <h1 className="font-medium text-3xl sm:text-4xl md:text-[56px] text-gray-900 leading-tight">
              Sua tranquilidade <br /> não tem preço!
            </h1>

            <p className="text-[#8D8D8D] lg:ml-15 lg:mt-5 font-normal text-base w-full md:flex-1 mt-4 md:mt-0">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row gap-6 md:gap-8 items-center">
          <div className="w-full md:w-1/2">
            <img
              src={WorksImage}
              alt="Como funciona"
              className="w-full h-auto md:h-[444px] object-cover rounded-3xl"
            />
          </div>

          <div className="w-full md:w-1/2 flex flex-col justify-between space-y-8">
            <Step
              title="Etapa Inicial"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />

            <Step title="Processo de Entrevista" linkText="+ Leia mais" />

            <Step title="Entrega de Documentos" linkText="+ Leia mais" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorksSection;
