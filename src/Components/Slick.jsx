import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import React from "react";

const Slick = ({ props }) => {
  return (
    <div>
      <Carousel showArrows={false} showStatus={false} showThumbs={false}>
        <div className="">
          <h1 className="">L.Tanah</h1>
          <p className="">{props.lb}</p>
        </div>
        <div className="">
          <h1 className="">L.Tanah</h1>
          <p className="">{props.lb}</p>
        </div>
        <div className="">
          <h1 className="">L.Tanah</h1>
          <p className="">{props.lb}</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Slick;
