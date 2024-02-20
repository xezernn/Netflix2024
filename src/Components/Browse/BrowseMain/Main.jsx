import React from 'react'
import MainIframe from './MainIframe'
import Sliders1 from './Sliders/Sliders1'

function Main() {
    return (
        <main className='h-screen'>
            <MainIframe />
            <div className='relative top-[-9%] z-10'>
                <Sliders1 />
            </div>
        </main>
    )
}

export default Main