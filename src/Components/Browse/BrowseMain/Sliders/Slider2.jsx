import React, { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Mousewheel, Navigation } from 'swiper/modules';
// import "https://occ-0-7292-2773.1.nflxso.net/dnm/api/v6/rkETp35xJVj-6WaffQsS77awykM/AAAABZf6ikHd4DRAWFjVgM3_0cQOJb6IeL96HZzP00kuIUmc-iaS19PxxtyG2cFFjLH2ZC7ZO_NTdWlclXPkMiMzddtI3Xw6xLjHxBcqFkTi_6E0SBQK3D6Ijp2FXUFd8NH4tKS0.jpg?r=b2e" from './assets/peekyFokinBloyndas.jpg'
import { IoMdPlayCircle, IoIosAddCircleOutline } from "react-icons/io";
import { BsHandThumbsUp } from "react-icons/bs";
import { IoIosArrowDropdown } from "react-icons/io";
import { Data } from '../../../../Context/DataContext';
import { Link } from 'react-router-dom';

function Slider2({item}) {

    const data = useContext(Data)
    return (
        <div className='flex flex-col swiper-col'>
            {/* <h2 className='movieTitle'>{item}</h2> */}
            <h1 className='text-[14px] hed:text-[1.5vw] my-[-30px] font-[500] text-white  '>{item}</h1>

            <Swiper
                navigation={true}
                loop={true}
                slidesPerView={2}
                spaceBetween={2}
                mousewheel={false}
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
            >
                {
                    <>
                        {
                            data?.titles?.slice(0, 18)?.map((item, i) => (
                                <SwiperSlide>
                                    <div className='card-main hovered'>
                                        <img className=' rounded-[3px]'src={item?.jawSummary?.backgroundImage?.url} alt="video img" />
                                    </div>
                                    <div className="card-info">
                                        <div className='info-img'>
                                            <img src={item?.jawSummary?.backgroundImage?.url} alt="" />
                                        </div>
                                        <div className='info-content'>
                                            <div className="info-icons">
                                                <div className='icon-left'>
                                                   <Link to={"/browse/watch"}>
                                                     <IoMdPlayCircle />
                                                   </Link>
                                                    <IoIosAddCircleOutline />
                                                    <BsHandThumbsUp />
                                                </div>
                                                <IoIosArrowDropdown />
                                            </div>
                                            <div className="info-text">
                                                <div><span className='txt-green'>96% Match </span> 6 Seasons <span className='text-box'>HD</span></div>
                                                <div>Violent · Period Piece</div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </>
                }
            </Swiper>
        </div>
    )
}

export default Slider2