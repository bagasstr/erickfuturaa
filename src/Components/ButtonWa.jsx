import React from "react";
import { BsWhatsapp } from "react-icons/bs";

const ButtonWa = () => {
  return (
    <div className="mobile:sticky mobile:bottom-0 w-full mobile:mt-4 desktop:mt-4">
      <div className="bg-primary mx-auto items-center justify-center gap-x-2 mobile:w-[20rem] py-3 px-4 rounded-md flex">
        <BsWhatsapp className="font-medium text-sm text-white" />
        <h1 className="font-medium text-sm text-white">WhatsApp</h1>
      </div>
    </div>
  );
};

export default ButtonWa;
