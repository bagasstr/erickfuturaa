import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { data } from "../Data/ListingTerbaru/DataTerbaru.json";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
// Import Swiper React components
import { Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import PreviewImage from "./PreviewImage";
import SpekSingkat from "./SpekSingkat";
import ButtonWa from "./ButtonWa";
import Navbar from "./Navbar";

const ProductDetail = () => {
  const { title } = useParams();
  const myData = data.find((data) => data.title === String(title));
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [myData]);
  const [preview, setPreview] = useState(false);
  const [mainImage, setMainImage] = useState(myData.image[0]);

  return (
    <>
      <Navbar primary={"text-primary"} white={"text-primary"} />
      <div key={myData.id} className="">
        <div className="w-full">
          <div className="containers mx-auto py-16 pt-28">
            <Swiper
              modules={[Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              pagination={{ clickable: true }}
              className="desktop:hidden"
            >
              {myData.image.map((res, idx) => (
                <div key={idx} className="">
                  <SwiperSlide>
                    <div className="">
                      <div className="">
                        <img
                          src={res}
                          alt=""
                          onClick={() => setPreview((prev) => !prev)}
                          className="w-[500px] h-[300px] object-cover cursor-pointer"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
              ))}
            </Swiper>
            {preview ? <PreviewImage props={setPreview} /> : null}
            <div className="mobile:hidden ">
              <PhotoProvider>
                <div className="desktop:flex desktop:gap-x-4 desktop:items-center desktop:flex-col">
                  <div className="desktop:mb-10">
                    <img
                      src={mainImage}
                      onClick={() => setPreview((prev) => !prev)}
                      className="w-[300px] h-[400px] rounded-md"
                      alt=""
                    />
                  </div>
                  <div className="flex gap-x-5">
                    {myData.image.map((item, index) => (
                      <img
                        key={index}
                        src={item}
                        onClick={() => setMainImage(item)}
                        className="w-[50px] h-[50px] rounded-sm"
                        alt=""
                      />
                    ))}
                  </div>
                </div>
              </PhotoProvider>
            </div>
            <hr className="mt-10 bg-primary/10 h-[2px]" />
            <div className="py-4 px-4">
              <div className="">
                <div className="bg-primary w-fit px-4 py-[.30rem] rounded-full">
                  <h1 className="text-white text-xs font-medium">
                    {myData.type}
                  </h1>
                </div>
                <div className="mt-4">
                  <h2 className="font-medium text-black/70">
                    {myData.market.toUpperCase()}
                  </h2>
                  <h1 className="font-bold text-2xl text-black/80">
                    Rp {myData.harga}
                  </h1>
                  <h3 className="font-medium mt-2 text-lg text-black/80">
                    {myData.title}
                  </h3>
                  <h4 className="font-medium text-black/80">{myData.area}</h4>
                </div>
                <hr className="bg-black/10 my-3 rounded-full" />
                <div className="">
                  <h1 className="font-bold text-lg text-black/70">
                    Informasi Properti
                  </h1>
                  <h2 className="font-medium text-black/70">Spesifikasi</h2>
                </div>
              </div>
            </div>
            <SpekSingkat props={myData} datas={myData} />
            <hr />
            <div className="py-4 px-4">
              <h1 className="font-medium text-black/70">Deskripsi</h1>
              <h2 className="font-medium mt-2 text-sm text-black/80">
                {myData.deskripsi}
              </h2>
            </div>
            {/* <ButtonWa /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
