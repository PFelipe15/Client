"use client";
import React, { useState } from "react";
import Baked from "../../../../public/images/Baked.svg";
import Burguer from "../../../../public/images/Burger.svg";
import Coffee from "../../../../public/images/Coffee.svg";
import Chicken from "../../../../public/images/Chicken.svg";
import Fast from "../../../../public/images/Fast.svg";
import Fish from "../../../../public/images/Fish.svg";
import popular1 from "../../../../public/images/popular/popularOne.png";
import foodOrder01 from "../../../../public/images/OrderImages/Mask Group-1.png";
import backgroundSeller from "../../../../public/images/backgroundBallance.png";
import perfil from "../../../../public/images/perfil.png";
import recent1 from "../../../../public/images/recent/image1.png";
import CategoryItem from "@/app/components/CategoryItem";
import {
  RiRestaurantLine,
  RiMessageFill,
  RiNotification2Fill,
  RiMenuUnfoldFill,
  RiCoupon2Line,
} from "react-icons/ri";
import {
  MdLocationOn,
  MdOutlineDeliveryDining,
  MdOutlineSettings,
  MdPayments,
  MdFavoriteBorder,
  MdOutlineHistory,
  MdOutlineSearch,
} from "react-icons/md";
import { TbArrowsTransferDown, TbArrowsTransferUp } from "react-icons/tb";
import Logo from "@/app/components/Logo/Index";
import PopularItem from "@/app/components/PopularItem";
import RecentOrderItem from "@/app/components/RecentOrderItem";
import Image from "next/image";

