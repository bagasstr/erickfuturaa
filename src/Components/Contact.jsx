import React from "react";
import { IoLogoWhatsapp } from "react-icons/io5";

const Contact = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-2 mobile:grid-cols-1 mobile:py-10  items-center bg-gradient-to-r from-secc desktop:py-16 to-bg mobile:gap-y-7 mobile:text-center justify-items-center text-white px-10">
        <h1 className="text-xl mobile:text-base mobile:font-semibold font-bold">
          Jika ada pertanyaan <br /> silahkan hubungi kami.
        </h1>
        <a
          href=""
          className="flex items-center mobile:text-sm border-2 text-lg space-x-1 font-medium border-white text-white px-5 py-3 rounded-md"
        >
          <IoLogoWhatsapp className="text-xl" />
          <h1 className="">What'sApp</h1>
        </a>
      </div>
    </div>
  );
};

export default Contact;
