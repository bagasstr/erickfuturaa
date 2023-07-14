import React, { useState } from "react";
import SpekLengkap from "./SpekLengkap";

const SpekSingkat = ({ props }) => {
  const [spekLengkap, setSpekLengkap] = useState(false);
  return (
    <div className="pb-5">
      <div className="flex gap-x-3 px-4 overflow-auto py-5">
        <div className="bg-white shadow-lg text-center py-2 px-3 rounded-md">
          <h1 className="font-semibold text-sm text-black/70">L.Bangunan</h1>
          <p className="text-medium text-black/60 text-sm">{props.lb}</p>
        </div>

        <div className="bg-white shadow-lg text-center py-2 px-3 rounded-md">
          <h1 className="font-semibold text-sm text-black/70">
            L.Tanah/Keseluruhan
          </h1>
          <p className="text-medium text-black/60 text-sm">{props.lbb}</p>
        </div>
        <div className="bg-white shadow-lg text-center py-2 px-3 rounded-md">
          <h1 className="font-semibold text-sm text-black/70">K.Mandi</h1>
          <p className="text-medium text-black/60 text-sm">{props.km}</p>
        </div>
        <div className="bg-white shadow-lg text-center py-2 px-3 rounded-md">
          <h1 className="font-semibold text-sm text-black/70">K.Tidur</h1>
          <p className="text-medium text-black/60 text-sm">{props.kt}</p>
        </div>
        <div className="bg-white shadow-lg text-center py-2 px-3 rounded-md">
          <h1 className="font-semibold text-sm text-black/70">Lantai</h1>
          <p className="text-medium text-black/60 text-sm">{props.lantai}</p>
        </div>
        <div className="bg-white shadow-lg text-center py-2 px-3 rounded-md">
          <h1 className="font-semibold text-sm text-black/70">Pemandangan</h1>
          <p className="text-medium text-black/60 text-sm">{props.pemandang}</p>
        </div>
      </div>
      <div className="px-4 pt-4">
        <h1
          onClick={() => setSpekLengkap((prev) => !prev)}
          className="text-black/70 text-sm font-semibold"
        >
          Lihat Selengkapnya
        </h1>
      </div>
      {spekLengkap ? <SpekLengkap props={setSpekLengkap} /> : null}
    </div>
  );
};

export default SpekSingkat;
