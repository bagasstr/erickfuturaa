import React from "react";
import { BsFillHousesFill } from "react-icons/bs";
import { RiMouseLine } from "react-icons/ri";
import background from "/hero.jpg";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1024px] mx-auto flex justify-center">
        <div className="imgHero mt-16">
          <img
            src="/heroImg.jpg"
            alt="heroImage"
            className="brightness-[.4] mobile:hidden"
          />
          <img
            src="/hero.jpg"
            alt="heroImage"
            className="brightness-[.4] desktop:hidden"
          />
        </div>
        <div className="absolute top-[10rem] text-white">
          <div className="heroLogo gap-x-2 flex flex-col justify-center items-center">
            <BsFillHousesFill className="text-white text-3xl mb-2" />
            <h1 className="text-white font-semibold text-2xl mb-3">
              ERICKFUTURA
            </h1>
            <h2 className="text-center text-sm font-light w-[17rem]">
              Agent Futura Property, Jual, Beli Dan Sewa Property, Mulai dari
              property primary hingga property secondary.
            </h2>
            <a href="#home">
              <div className="flex flex-col justify-center items-center gap-y-3 cursor-pointer text-white/80">
                <RiMouseLine className="text-2xl mt-[6rem]" />
                <h1 className="text-sm">Scroll Down</h1>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
