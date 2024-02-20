import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Mousewheel, Navigation } from 'swiper/modules';
import "../../../../Style/Swiper.css"


function Sliders1() {
  return (
    <>
      <Swiper
        navigation={true}
        loop={true}
        slidesPerView={2.3}
        spaceBetween={2}
        mousewheel={true}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination, Mousewheel]}
        breakpoints={{
          500: {
            slidesPerView: 3,
            spaceBetween: 2,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 2,
          },
          1100: {
            slidesPerView: 5,
            spaceBetween: 2,
          },
          1250: {
            slidesPerView: 6,
            spaceBetween: 8,
          },
        }}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1 </SwiperSlide>
        <SwiperSlide>Slide 2 </SwiperSlide>
        <SwiperSlide>Slide 3 </SwiperSlide>
        <SwiperSlide>Slide 4 </SwiperSlide>
        <SwiperSlide>Slide 5 </SwiperSlide>
        <SwiperSlide>Slide 6 </SwiperSlide>
        <SwiperSlide>Slide 7 </SwiperSlide>
        <SwiperSlide>Slide 8 </SwiperSlide>
        <SwiperSlide>Slide 9 </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Sliders1
