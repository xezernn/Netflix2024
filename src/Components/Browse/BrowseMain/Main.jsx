import React from 'react'
import MainIframe from './MainIframe'
import Sliders1 from './Sliders/Sliders1'

function Main() {
    return (
        <main className='bg-[#141414] '>
            <MainIframe />
            <div className='relative top-[-8%] xmm:top-[-5%]  z-10'>

                <Sliders1 x={0} y={12} />
                <Sliders1 x={8} y={20} />
                <Sliders1 x={20} y={32} />
                <Sliders1 x={32} y={41} />
                <Sliders1 x={41} y={50} />
                <div className='py-8'>  </div>
            </div>
        </main>
    )
}

export default Main