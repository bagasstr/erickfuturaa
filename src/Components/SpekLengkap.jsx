import React, { useEffect, useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import data from "../Data/ListingTerbaru/DataTerbaru.json";

const SpekLengkap = ({ props, data }) => {
  return (
    <div className="fixed overflow-y-scroll z-50 bottom-0 left-0 w-full bg-slate-200 h-screen">
      <div className="px-6 py-8">
        <div className="flex justify-between">
          <h1 className="font-semibold text-lg text-black/80">Deskripsi</h1>
          <AiFillCloseCircle
            onClick={() => props((prev) => !prev)}
            className="text-3xl"
          />
        </div>
        <div className="mt-10">
          <div className="flex justify-between items-center border-t-2 border-black/20">
            <h1 className="py-4 font-medium text-sm text-black/70">
              Kamar Tidur
            </h1>
            <h2 className="py-4 font-medium text-black/60 text-sm ">
              {data.kt}
            </h2>
          </div>
          <div className="flex justify-between items-center border-t-2 border-black/20">
            <h1 className="py-4 font-medium text-sm text-black/70">
              Kamar Mandi
            </h1>
            <h2 className="py-4 font-medium text-black/60 text-sm ">
              {data.km}
            </h2>
          </div>
          <div className="flex justify-between items-center border-t-2 border-black/20">
            <h1 className="py-4 font-medium text-sm text-black/70">
              Luas Bangunan
            </h1>
            <h2 className="py-4 font-medium text-black/60 text-sm ">
              {data.lb}
            </h2>
          </div>
          <div className="flex justify-between items-center border-t-2 border-black/20">
            <h1 className="py-4 font-medium text-sm text-black/70">
              Luas Bangunan + Balkon
            </h1>
            <h2 className="py-4 font-medium text-black/60 text-sm ">
              {data?.lbb ? data.lbb : "-"}
            </h2>
          </div>
          <div className="flex justify-between items-center border-t-2 border-black/20">
            <h1 className="py-4 font-medium text-sm text-black/70">
              Luas Tanah
            </h1>
            <h2 className="py-4 font-medium text-black/60 text-sm ">
              {data?.lt ? data.lt : "-"}
            </h2>
          </div>
          <div className="flex justify-between items-center border-t-2 border-black/20">
            <h1 className="py-4 font-medium text-sm text-black/70">Garasi</h1>
            <h2 className="py-4 font-medium text-black/60 text-sm ">
              {data?.garasi ? data.garasi : "-"}
            </h2>
          </div>
          <div className="flex justify-between items-center border-t-2 border-black/20">
            <h1 className="py-4 font-medium text-sm text-black/70">Carport</h1>
            <h2 className="py-4 font-medium text-black/60 text-sm ">
              {data?.garasi ? data.garasi : "parkiran umum"}
            </h2>
          </div>
          <div className="flex justify-between items-center border-t-2 border-black/20">
            <h1 className="py-4 font-medium text-sm text-black/70">
              Tipe Properti
            </h1>
            <h2 className="py-4 font-medium text-black/60 text-sm ">
              {data?.type}
            </h2>
          </div>
          <div className="flex justify-between items-center border-t-2 border-black/20">
            <h1 className="py-4 font-medium text-sm text-black/70">
              Sertifikat
            </h1>
            <h2 className="py-4 font-medium text-black/60 text-sm ">
              {data?.serti}
            </h2>
          </div>
          <div className="flex justify-between items-center border-t-2 border-black/20">
            <h1 className="py-4 font-medium text-sm text-black/70">Listrik</h1>
            <h2 className="py-4 font-medium text-black/60 text-sm ">
              {data?.listrik}
            </h2>
          </div>
          <div className="flex justify-between items-center border-t-2 border-black/20">
            <h1 className="py-4 font-medium text-sm text-black/70">
              KT. Pembantu
            </h1>
            <h2 className="py-4 font-medium text-black/60 text-sm ">
              {data?.ktp ? data.ktp : "-"}
            </h2>
          </div>
          <div className="flex justify-between items-center border-t-2 border-black/20">
            <h1 className="py-4 font-medium text-sm text-black/70">
              KM. Pembantu
            </h1>
            <h2 className="py-4 font-medium text-black/60 text-sm ">
              {data?.kmp ? data.kmp : "-"}
            </h2>
          </div>
          <div className="flex justify-between items-center border-t-2 border-black/20">
            <h1 className="py-4 font-medium text-sm text-black/70">
              Jumlah Lantai
            </h1>
            <h2 className="py-4 font-medium text-black/60 text-sm ">
              {data?.jl ? data.jl : "-"}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpekLengkap;
