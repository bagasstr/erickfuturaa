import React from "react";
import { BsFillTelephoneFill, BsFillBuildingFill } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";

const Contact = () => {
  return (
    <div>
      <div className="grid desktop:pr-7 desktop:grid-cols-2 items-center justify-between">
        <div className="desktop:h-[664px] mobile:h-screen mobile:w-full">
          <img
            src="/hero.jpg"
            alt=""
            className="object-cover brightness-75 w-full h-full"
          />
        </div>
        <div className="desktop:bg-white mobile:bg-black/80 mobile:mx-4 px-10 py-16 mobile:px-6 absolute rounded-lg shadow-md desktop:right-[15rem]">
          <div className="desktop:ml-16">
            <h1 className="text-black/90 mobile:text-white/95 font-bold text-3xl mb-4">
              Hubungi Saya
            </h1>
            <h2 className="text-black/80 mobile:text-white/95 text-base desktop:w-[30rem] mb-5 font-medium">
              Jika ada pertanyaan atau konsultasi seputar property silahkan
              Hubungi saya di bawah.
            </h2>
            <div className="flex items-center gap-x-2 mb-2 mobile:text-white/95 text-black/75">
              <BsFillTelephoneFill className="text-lg" />
              <h1 className=" font-semibold text-base">+62 877-89070-757</h1>
            </div>
            <div className="flex items-center gap-x-2 mb-2 mobile:text-white/95 text-black/75">
              <BsFillBuildingFill className="text-lg" />
              <h1 className=" font-semibold text-base">+62 822-3333-5227</h1>
            </div>
            <div className="flex items-center gap-x-2 mobile:text-white/95 text-black/75">
              <AiFillMail className="text-lg" />
              <h1 className=" font-semibold text-base">
                erickfuturaproperty@gmail.com
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
