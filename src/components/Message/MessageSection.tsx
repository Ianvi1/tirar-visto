import React from "react";
import Clock from "../../assets/Clockimg.png";
import Phone from "../../assets/PhoneImg.png";
import TitleBlock from "./TitleBlock";

const MessageSection: React.FC = () => {
  return (
    <section className="bg-[#F7F7F7] overflow-hidden py-12 px-4 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:items-center space-y-8 md:space-y-12 lg:flex-row lg:justify-between lg:space-y-0 lg:items-center">
          <TitleBlock
            title="CONSULTORIA COMPLETA PARA TIRAR SEU VISTO"
            imageSrc={Clock}
            imageAlt="Clock"
            imageClasses="hidden md:block w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-36 lg:h-36 absolute -right-4 sm:-right-8 md:-right-12 bottom-0 lg:top-32"
            titleClasses="lg:w-[854px]"
            textAlign="left"
            italic={false}
            relative
          />

          <TitleBlock
            title="VOCÊ ESTÁ EM BOAS MÃOS!"
            imageSrc={Phone}
            imageAlt="Phone"
            imageClasses="hidden md:block w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-36 lg:h-36"
            textAlign="right"
            italic
          />
        </div>
      </div>
    </section>
  );
};

export default MessageSection;
