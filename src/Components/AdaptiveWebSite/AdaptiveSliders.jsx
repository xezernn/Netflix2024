import React, { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../../Style/Swiper.css';
import { Data } from '../../Context/DataContext';
import { Link } from 'react-router-dom';

export default function AdaptiveSlider() {
    const data = useContext(Data)


    return (
        <>
            <Swiper
                slidesPerView={2.2}
                spaceBetween={2}
                pagination={{
                    clickable: true,
                }}
                className="mySwiper"
            >
                {
                    data?.titles?.slice(0,15).map((item) => (
                        <SwiperSlide>
                            <Link to={"/app-download"} className=''>
                                <img className='rounded-[3px]' src={item?.jawSummary?.backgroundImage?.url} alt="video img" />
                            </Link>
                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </>
    );
}
