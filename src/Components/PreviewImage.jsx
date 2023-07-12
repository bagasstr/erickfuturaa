import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { data } from "../Data/ListingTerbaru/DataTerbaru.json";
// Import Swiper React components
import { Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const PreviewImage = ({ image, index }) => {
  const { title } = useParams();
  const myData = data.find((data) => data.title === String(title));
  useEffect(() => {}, [myData]);
  return (
    <div className="fixed pt-[4.2rem] top-0 right-0 bg-black w-screen h-screen z-50">
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
