import React, { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Mousewheel, Navigation } from 'swiper/modules';
import "../../../../Style/Swiper.css"
import { Data } from '../../../../Context/DataContext';
import { nanoid } from '@reduxjs/toolkit';


function Sliders1({ x, y }) {
  const data = useContext(Data)


  return (
    <div className='flex flex-col  '>
      <Swiper
        key={nanoid}
        navigation={true}
        loop={true}
        slidesPerView={2}
        spaceBetween={2}
        mousewheel={true}
        centeredSlides={true}

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
            spaceBetween: 10,
          },
          1250: {
            slidesPerView: 6,
            spaceBetween: 10,
          },
        }}
        className="Salammmmmmmmmmmmm Necesiz"
      >
        {
          // data.length !== 0 &&
          data?.titles?.slice(x, y).map((item) => (
            <SwiperSlide>
              <img className='rounded-[3px]' src={item?.jawSummary?.backgroundImage?.url} alt="video img" />
            </SwiperSlide>
          ))

        }


      </Swiper>
    </div>
  );
}

export default Sliders1
