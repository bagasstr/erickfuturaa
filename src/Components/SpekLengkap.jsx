import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";

const SpekLengkap = ({ props }) => {
  return (
    <div className="fixed z-50 bottom-0 left-0 w-full bg-slate-200 h-screen">
      <div className="px-6 py-8">
        <div className="flex justify-between">
          <h1 className="font-semibold text-lg text-black/80">Deskripsi</h1>
          <AiFillCloseCircle
            onClick={() => props((prev) => !prev)}
            className="text-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default SpekLengkap;
