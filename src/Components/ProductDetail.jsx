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
    <div className="">
      <div className="pt-28">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {myData.image.map((res, idx) => (
            <SwiperSlide>
              <PhotoProvider>
                {myData.image.map((res, idx) => (
                  <PhotoView key={idx} src={res}>
                    {idx < 1 ? (
                      <img src={res} alt="" className="desktop:hidden" />
                    ) : undefined}
                    {/* <img src={res} alt="" /> */}
                  </PhotoView>
                ))}
              </PhotoProvider>
              <img src={res} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductDetail;
