import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { data } from "../Data/ListingTerbaru/DataTerbaru.json";
// Import Swiper React components
import { Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { AiOutlineCloseCircle } from "react-icons/ai";

import "swiper/css";

import "swiper/css/pagination";
import ButtonWa from "./ButtonWa";
import Navbar from "./Navbar";

const PreviewImage = ({ props }) => {
  const [jmlImg, setJmlImg] = useState();
  const { title } = useParams();
  const myData = data.find((data) => data.title === String(title));

  useEffect(() => {}, [myData]);

  const totalImages = myData.image.filter(
    (item) =>
      item.endsWith(".jpeg") || item.endsWith(".png") || item.endsWith(".jpg")
  ).length;
  // setJmlImg(totalImages);

  console.log(totalImages);
  return (
    <>
      <Navbar hidden={"hidden"} />
      <div
        id="imagePreview"
        className="fixed top-0 right-0 bg-black w-screen h-screen z-[99] image-preview"
      >
        <div className="flex absolute z-[99] w-full bg-black/20 items-center justify-around mobile:justify-between mobile:px-4 py-5">
          <div className="">
            <h1 className="text-white/90 text-sm font-medium">
              {myData.title}
            </h1>
            <h1 className="text-white/90 text-sm font-medium">{myData.area}</h1>
            <h1 className="text-white/90 mt-2 text-sm font-medium">
              Gambar: {totalImages}
            </h1>
          </div>
          <Link to={`/listings/detail/${myData.title}`} className="">
            <AiOutlineCloseCircle className="text-4xl rounded-full shadow-lg text-white " />
          </Link>
        </div>

        <div className="">
          <Swiper
            modules={[Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
          >
            {myData.image.map((res, idx) => (
              <SwiperSlide key={idx}>
                {/* <div className="desktop:w-full desktop:h-[450px]"> */}
                <img
                  src={res}
                  alt=""
                  className="w-full h-[50rem] mobile:object-cover desktop:object-contain cursor-pointer"
                />
                {/* </div> */}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default PreviewImage;
