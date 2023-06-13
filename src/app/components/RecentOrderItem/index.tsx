"use client";
import Image, { StaticImageData } from "next/image";
import starImage from "../../../../public/images/Star.svg";
import { AiFillHeart } from "react-icons/ai";
import { useState } from "react";
type Props = {
  src: StaticImageData;
  alt: string;
  title: string;
  price: number;
  location: string;
  minutes: string;
};

const RecentOrderItem: React.FC<Props> = (props) => {
  const [heartColor, setHeartColor] = useState("#DBDBDB"); // Estado para controlar a cor do coração

  const handleClickHeart = () => {
    setHeartColor("#f87171"); // Define a cor do coração como vermelho ao ser clicado
  };

  return (
    <div className="group w-80 flex flex-col rounded-2xl bg-white items-center justify-center hover:scale-105 transition-all">
      <div className="w-full h-full flex flex-col  items-center pt-4">
        <div className="w-full flex justify-end  ">
          <button
            onClick={handleClickHeart}
            className="pr-5 hover:scale-110 transition-all"
          >
            <AiFillHeart size={25} color={heartColor} id="btnHeart" />
          </button>
        </div>
        <Image className=" " src={props.src} alt={props.alt} />

        <div className="flex flex-col justify-center items-center gap-5">
          <span className="text-lg text-secondaryColor font-thin">
            {props.title}
          </span>
          <small className="text-2xl text-secondaryColor font-bold">{`$${props.price}`}</small>
          <span className="flex text-thinColor text-sm">
            {props.location} - {props.minutes}{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default RecentOrderItem;
