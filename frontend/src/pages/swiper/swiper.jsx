import "./swiper.css";
import {Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css'





// const imgLink = [
//   "https://res.cloudinary.com/dvytkrzaq/image/upload/v1679635328/online%20store/800px_COLOURBOX8072182_de1amq.jpg",
//   "https://res.cloudinary.com/dvytkrzaq/image/upload/v1679635329/online%20store/black-bowler-hat-on-white-background-vector_n7f2ah.jpg",
//   "https://res.cloudinary.com/dvytkrzaq/image/upload/v1679635328/online%20store/istockphoto-1152609532-170667a_wnxcc7.jpg",
//   "https://res.cloudinary.com/dvytkrzaq/image/upload/v1679635327/online%20store/37-374963_download-hat-free-png-image-hat-in-white_owk3gk.jpg",
  
// ]



const SwiperComponent = () => {
  return (
    <main>
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>


  

    </main>
  );
}

export default SwiperComponent;
