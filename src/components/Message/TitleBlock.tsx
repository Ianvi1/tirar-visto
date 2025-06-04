import React from "react";
import type { TitleBlockProps } from "../../types/titles";

const TitleBlock: React.FC<TitleBlockProps> = ({
  title,
  imageSrc,
  imageAlt,
  imageClasses,
  titleClasses = "",
  textAlign,
  italic = false,
  relative = false,
}) => {
  const baseItemsAlign = `items-${textAlign}`;
  const containerClasses = `flex flex-col ${baseItemsAlign} text-center md:text-center lg:text-${textAlign} ${
    relative ? "relative" : ""
  } lg:w-1/2`;

  const titleStyles = `text-2xl sm:text-3xl md:text-4xl lg:text-[56px] font-medium ${
    italic ? "italic" : ""
  } text-gray-900 leading-tight ${titleClasses}`;

  return (
    <div className={containerClasses}>
      {textAlign === "left" ? (
        <>
          <h1 className={titleStyles}>{title}</h1>
          <img className={imageClasses} src={imageSrc} alt={imageAlt} />
        </>
      ) : (
        <>
          <img className={imageClasses} src={imageSrc} alt={imageAlt} />
          <h1 className={`${titleStyles} mt-12 sm:mt-16 md:mt-20 lg:mt-8`}>
            {title}
          </h1>
        </>
      )}
    </div>
  );
};

export default TitleBlock;
