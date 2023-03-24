// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import React, {  useState } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./swiperStyle.css";

// import required modules
import { Pagination, Navigation } from "swiper";

const imgLink = [
  "https://res.cloudinary.com/dvytkrzaq/image/upload/v1679635328/online%20store/800px_COLOURBOX8072182_de1amq.jpg",
  "https://res.cloudinary.com/dvytkrzaq/image/upload/v1679635329/online%20store/black-bowler-hat-on-white-background-vector_n7f2ah.jpg",
  "https://res.cloudinary.com/dvytkrzaq/image/upload/v1679635328/online%20store/istockphoto-1152609532-170667a_wnxcc7.jpg",
  "https://res.cloudinary.com/dvytkrzaq/image/upload/v1679635327/online%20store/37-374963_download-hat-free-png-image-hat-in-white_owk3gk.jpg",
]


const SwiperComponent = () => {

  const [swiperRef, setSwiperRef] = useState(null);

  let appendNumber = 4;
  let prependNumber = 1;

  const prepend2 = () => {
    swiperRef.prependSlide([
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
    ]);
  };

  const prepend = () => {
    swiperRef.prependSlide(
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>"
    );
  };

  const append = () => {
    swiperRef.appendSlide(
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>"
    );
  };

  const append2 = () => {
    swiperRef.appendSlide([
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
    ]);
  };

  return (
    <>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>

      <p className="append-buttons">
        <button onClick={() => prepend2()} className="prepend-2-slides">
          Prepend 2 Slides
        </button>
        <button onClick={() => prepend()} className="prepend-slide">
          Prepend Slide
        </button>
        <button onClick={() => append()} className="append-slide">
          Append Slide
        </button>
        <button onClick={() => append2()} className="append-2-slides">
          Append 2 Slides
        </button>
      </p>
    </>



  );
};

export default SwiperComponent;
