import React from "react";
import { BsWhatsapp } from "react-icons/bs";

const ButtonWa = () => {
  return (
    <div className="fixed bottom-4 w-full">
      <div className="bg-primary mx-auto items-center justify-center gap-x-2 w-[25rem] py-3 px-4 rounded-md flex">
        <BsWhatsapp className="font-medium text-sm text-white" />
        <h1 className="font-medium text-sm text-white">WhatsApp</h1>
      </div>
    </div>
  );
};

export default ButtonWa;
