import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { data } from "../Data/ListingTerbaru/DataTerbaru.json";
// Import Swiper React components
import { Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { AiOutlineCloseCircle } from "react-icons/ai";

import "swiper/css";

const PreviewImage = ({ props }) => {
  const { title } = useParams();
  const myData = data.find((data) => data.title === String(title));
  useEffect(() => {}, [myData]);
  return (
    <div className="fixed pt-[4.2rem] top-0 right-0 bg-black w-screen h-screen z-50">
      <div className="z-50 absolute right-7 top-24">
        <AiOutlineCloseCircle
          onClick={() => props((prev) => !prev)}
          className="text-4xl rounded-full shadow-lg text-white "
        />
      </div>
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
                    className="w-full h-[400px] object-cover cursor-pointer"
                  />
                </div>
              </div>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
};

export default PreviewImage;
