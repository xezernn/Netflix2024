import React from 'react'
import BrowseHeader from './BrowseHeaderDark'
import BrowseFooter from './BrowseFooter'
import HomeSliders from './BrowseMain/Sliders/HomeSliders'

function EnYeniler() {
    return (
        <>
            <BrowseHeader />
            <div className='bg-[#141414] pt-[120px] '>
                
                <HomeSliders />
            </div>
            <BrowseFooter />

        </>
    )
}

export default EnYeniler