import React from "react";

const Slick = ({ props }) => {
  return (
    <div className="pb-10">
      <div className="flex gap-x-3 overflow-auto">
        <div className="bg-white shadow-lg text-center py-2 px-3 rounded-md">
          <h1 className="font-semibold text-lg text-black/70">L.Bangunan</h1>
          <p className="text-medium text-black/60 text-lg">{props.lb}</p>
        </div>
        <div className="bg-white shadow-lg text-center py-2 px-3 rounded-md">
          <h1 className="font-semibold text-lg text-black/70">
            L.Tanah/Keseluruhan
          </h1>
          <p className="text-medium text-black/60 text-lg">{props.lbb}</p>
        </div>
        <div className="bg-white shadow-lg text-center py-2 px-3 rounded-md">
          <h1 className="font-semibold text-lg text-black/70">K.Mandi</h1>
          <p className="text-medium text-black/60 text-lg">{props.km}</p>
        </div>
        <div className="bg-white shadow-lg text-center py-2 px-3 rounded-md">
          <h1 className="font-semibold text-lg text-black/70">K.Tidur</h1>
          <p className="text-medium text-black/60 text-lg">{props.kt}</p>
        </div>
        <div className="bg-white shadow-lg text-center py-2 px-3 rounded-md">
          <h1 className="font-semibold text-lg text-black/70">Lantai</h1>
          <p className="text-medium text-black/60 text-lg">{props.lantai}</p>
        </div>
        <div className="bg-white shadow-lg text-center py-2 px-3 rounded-md">
          <h1 className="font-semibold text-lg text-black/70">Pemandangan</h1>
          <p className="text-medium text-black/60 text-lg">{props.pemandang}</p>
        </div>
      </div>
    </div>
  );
};

export default Slick;
