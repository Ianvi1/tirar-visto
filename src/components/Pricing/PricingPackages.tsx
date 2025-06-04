import React from "react";
import { packages } from "../../data/packagesData";
import ButtonLink from "../Elements/ButtonLink";
import SecondaryButtonLink from "../Elements/SecondaryButtonLink";
import PlayButton from "../Elements/PlayButtonLink";

const PricingPackages: React.FC = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <ButtonLink href="">Pacotes</ButtonLink>

        <h1 className="text-xl sm:text-4xl md:text-[56px] font-medium text-[#232323] mb-4 text-center md:text-left">
          Confira nossos pacotes
        </h1>

        <div className="flex justify-center md:justify-start md:relative md:bottom-16 flex-row-reverse space-x-3 mb-6">
          <PlayButton />
          <PlayButton>←</PlayButton>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl overflow-hidden transition duration-300"
            >
              <div className="p-6">
                <img
                  src={pkg.image}
                  alt={pkg.subtitle}
                  className="w-full h-auto rounded-lg mb-4"
                />

                <a
                  href="#basic"
                  className="mr-5 inline-flex items-center justify-center mt-5 border bg-[#fff] text-[#232323] text-[16px] px-6 py-3 rounded-full hover:bg-[#232323] hover:text-[#fff] hover:border-[#fff] transition w-[82px] h-[32px]"
                >
                  Basic
                </a>
                <a
                  href="#premium"
                  className="inline-flex items-center justify-center mt-5 mb-5 border bg-[#fff] text-[#232323] text-[16px] px-6 py-3 rounded-full hover:bg-[#232323] hover:text-[#fff] hover:border-[#fff] transition w-[109px] h-[32px]"
                >
                  Premium
                </a>

                <h4 className="text-lg text-[28px] font-semibold text-[#232323] not-last:mb-4">
                  {pkg.subtitle}
                </h4>

                {/* Features*/}
                <div className="flex justify-between mb-6">
                  {pkg.features.map((feature, i) => (
                    <div key={i} className="flex flex-col">
                      <span className="text-gray-600">{feature.label}</span>
                      <span className="font-normal text-[#8D8D8D]">
                        {feature.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Linha divisória*/}
                <div className="border-t border-gray-200 mb-6"></div>

                {/* Preço e botão */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">A partir de</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {pkg.price}
                    </p>
                  </div>

                  <SecondaryButtonLink href="#">{pkg.cta}</SecondaryButtonLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPackages;
