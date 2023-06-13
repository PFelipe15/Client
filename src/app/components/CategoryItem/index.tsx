import Image from "next/image";
import React from "react";
//border-solid border-2
type Props = {
  src: string;
  alt: string;
  description: string;
};

const CategoryItem: React.FC<Props> = (props) => {
  return (
    <div className="  w-15 h-10 mt-5 lg:w-20 lg:h-10 flex flex-col rounded-2xl bg-white items-center justify-center hover:scale-110 hover:border-solid hover:border-2 hover:border-primaryColor  transition-all">
      <a
        href="#"
        className=" flex  w-full flex-col items-center justify-center gap-2 "
      >
        <Image className=" " src={props.src} alt={props.alt} />
        <span className=" text-sm lg:text-md">{props.description}</span>
      </a>
    </div>
  );
};

export default CategoryItem;
