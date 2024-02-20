import React, { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Mousewheel, Navigation } from 'swiper/modules';
import "../../../../Style/Swiper.css"
import { Data } from '../../../../Context/DataContext';


function Sliders1() {

  const data = useContext(Data)
  console.log(data);

  return (
    <div className='flex flex-col h-[150px] my-[3vw] '>
      <h1 className='text-[14px] md:text-[1.5vw] px-[4%] mb-[.5rem] font-[500] text-white  '>The Witcher içeriğini beğenenlere öneriler</h1>
      <Swiper
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
            spaceBetween: 2,
          },
          1250: {
            slidesPerView: 6,
            spaceBetween: 8,
          },
        }}
        className="Salammmmmmmmmmmmm Necesiz"
      >
        {
          data.length !== 0 &&
          data?.titles?.map((item) => (
            <SwiperSlide><img src={item?.jawSummary?.backgroundImage?.url} alt="video img" /> </SwiperSlide>
        ))

        }


      </Swiper>
    </div>
  );
}

export default Sliders1
