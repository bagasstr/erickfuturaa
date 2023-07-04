import React from "react";

const Filter = () => {
  return (
    <div
      className="w-full bg-gradient-to-r from-primary to-bg shadow-md py-16"
      id="home"
    >
      <div className="max-w-[1024px] mx-auto px-2">
        <div className="space-y-5">
          <div className="text-center">
            <form className="space-y-5">
              <select
                id="property"
                className="bg-gray-50 border border-gray-300 text-primary font-medium text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 shadow-md"
              >
                <option selected className="text-xs">
                  Type
                </option>
                <option value="US" className="text-xs">
                  Apartemen
                </option>
                <option value="CA" className="text-xs">
                  House
                </option>
                <option value="FR" className="text-xs">
                  Cavling
                </option>
                <option value="DE" className="text-xs">
                  Ruko
                </option>
              </select>
              <select
                id="property"
                className="bg-gray-50 border border-gray-300 text-primary font-medium text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 shadow-md"
              >
                <option selected className="text-xs">
                  Type Property
                </option>
                <option value="US" className="text-xs">
                  Primary
                </option>
                <option value="CA" className="text-xs">
                  Secondary
                </option>
              </select>
              <select
                id="area"
                className="bg-gray-50 border border-gray-300 text-primary font-medium text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mobile:text-lg shadow-md"
              >
                <option selected className="text-xs">
                  Area
                </option>
                <option value="US" className="text-xs">
                  United States
                </option>
                <option value="CA" className="text-xs">
                  Canada
                </option>
                <option value="FR" className="text-xs">
                  France
                </option>
                <option value="DE" className="text-xs">
                  Germany
                </option>
              </select>

              <button
                type="submit"
                className="bg-white px-4 py-2 rounded-md mt-6 shadow-md text-lg font-semibold w-full text-primary"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
