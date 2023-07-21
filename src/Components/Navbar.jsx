import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { BsFillHousesFill } from "react-icons/bs";

const Navbar = ({ primary, white }) => {
  const [menu, setMenu] = useState(false);
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 20) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  return (
    <>
      <div
        className={`w-full fixed top-0 left-0 z-50 ${
          colorChange
            ? `bg-white shadow-md ${white}`
            : `bg-transparent ${primary}`
        }`}
      >
        <div className="max-w-[1024px] mx-auto py-5 mobile:px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-x-2">
              <BsFillHousesFill
                className={`  text-lg ${colorChange ? { primary } : { white }}`}
              />
              <h1
                className={`font-semibold  text-2xl ${
                  colorChange ? { primary } : { white }
                }`}
              >
                ERICKFUTURA
              </h1>
            </div>
            <div className="flex items-center flex-row-reverse justify-center">
              <FiMenu
                className="ml-8 font-bold  text-2xl desktop:hidden hover:text-primary/75"
                onClick={() => setMenu((prev) => !prev)}
              />
              <ul
                className={`desktop:flex desktop:items-center desktop:gap-x-11 mobile:absolute mobile:transition-all mobile:bg-secc mobile:p-4 mobile:rounded-lg mobile:w-full mobile:left-0 mobile:shadow-lg mobile:space-y-3 ${
                  menu ? "top-[4rem]" : "top-[-15rem]"
                }`}
              >
                <Link
                  to={"/"}
                  onClick={() => setMenu((prev) => !menu)}
                  className="font-medium text-lg  mobile:text-white hover:text-primary/75"
                >
                  <li>Home</li>
                </Link>
                <Link
                  to={"/all-listings"}
                  onClick={() => setMenu((prev) => !menu)}
                  className="font-medium text-lg  mobile:text-white hover:text-primary/75"
                >
                  <li>Product</li>
                </Link>
                <Link
                  to={"/profile-me"}
                  onClick={() => setMenu((prev) => !menu)}
                  className="font-medium text-lg  mobile:text-white hover:text-primary/75"
                >
                  <li>Profile</li>
                </Link>
                <Link
                  to={"/contact-us"}
                  onClick={() => setMenu((prev) => !menu)}
                  className="font-medium text-lg  mobile:text-white hover:text-primary/75"
                >
                  <li>Contact</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
