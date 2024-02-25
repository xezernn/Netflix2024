import React, { useContext } from 'react'
import MainIframe from './MainIframe'
import Sliders1 from './Sliders/Sliders1'
import HomeSliders from './Sliders/HomeSliders'
import Slider2 from './Sliders/Slider2'
import { Data } from '../../../Context/DataContext'

function Main() {

    const data = useContext(Data)

    return (
        <main className=' bg-[#141414]'>
            <MainIframe />
            <div className='relative top-[20px] pb-[40px] xmm:top-[0] med:pb-[60px] md:top-[-80px] md:pb-[20px] pl-[4%] swpierGradi mt-[-80px]'>
                <div className='relative z-10 '>
                    <h1 className='text-[14px] hed:text-[1.5vw]  font-[500] text-white  '>Because you liked The Witcher</h1>
                    <Sliders1 x={0} y={12} />
                </div>
            </div>
            <div className='xmd:hidden mt-[-60px] md:mt-[-80px]'>
                <HomeSliders />
            </div>
            <div className='hidden xmd:block mt-[-60px] pl-[4%] md:mt-[-80px]'>
                {
                    data?.name?.map((item, i) => (
                        <Slider2 key={i} item={item} />
                    ))
                }

            </div>
        </main>
    )
}

export default Main