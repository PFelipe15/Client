"use client";
import Image, { StaticImageData } from "next/image";
import starImage from "../../../../public/images/Star.svg";
import { AiFillHeart } from "react-icons/ai";
import { useState } from "react";
type Props = {
  valorOff: number;
  src: StaticImageData;
  star: number;
  alt: string;
  title: string;
  price: number;
};

const PopularItem: React.FC<Props> = (props) => {
  const [heartColor, setHeartColor] = useState("#DBDBDB"); // Estado para controlar a cor do coração

  const handleClickHeart = () => {
    setHeartColor("#f87171"); // Define a cor do coração como vermelho ao ser clicado
  };

  const stars = Array(props.star).fill(null); // Cria um array com o tamanho props.star

  return (
    <div className="group w-80  h-80 flex flex-col rounded-2xl bg-white items-center justify-center hover:scale-105 transition-all">
      <div className=" w-full h-full flex flex-col items-center pt-4">
        <div className="w-full  flex justify-between">
          <span className="bg-red-400 py-1 px-2 rounded-e-lg text-white text-xs 2xl:text-base">{`${props.valorOff}% Off`}</span>
          <button
            onClick={handleClickHeart}
            className="pr-5 hover:scale-110 transition-all"
          >
            <AiFillHeart size={25} color={heartColor} id="btnHeart" />
          </button>
        </div>
        <Image className=" " src={props.src} alt={props.alt} />
        <div className="w-full flex flex-row justify-between items-center px-8 gap-1">
          <div className="flex flex-col">
            <div className="flex gap-2">
              {stars.map((_, index) => (
                <Image
                  key={index}
                  src={starImage}
                  alt="Estrela classificação"
                />
              ))}
            </div>
            <span className="text-lg text-secondaryColor font-thin">
              {props.title}
            </span>
            <small className="text-2xl text-secondaryColor font-bold">{`$${props.price}`}</small>
          </div>
          <button className="w-14 h-14 rounded-lg bg-primaryColor text-white text-2xl hover:scale-110 hover:border-solid hover:border-2 hover:border-secondaryColor transition-all">
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopularItem;
