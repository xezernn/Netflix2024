import React from 'react'
import MainIframe from './MainIframe'
import Sliders1 from './Sliders/Sliders1'

function Main() {
    return (
        <main className='bg-[#141414] '>
            <MainIframe />
            <div className='relative  top-[-8%] xmm:top-[-5%] md:top-[-27%] z-10'>
                <div className='   '>
                    <Sliders1 />
                    <Sliders1 />
                    <Sliders1 />
                    <Sliders1 />
                    <Sliders1 />
                    <Sliders1 />
                    <Sliders1 />
                    <Sliders1 />
                    <Sliders1 />
                    <Sliders1 />
                    <div className='py-8'>  </div>
                </div>
            </div>
        </main>
    )
}

export default Main