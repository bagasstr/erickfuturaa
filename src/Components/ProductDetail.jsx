import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { data } from "../Data/ListingTerbaru/DataTerbaru.json";

const ProductDetail = () => {
  const { title } = useParams();
  const myData = data.find((data) => data.title === String(title));
  useEffect(() => {}, [myData]);

  return (
    <div className="">
      <div className="">
        <div className="">
          <img src={myData.thumnail} alt="" />
          <h1 className="">{myData.title}</h1>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
