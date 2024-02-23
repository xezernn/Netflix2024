import React from 'react'
import MainIframe from './MainIframe'
import Sliders1 from './Sliders/Sliders1'
import HomeSliders from './Sliders/HomeSliders'

function Main() {
    return (
        <main className=' bg-[#141414]'>
            <MainIframe />
            <div className='pl-[4%] swpierGradi'>
                <div className='relative xsm:top-[-70px] md:top-[-90px]  z-10 '>
                    <h1 className='text-[14px] hed:text-[1.5vw] pb-[.5rem] font-[500] text-white  '>Because you liked The Witcher</h1>

                    <Sliders1 x={0} y={12} />
                </div>
            </div>
            <div className='mt-[-40px]'>
                <HomeSliders />
            </div>
        </main>
    )
}

export default Main