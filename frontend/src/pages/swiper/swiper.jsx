// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./swiperStyle.css";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";

const imgLink = [
  "https://res.cloudinary.com/dvytkrzaq/image/upload/v1679635328/online%20store/800px_COLOURBOX8072182_de1amq.jpg",
  "https://res.cloudinary.com/dvytkrzaq/image/upload/v1679635329/online%20store/black-bowler-hat-on-white-background-vector_n7f2ah.jpg",
  "https://res.cloudinary.com/dvytkrzaq/image/upload/v1679635328/online%20store/istockphoto-1152609532-170667a_wnxcc7.jpg",
  "https://res.cloudinary.com/dvytkrzaq/image/upload/v1679635327/online%20store/37-374963_download-hat-free-png-image-hat-in-white_owk3gk.jpg",
];

const SwiperComponent = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <main className="main">
      <Swiper
        spaceBetween={-100}
        centeredSlides={true}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        {imgLink.map((item) => {
          return <SwiperSlide>
            <img width="300px" height="200px" src={item} alt="products" />

          </SwiperSlide>;
        })}

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </main>
  );
};

export default SwiperComponent;