const HomeScreen: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className=" w-screen flex flex-col-reverse lg:flex-row    ">
      {/* MENU LATERAL ESQUERDO */}{" "}
      <div
        className={`px-12 lg:w-1/5 flex flex-col items-center justify-top pt-8 ${
          isMenuOpen ? "hidden lg:block" : ""
        }`}
      >
        <Logo />{" "}
        <div className=" ">
          <ul className="flex flex-col gap-4 mt-8 w-full justify-center">
            <li className="group w-full sm:w-56 flex justify-center hover:scale-110 items-center transition duration-150 ease-out h-14 rounded-lg hover:bg-primaryColor">
              <a
                href=""
                className="flex flex-row text-thinColor w-full group-hover:text-white pl-4 gap-6 justify-start items-start font-bold"
              >
                <RiRestaurantLine
                  size={25}
                  className="group-hover:text-white"
                />{" "}
                Painel de Controle
              </a>
            </li>
            <li className="group w-full sm:w-56 flex justify-center hover:scale-110 items-center transition duration-150 ease-out h-14 rounded-lg hover:bg-primaryColor">
              <a
                href=""
                className="flex flex-row text-thinColor w-full group-hover:text-white pl-4 gap-6 justify-start items-start font-bold"
              >
                <MdOutlineDeliveryDining
                  size={25}
                  className="group-hover:text-white"
                />{" "}
                Pedido de Comida
              </a>
            </li>
            <li className="group w-full sm:w-56 flex justify-center hover:scale-110 items-center transition duration-150 ease-out h-14 rounded-lg hover:bg-primaryColor">
              <a
                href=""
                className="flex flex-row text-thinColor w-full group-hover:text-white pl-4 gap-6 justify-start items-start font-bold"
              >
                <MdFavoriteBorder
                  size={25}
                  className="group-hover:text-white"
                />{" "}
                Favoritos
              </a>
            </li>
            <li className="group w-full sm:w-56 flex justify-center hover:scale-110 items-center transition duration-150 ease-out h-14 rounded-lg hover:bg-primaryColor">
              <a
                href=""
                className="flex flex-row text-thinColor w-full group-hover:text-white pl-4 gap-6 justify-start items-start font-bold"
              >
                <RiMessageFill size={25} className="group-hover:text-white" />{" "}
                Mensagem
              </a>
            </li>
            <li className="group w-full sm:w-56 flex justify-center hover:scale-110 items-center transition duration-150 ease-out h-14 rounded-lg hover:bg-primaryColor">
              <a
                href=""
                className="flex flex-row text-thinColor w-full group-hover:text-white pl-4 gap-6 justify-start items-start font-bold"
              >
                <MdOutlineHistory
                  size={25}
                  className="group-hover:text-white"
                />{" "}
                Histórico de Pedidos
              </a>
            </li>
            <li className="group w-full sm:w-56 flex justify-center hover:scale-110 items-center transition duration-150 ease-out h-14 rounded-lg hover:bg-primaryColor">
              <a
                href=""
                className="flex flex-row text-thinColor w-full group-hover:text-white pl-4 gap-6 justify-start items-start font-bold"
              >
                <MdPayments size={25} className="group-hover:text-white" />{" "}
                Faturas
              </a>
            </li>
            <li className="group w-full sm:w-56 flex justify-center hover:scale-110 items-center transition duration-150 ease-out h-14 rounded-lg hover:bg-primaryColor">
              <a
                href=""
                className="flex flex-row text-thinColor w-full group-hover:text-white pl-4 gap-6 justify-start items-start font-bold"
              >
                <MdOutlineSettings
                  size={25}
                  className="group-hover:text-white"
                />{" "}
                Configurações
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* DIV CENTRAL */}{" "}
      <div className="2xl:w-11/12 px-5 pt-8 flex flex-col bg-slate-100 gap-8">
        {/* CABEÇALHO CENTRAL */}{" "}
        <div className="flex items-center justify-between w-full h-10 flex-col lg:flex-row">
          <h1 className="font-bold text-3xl text-secondaryColor">
            Olá, Patricia
          </h1>
          <nav className="flex items-center w-96">
            <MdOutlineSearch
              size={25}
              className="text-secondaryColor absolute ml-5"
            />
            <input
              className="h-10 w-full rounded-lg outline-none border-2 pl-16"
              type="text"
              placeholder="O que você quer comer hoje..."
            />
          </nav>
        </div>
        <nav className="flex flex-col mt-2 gap-3">
          <div className="w-full flex gap-64 justify-between">
            <h1 className="text-sm lg:text-lg text-secondaryColor font-bold">
              Categoria
            </h1>
            <a
              href="#"
              className="lg:text-lg text-secondaryyColor font-thin hover:text-white"
            >
              Ver todos{" "}
              <span className="text-primaryColor group-hover:text-white">
                &gt;
              </span>
            </a>
          </div>

          <div className="w-full justify-center lg:justify-start flex gap-12 2xl:gap-4 2xl:my-5 flex-wrap">
            <CategoryItem
              src={Baked}
              description="Hambúrguer"
              alt="Imagem Hambúrguer"
            />
            <CategoryItem
              src={Burguer}
              description="Assados"
              alt="Imagem Assados"
            />

            <CategoryItem
              src={Coffee}
              description="Bebidas"
              alt="Imagem Bebidas"
            />

            <CategoryItem
              src={Chicken}
              description="Frango"
              alt="Imagem Frango"
            />

            <CategoryItem src={Fast} description="Pizza" alt="Imagem Pizza" />

            <CategoryItem
              src={Fish}
              description="Frutos"
              alt="Imagem Frutos do Mar"
            />
          </div>
        </nav>
        <nav className="flex flex-col gap-5">
          <div className="w-full flex justify-between">
            <h1 className="text-xl text-secondaryColor font-bold">
              Pratos Populares
            </h1>
            <a
              href="#"
              className="group lg:text-lg text-secondaryyColor font-thin hover:text-white"
            >
              Ver todos{" "}
              <span className="text-primaryColor group-hover:text-white">
                &gt;
              </span>
            </a>
          </div>
          <div className="flex w-full gap-8 justify-center flex-row flex-wrap lg:justify-between">
            <div>
              <PopularItem
                src={popular1}
                price={5.55}
                star={5}
                alt="Imagem Hambúrguer"
                valorOff={15}
                title="Hambúrguer de Peixe"
              />
            </div>
          </div>
        </nav>
        <footer className="flex flex-col">
          <div className="w-full flex justify-between">
            <h1 className="text-xl text-secondaryColor font-bold">
              Pedidos Recentes
            </h1>
            <a
              href="#"
              className="group lg:text-lg text-secondaryyColor font-thin hover:text-white"
            >
              Ver todos{" "}
              <span className="text-primaryColor group-hover:text-white">
                &gt;
              </span>
            </a>
          </div>
          <div className="w-full flex flex-wrap justify-center lg:justify-between gap-8 mt-8 j">
            <RecentOrderItem
              alt="lorem"
              location="21km"
              price={25.5}
              src={recent1}
              title="Pizza Calabresa"
              minutes="21 minutos"
            />

            <RecentOrderItem
              alt="lorem"
              location="21km"
              price={25.5}
              src={recent1}
              title="Pizza Calabresa"
              minutes="21 minutos"
            />

            <RecentOrderItem
              alt="lorem"
              location="21km"
              price={25.5}
              src={recent1}
              title="Pizza Calabresa"
              minutes="21 minutos"
            />
          </div>
        </footer>
      </div>
      {/* MENU LATERAL DIREITO*/}{" "}
      <div className="items-center w-full lg:w-1/4 flex-col 2xl:w-1/4 flex 2xl:flex-col pt-8 px-10">
        <div className="header-menu-lateral-direito flex justify-between items-center w-full">
          <ul className="flex gap-2">
            <li className="hover:scale-110">
              <button>
                <RiMessageFill size={25} className="text-secondaryColor" />
              </button>
            </li>
            <li className="hover:scale-110">
              <button>
                <RiNotification2Fill
                  size={25}
                  className="text-secondaryColor"
                />
              </button>
            </li>
            <li className="hover:scale-110">
              <button>
                <MdOutlineSettings size={25} className="text-secondaryColor" />
              </button>
            </li>
          </ul>
          <button className="hover:scale-110 transition-all">
            <Image src={perfil} alt="Imagem de Perfil" />
          </button>
        </div>

        <div className="flex flex-col gap-8 mt-5">
          <h1 className="font-bold text-secondaryColor text-2xl">Seu Saldo</h1>
          <div
            className="w-full  py-8 bg-no-repeat rounded-3xl flex justify-center items-center gap-5"
            style={{
              backgroundImage: `url(images/backgroundBallance.png)`,
            }}
          >
            <div className="left-ballance bg-white py-2 px-2 flex flex-col justify-center gap-1 items-center rounded-xl text-left">
              <span className="text-secondaryColor text-lg">Saldo</span>
              <span className="text-secondaryColor font-bold text-2xl">
                $12.000
              </span>
            </div>

            <div className="w-1/2 flex justify-center items-center gap-1">
              <div className="flex flex-col gap-3 items-center justify-center">
                <button className="bg-white rounded-lg px-2 py-2">
                  <TbArrowsTransferDown
                    size={25}
                    className="text-secondaryColor"
                  />
                </button>
                <span className="text-white">Adicionar</span>
              </div>

              <div className="flex gap-3 flex-col items-center justify-center">
                <button className="bg-white rounded-lg px-2 py-2">
                  <TbArrowsTransferUp
                    size={25}
                    className="text-secondaryColor"
                  />
                </button>
                <span className="text-white text-center">Transferir</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8 w-full adress-container flex flex-col gap-5 mt-8">
          <h1 className="text-thinColor text-lg">Seu Endereço</h1>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <MdLocationOn size={25} color="#982121" />{" "}
              <span className="font-bold text-">Rua Elm, 23</span>
            </div>
            <button className="border-2 rounded-xl border-primaryColor px-3 py-2 hover:scale-105 transition-all text-primaryColor">
              Alterar
            </button>
          </div>

          <p className="text-thinColor">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>

          <div className="flex gap-4">
            <button className="border-2 rounded-xl border-thinColor px-3 py-2 hover:scale-105 transition-all">
              Adicionar Detalhes
            </button>
            <button className="border-2 rounded-xl border-thinColor px-3 py-2 hover:scale-105 transition-all">
              Adicionar Observação
            </button>
          </div>
        </div>

        <div className="w-full flex flex-col items-center gap-5">
          <h1 className="text-2xl font-bold text-secondaryColor">
            Menu do Pedido
          </h1>
          <div className="flex flex-col border-b-2 border-b-slate-300 pb-12">
            <div className="flex mt-3 w-full gap-3 items-center justify-between">
              <Image src={foodOrder01} alt="Comida pedida" />
              <div className="flex flex-col text-left">
                <h3 className="font-semibold text-secondaryColor">
                  Pizza de Pepperoni
                </h3>
                <span className="text-thinColor">x1</span>
              </div>
              <h4 className="font-bold text-primaryColor">+$5.59</h4>
            </div>
            <div className="flex mt-3 w-full gap-3 items-center justify-between">
              <Image src={foodOrder01} alt="Comida pedida" />
              <div className="flex flex-col text-left">
                <h3 className="font-semibold text-secondaryColor">
                  Pizza de Pepperoni
                </h3>
                <span className="text-thinColor">x1</span>
              </div>
              <h4 className="font-bold text-primaryColor">+$5.59</h4>
            </div>
            <div className="flex mt-3 w-full gap-3 items-center justify-between">
              <Image src={foodOrder01} alt="Comida pedida" />
              <div className="flex flex-col text-left">
                <h3 className="font-semibold text-secondaryColor">
                  Pizza de Pepperoni
                </h3>
                <span className="text-thinColor">x1</span>
              </div>
              <h4 className="font-bold text-primaryColor">+$5.59</h4>
            </div>
          </div>

          <div className="flex w-full flex-col gap-4">
            <div className="flex justify-between">
              <span className="text-thinColor text-md">Serviço</span>
              <span className="flex text-secondaryColor">
                + <span className="text-primaryColor">$</span> 1.00
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-secondaryColor text-xl">Total</span>
              <span className="flex text-secondaryColor text-2xl">
                <span className="text-primaryColor">$</span> 200.00
              </span>
            </div>
          </div>

          <button className="flex hover:scale-110 transition duration-150 ease-out w-full justify-center gap-3 2xl:gap-6 py-3 rounded-lg border-2 border-primaryColor">
            <RiCoupon2Line
              size={25}
              className="bg-primaryColor text-white text-xs"
            />
            Tem um cupom? <span>&gt;</span>
          </button>

          <button
            className="flex hover:scale
110 transition duration-150 ease-out text-white w-full justify-center gap-3 2xl:gap-6 py-3 rounded-lg bg-black"
          >
            Finalizar Compra
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
