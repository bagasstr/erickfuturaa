import React, { useEffect, useState } from "react";
import { data } from "../Data/ListingTerbaru/DataTerbaru.json";
import { FaBath, FaBed, FaLocationDot } from "react-icons/fa6";
import { GiResize } from "react-icons/gi";
import { BsFillBuildingFill } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import ProductDetail from "./ProductDetail";

const Product = () => {
  return (
    <div>
      <div className="w-full">
        <div className="containers px-2 py-16">
          <div className="">
            {/* Listingan Terbaru */}
            <div className="ListinganTerbaru">
              <h1 className="text-xl mobile:font-semibold text-black/90">
                Listingan Terbaru
              </h1>
              <div className="flex flex-col items-center">
                {data.map((res, index) => {
                  return (
                    <div
                      key={index}
                      className="shadow-lg rounded-md w-fit my-7 pb-4"
                    >
                      <div className="relative">
                        <img
                          src={res.thumnail}
                          alt="thumnail"
                          className="rounded-md shadow-lg"
                        />
                        <h1 className="absolute text-white bg-primary px-3 py-1 rounded-md font-semibold text-lg top-0">
                          {res.market.toUpperCase()}
                        </h1>
                      </div>
                      <div className="p-4 rounded-md text-text">
                        <h1 className="font-semibold text-text/60 mb-2">
                          {res.type}
                        </h1>
                        <h1 className="text-2xl font-semibold">{res.title}</h1>
                        <div className="flex items-center gap-x-2 mb-4 text-text/80">
                          <FaLocationDot className="text-sm" />
                          <h2 className="text-sm font-medium">{res.area}</h2>
                        </div>
                        <div className="mb-4">
                          <h1 className="text-lg font-medium text-text/60">
                            Harga mulai dari
                          </h1>
                          <h3 className="text-2xl font-medium">{res.harga}</h3>
                        </div>
                        <hr className="my-2 bg-text/20" />
                        <div className="flex gap-x-4 justify-center">
                          <div className="flex items-center gap-x-2">
                            <FaBath className="text-xl" />
                            <h1 className="text-lg font-medium">{res.km}</h1>
                          </div>
                          <div className="flex items-center gap-x-2">
                            <FaBed className="text-xl" />
                            <h1 className="text-lg font-medium">{res.kt}</h1>
                          </div>
                          <div className="flex items-center gap-x-2">
                            <GiResize className="text-xl" />
                            <h1 className="text-lg font-medium">{res.lb}</h1>
                          </div>
                          <div className="flex items-center gap-x-2">
                            <BsFillBuildingFill className="text-xl" />
                            <h1 className="text-lg font-medium">{res?.lbb}</h1>
                          </div>
                        </div>
                        <hr className="my-2 bg-text/20" />
                        <div className="mt-10 flex justify-around">
                          <Link
                            to={`/listings/detail?=${res.title}`}
                            className="border-2 border-text text-text px-4 py-3 uppercase rounded-md font-semibold shadow-md flex items-center"
                          >
                            Detail Unit
                          </Link>
                          <a
                            href=""
                            className="bg-text text-white px-4 py-3 uppercase rounded-md font-semibold flex items-center shadow-md"
                          >
                            WhatsApp
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
