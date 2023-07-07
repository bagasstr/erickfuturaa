import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { data } from "../Data/ListingTerbaru/DataTerbaru.json";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const ProductDetail = () => {
  const { title } = useParams();
  const myData = data.find((data) => data.title === String(title));
  useEffect(() => {}, [myData]);

  return (
    <div className="w-full">
      <div className="containers mx-auto py-28">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {myData.image.map((res, idx) => (
            <SwiperSlide>
              <div className=" h-[500px]">
                <div className="">
                  <img src={res} alt="" className="absolute bottom-[-50px]" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mobile:hidden">
          <PhotoProvider>
            <div className="grid grid-cols-3 gap-x-4">
              {myData.image.map((item, index) => (
                <PhotoView key={index} src={item}>
                  <img src={item} alt="" />
                </PhotoView>
              ))}
            </div>
          </PhotoProvider>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
