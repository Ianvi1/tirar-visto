import React from "react";
import SocialLinks from "./SocialLinks";
import FooterLinks from "./FooterLinks";
import Newsletter from "./NewsLetter";

const FooterSection: React.FC = () => {
  return (
    <footer className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Parte da Esquerda */}
          <div>
            <h2 className="text-3xl sm:text-[56px] font-medium text-[#232323] mb-4">
              Está com alguma <br /> dúvida?
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Entre em contato através do nosso canal direto ao cliente <br />
              através do botão abaixo
            </p>
            <a
              href=""
              className="inline-flex items-center justify-center mt-5 border bg-[#232323] text-white text-base px-6 py-3 rounded-full hover:bg-white hover:text-[#232323] hover:border-[#232323] transition"
            >
              Central de Atendimento
            </a>

            <div className="mt-8">
              <h3 className="text-lg font-semibold text-[#232323] mb-4">
                Siga em nossas redes:
              </h3>
              <SocialLinks />
            </div>
          </div>

          {/* Parte da Direita */}
          <div>
            <Newsletter />
            <FooterLinks />
          </div>
        </div>
      </div>

      <hr className="border-t border-gray-200 w-full my-8" />

      <div className="text-center text-[#232323] text-sm">
        © 2025 Tirar Visto - Todos os Direitos Reservados
      </div>
    </footer>
  );
};

export default FooterSection;
