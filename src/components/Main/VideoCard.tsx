import React from "react";
import SideMainImage from "../../assets/SideMainImage.png";
import PlayButton from "../Elements/PlayButtonLink";

const VideoCard: React.FC = () => {
  return (
    <div className="relative mt-6 mx-auto xl:ml-auto xl:mr-0 w-[191px] md:w-[220px] lg:w-[250px] xl:w-[191px] 2xl:w-[220px] 3xl:w-[250px]">
      <img
        src={SideMainImage}
        alt="Conheça a Bruna"
        className="w-full h-[110px] md:h-[130px] lg:h-[150px] xl:h-[110px] 2xl:h-[130px] 3xl:h-[150px] cursor-pointer rounded-lg object-cover transition-all duration-300 ease-in-out"
      />
      <div className="flex flex-col items-center xl:flex-row xl:items-center xl:justify-between mt-2">
        <div className="text-center xl:text-left">
          <p className="text-xs md:text-[12px] xl:text-[14px] font-semibold text-[#232323]">
            Conheça a Bruna
          </p>
          <a
            href="#"
            className="text-[#8D8D8D] text-[10px] xl:text-[12px] hover:underline"
          >
            Ver vídeo
          </a>
        </div>
        <PlayButton/>
      </div>
    </div>
  );
};

export default VideoCard;
