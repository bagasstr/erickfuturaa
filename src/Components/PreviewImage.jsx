import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { data } from "../Data/ListingTerbaru/DataTerbaru.json";
// Import Swiper React components
import { Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { AiOutlineCloseCircle } from "react-icons/ai";

import "swiper/css";
import ButtonWa from "./ButtonWa";

const PreviewImage = ({ props }) => {
  const { title } = useParams();
  const myData = data.find((data) => data.title === String(title));
  useEffect(() => {}, [myData]);
  return (
    <div className="fixed pt-[4.2rem] top-0 right-0 bg-black w-screen h-screen z-50">
      <div className="flex items-center justify-between px-3 py-5">
        <div className="">
          <h1 className="text-white/90 text-sm font-medium">{myData.title}</h1>
          <h1 className="text-white/90 text-sm font-medium">{myData.area}</h1>
        </div>
        <AiOutlineCloseCircle
          onClick={() => props((prev) => !prev)}
          className="text-4xl rounded-full shadow-lg text-white "
        />
      </div>
      <ButtonWa />
      <div className="">
        <Swiper modules={[]} spaceBetween={30} slidesPerView={1}>
          {myData.image.map((res, idx) => (
            <div key={idx} className="">
              <SwiperSlide>
                <div className="">
                  <div className="">
                    <img
                      src={res}
                      alt=""
                      onClick={() => setPreview((prev) => !prev)}
                      className="w-full h-[430px] object-cover cursor-pointer"
                    />
                  </div>
                </div>
              </SwiperSlide>
            </div>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PreviewImage;
