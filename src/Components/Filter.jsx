import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Filter = () => {
  const [type, setType] = useState("");
  const [typeProperty, setTypeProperty] = useState("");
  const [area, setArea] = useState("");

  const navigate = useNavigate();

  const handlerFilter = () => {
    navigate(`/all-listings?area=${area}`);
  };

  return (
    <div
      className="w-full bg-gradient-to-r from-primary to-bg shadow-md pb-8 pt-14"
      id="home"
    >
      <div className="max-w-[1024px] mx-auto px-2">
        <div className="">
          <h1 className="mb-3 font-medium text-lg text-white">
            Cari Properti Dengan Mudah
          </h1>
          <div className="text-center space-y-5">
            <select
              id="area"
              className="bg-gray-50 border border-gray-300 text-primary font-medium text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mobile:text-lg shadow-md"
              value={area}
              onChange={(e) => setArea(e.target.value)}
            >
              <option selected className="text-xs">
                Pilih Area Property
              </option>
              <option value="Jakarta Barat" className="text-xs">
                Jakarta Barat
              </option>
              <option value="Tangerang" className="text-xs">
                Tangerang
              </option>
            </select>

            <button
              onClick={handlerFilter}
              className="bg-white px-4 py-2 rounded-md mt-6 shadow-md text-lg font-semibold w-full text-primary"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
